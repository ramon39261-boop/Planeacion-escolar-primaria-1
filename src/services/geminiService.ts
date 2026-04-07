import { GoogleGenAI } from "@google/genai";
import { CampoFormativo, Contenido, PDA } from "../constants";

export const generateEducationalPlan = async (
  campo: CampoFormativo,
  contenido: Contenido,
  pda: PDA
): Promise<string> => {
  const apiKey = process.env.VITE_API_KEY;
  if (!apiKey) {
    throw new Error("La clave de API de Gemini no está configurada. Por favor, asegúrate de que esté en el panel de Secrets.");
  }

  const ai = new GoogleGenAI({ apiKey });
  const model = "gemini-3-flash-preview";

  const prompt = `Actúa como un experto pedagogo mexicano especializado en el Plan de Estudios 2022 de la Nueva Escuela Mexicana (NEM).
Genera una planeación didáctica detallada para PRIMER GRADO de primaria.

DATOS CURRICULARES:
- Campo Formativo: ${campo.nombre}
- Contenido: ${contenido.titulo}
- Proceso de Desarrollo de Aprendizaje (PDA): ${pda.descripcion}
${pda.actividades ? `- Actividades sugeridas como base: ${pda.actividades.join(', ')}` : ''}

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

  const response = await ai.models.generateContent({
    model,
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  return response.text || "No se pudo generar el contenido.";
};
