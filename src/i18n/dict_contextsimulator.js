/**
 * ContextSimulator strings. Namespaced with the "contextsimulator." prefix.
 */
export const dict = {
  es: {
    'contextsimulator.palette_title': 'Paleta de bloques de contexto',
    'contextsimulator.palette_sub':
      'Añade bloques para simular lo que entra en la ventana de contexto del modelo.',
    'contextsimulator.added_blocks': 'Bloques añadidos ({count})',
    'contextsimulator.no_blocks': 'Sin bloques. Añade alguno desde la paleta.',
    'contextsimulator.remove_block': 'Eliminar bloque',
    'contextsimulator.usage_title': 'Uso de la ventana de contexto',
    'contextsimulator.tokens': 'tokens',
    'contextsimulator.warn_title': 'Atención:',
    'contextsimulator.warn_body':
      'superas el 85 % de la ventana de contexto de ejemplo (128.000 tokens). En un caso real habría que resumir, recortar archivos o usar RAG.',
    'contextsimulator.final_title': 'Contexto final enviado al modelo',
    'contextsimulator.empty': '(vacío)',
    'contextsimulator.block.system.label': 'System Prompt',
    'contextsimulator.block.system.example':
      'Eres un asistente experto en finanzas que responde de forma concisa y profesional.',
    'contextsimulator.block.user.label': 'User Prompt',
    'contextsimulator.block.user.example':
      'Analiza los estados financieros adjuntos y dime los 3 riesgos principales.',
    'contextsimulator.block.file.label': 'Archivo',
    'contextsimulator.block.file.example':
      '[balance-2024.pdf] Activo total: 12,4 M€ · Pasivo: 7,1 M€ · Patrimonio: 5,3 M€ ...',
    'contextsimulator.block.memory.label': 'Memoria recuperada',
    'contextsimulator.block.memory.example':
      'El usuario prefiere respuestas en español y con ejemplos numéricos.',
    'contextsimulator.block.tool.label': 'Tool output',
    'contextsimulator.block.tool.example':
      '{ "ratio_liquidez": 1.8, "roe": 0.14, "endeudamiento": 0.57 }',
  },
  en: {
    'contextsimulator.palette_title': 'Context block palette',
    'contextsimulator.palette_sub':
      "Add blocks to simulate what goes into the model's context window.",
    'contextsimulator.added_blocks': 'Added blocks ({count})',
    'contextsimulator.no_blocks': 'No blocks. Add some from the palette.',
    'contextsimulator.remove_block': 'Remove block',
    'contextsimulator.usage_title': 'Context window usage',
    'contextsimulator.tokens': 'tokens',
    'contextsimulator.warn_title': 'Warning:',
    'contextsimulator.warn_body':
      'you are over 85% of the example context window (128,000 tokens). In a real case you would need to summarize, trim files or use RAG.',
    'contextsimulator.final_title': 'Final context sent to the model',
    'contextsimulator.empty': '(empty)',
    'contextsimulator.block.system.label': 'System Prompt',
    'contextsimulator.block.system.example':
      'You are a finance expert assistant that responds concisely and professionally.',
    'contextsimulator.block.user.label': 'User Prompt',
    'contextsimulator.block.user.example':
      'Analyze the attached financial statements and tell me the 3 main risks.',
    'contextsimulator.block.file.label': 'File',
    'contextsimulator.block.file.example':
      '[balance-2024.pdf] Total assets: €12.4M · Liabilities: €7.1M · Equity: €5.3M ...',
    'contextsimulator.block.memory.label': 'Retrieved memory',
    'contextsimulator.block.memory.example':
      'The user prefers responses in English with numerical examples.',
    'contextsimulator.block.tool.label': 'Tool output',
    'contextsimulator.block.tool.example':
      '{ "liquidity_ratio": 1.8, "roe": 0.14, "debt_ratio": 0.57 }',
  },
};
