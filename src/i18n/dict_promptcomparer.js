/**
 * PromptComparer strings, namespaced "promptcomparer.".
 * The sample prompts are translated to natural English equivalents.
 */
export const dict = {
  es: {
    'promptcomparer.poor_title': 'Prompt pobre',
    'promptcomparer.rich_title': 'Prompt mejorado',
    'promptcomparer.poor_prompt': 'Hazme un análisis financiero.',
    'promptcomparer.rich_prompt':
      'Actúa como analista financiero senior con 15 años de experiencia. Analiza los estados financieros adjuntos de 2024-2025: calcula ratios de liquidez, rentabilidad y endeudamiento, identifica 3 riesgos principales y 3 oportunidades. Entrega el resultado en una tabla con: ratio, valor 2024, valor 2025 y comentario. Máximo 400 palabras, tono profesional, sin jerga innecesaria.',
    'promptcomparer.compare': 'Comparar',
    'promptcomparer.hide': 'Ocultar comparativa',
    'promptcomparer.yes': 'Sí',
    'promptcomparer.no': 'No',
    'promptcomparer.why_title': 'Por qué funciona el mejorado:',
    'promptcomparer.why_body':
      'reduce la ambigüedad (rol + objetivo concretos), guía el formato de salida (tabla con columnas definidas), acota el alcance (3 riesgos, 3 oportunidades, máximo 400 palabras) y fija el tono. Menos decisiones para el modelo = respuesta más útil y predecible.',
    'promptcomparer.crit.role': 'Rol definido',
    'promptcomparer.crit.goal': 'Objetivo claro',
    'promptcomparer.crit.context': 'Contexto aportado',
    'promptcomparer.crit.constraints': 'Restricciones',
    'promptcomparer.crit.format': 'Formato de salida',
  },
  en: {
    'promptcomparer.poor_title': 'Weak prompt',
    'promptcomparer.rich_title': 'Improved prompt',
    'promptcomparer.poor_prompt': 'Give me a financial analysis.',
    'promptcomparer.rich_prompt':
      'Act as a senior financial analyst with 15 years of experience. Analyze the attached 2024-2025 financial statements: calculate liquidity, profitability and leverage ratios, identify 3 key risks and 3 opportunities. Deliver the result in a table with: ratio, 2024 value, 2025 value and commentary. Maximum 400 words, professional tone, no unnecessary jargon.',
    'promptcomparer.compare': 'Compare',
    'promptcomparer.hide': 'Hide comparison',
    'promptcomparer.yes': 'Yes',
    'promptcomparer.no': 'No',
    'promptcomparer.why_title': 'Why the improved one works:',
    'promptcomparer.why_body':
      'it reduces ambiguity (specific role + objective), guides the output format (table with defined columns), scopes the task (3 risks, 3 opportunities, max 400 words) and sets the tone. Fewer decisions for the model = a more useful, predictable answer.',
    'promptcomparer.crit.role': 'Defined role',
    'promptcomparer.crit.goal': 'Clear objective',
    'promptcomparer.crit.context': 'Context provided',
    'promptcomparer.crit.constraints': 'Constraints',
    'promptcomparer.crit.format': 'Output format',
  },
};
