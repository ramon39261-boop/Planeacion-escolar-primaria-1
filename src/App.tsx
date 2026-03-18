import { useState, useMemo } from 'react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';
import { 
  BookOpen, 
  ChevronRight, 
  Loader2, 
  Share2, 
  Sparkles, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CURRICULO, CampoFormativo, Contenido, PDA } from './constants';

export default function App() {
  const [selectedCampo, setSelectedCampo] = useState<CampoFormativo | null>(null);
  const [selectedContenido, setSelectedContenido] = useState<Contenido | null>(null);
  const [selectedPDA, setSelectedPDA] = useState<PDA | null>(null);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const contenidosDisponibles = useMemo(() => {
    return selectedCampo ? selectedCampo.contenidos : [];
  }, [selectedCampo]);

  const pdasDisponibles = useMemo(() => {
    return selectedContenido ? selectedContenido.pdas : [];
  }, [selectedContenido]);

  const handleGenerate = async () => {
    if (!selectedCampo || !selectedContenido || !selectedPDA) return;

    setLoading(true);
    setPlan(null);
    setError(null);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("La clave de API de Gemini no está configurada. Por favor, asegúrate de que esté en el panel de Secrets.");
      }

      const genAI = new GoogleGenAI({ apiKey });
      const model = "gemini-3-flash-preview";

      const prompt = `Actúa como un experto pedagogo mexicano especializado en el Plan de Estudios 2022 de la Nueva Escuela Mexicana (NEM).
      Genera una planeación didáctica detallada para PRIMER GRADO de primaria.
      
      DATOS CURRICULARES:
      - Campo Formativo: ${selectedCampo.nombre}
      - Contenido: ${selectedContenido.titulo}
      - Proceso de Desarrollo de Aprendizaje (PDA): ${selectedPDA.descripcion}
      ${selectedPDA.actividades ? `- Actividades sugeridas como base: ${selectedPDA.actividades.join(', ')}` : ''}
      
      ESTRUCTURA REQUERIDA:
      1. Título del Proyecto
      2. Justificación Pedagógica
      3. Metodología Sugerida
      4. Secuencia Didáctica (Inicio, Desarrollo, Cierre)
      5. Evaluación Formativa
      6. Recursos Necesarios
      7. Ajustes Razonables
      
      INSTRUCCIONES IMPORTANTES:
      - NO incluyas saludos ni introducciones conversacionales.
      - Comienza directamente con el Título del Proyecto.
      - Utiliza un tono profesional y técnico.
      - Formatea la respuesta con Markdown claro y profesional.`;

      const result = await genAI.models.generateContent({
        model,
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      });

      setPlan(result.text || "No se pudo generar el contenido.");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    if (!plan) return;
    
    const textToShare = `Planeación Didáctica - 1° Primaria\n\n${plan}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Planeación Didáctica 1° Primaria',
          text: textToShare,
        });
      } catch (err) {
        console.error('Error al compartir:', err);
      }
    } else {
      // Fallback: Copiar al portapapeles
      try {
        await navigator.clipboard.writeText(textToShare);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Error al copiar:', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Planeador Escolar 1°</h1>
              <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Primaria · México</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar / Form */}
        <div className="lg:col-span-4 space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Configuración
            </h2>

            <div className="space-y-4">
              {/* Campo Formativo */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1 ml-1">Campo Formativo</label>
                <select 
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all appearance-none"
                  onChange={(e) => {
                    const campo = CURRICULO.find(c => c.id === e.target.value);
                    setSelectedCampo(campo || null);
                    setSelectedContenido(null);
                    setSelectedPDA(null);
                  }}
                  value={selectedCampo?.id || ""}
                >
                  <option value="">Selecciona un campo...</option>
                  {CURRICULO.map(campo => (
                    <option key={campo.id} value={campo.id}>{campo.nombre}</option>
                  ))}
                </select>
              </div>

              {/* Contenido */}
              <AnimatePresence>
                {selectedCampo && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <label className="block text-xs font-bold text-stone-700 mb-1 ml-1">Contenido</label>
                    <select 
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all appearance-none"
                      onChange={(e) => {
                        const cont = contenidosDisponibles.find(c => c.id === e.target.value);
                        setSelectedContenido(cont || null);
                        setSelectedPDA(null);
                      }}
                      value={selectedContenido?.id || ""}
                    >
                      <option value="">Selecciona un contenido...</option>
                      {contenidosDisponibles.map(cont => (
                        <option key={cont.id} value={cont.id}>{cont.titulo}</option>
                      ))}
                    </select>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* PDA */}
              <AnimatePresence>
                {selectedContenido && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1 ml-1">PDA (Proceso de Desarrollo)</label>
                      <select 
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all appearance-none"
                        onChange={(e) => {
                          const pda = pdasDisponibles.find(p => p.id === e.target.value);
                          setSelectedPDA(pda || null);
                        }}
                        value={selectedPDA?.id || ""}
                      >
                        <option value="">Selecciona un PDA...</option>
                        {pdasDisponibles.map(pda => (
                          <option key={pda.id} value={pda.id}>{pda.descripcion}</option>
                        ))}
                      </select>
                    </div>

                    {selectedPDA?.actividades && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4"
                      >
                        <h4 className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-2">Actividades Sugeridas</h4>
                        <ul className="space-y-2">
                          {selectedPDA.actividades.map((act, idx) => (
                            <li key={idx} className="text-xs text-emerald-900 flex gap-2">
                              <span className="text-emerald-400 font-bold">•</span>
                              {act}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={handleGenerate}
                disabled={!selectedPDA || loading}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all ${
                  !selectedPDA || loading 
                    ? 'bg-stone-100 text-stone-400 cursor-not-allowed' 
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200 active:scale-[0.98]'
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generando...
                  </>
                ) : (
                  <>
                    Generar Planeación
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </section>

          {error && (
            <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-xs text-red-800 leading-relaxed">{error}</p>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8">
          <div className="bg-white min-h-[600px] rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col">
            {plan ? (
              <>
                <div className="p-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Planeación Generada</span>
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg text-xs font-bold hover:bg-stone-50 transition-colors"
                  >
                    {copySuccess ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Copiado
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        Compartir Texto
                      </>
                    )}
                  </button>
                </div>
                <div className="p-8 prose prose-stone max-w-none prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg">
                  <Markdown>{plan}</Markdown>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-stone-300" />
                </div>
                <h3 className="text-lg font-bold text-stone-800 mb-2">Listo para planear</h3>
                <p className="text-sm text-stone-500 max-w-xs">
                  Selecciona un campo formativo, contenido y PDA para comenzar a generar tu planeación didáctica.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-4 py-8 border-t border-stone-200 mt-8">
        <p className="text-center text-xs text-stone-400">
          Desarrollado para el apoyo docente en México · 2026
        </p>
      </footer>
    </div>
  );
}
