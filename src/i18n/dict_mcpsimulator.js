/**
 * MCPSimulator strings, namespaced "mcpsimulator.".
 * Sample tool requests/responses are translated too
 * (informe → report, clientes → customers, mi-portfolio → my-portfolio).
 */
export const dict = {
  es: {
    'mcpsimulator.title': 'Simulador MCP',
    'mcpsimulator.sub': 'Elige una herramienta y envía una petición para ver el recorrido.',
    'mcpsimulator.tool_prefix': 'TOOL:',
    'mcpsimulator.send': 'Enviar petición',
    'mcpsimulator.sending': 'Enviando…',
    'mcpsimulator.log_placeholder': '// el request y la response aparecerán aquí…',
    'mcpsimulator.log_request': '→ request: {text}',
    'mcpsimulator.log_response': '← response: {text}',
    'mcpsimulator.analogy_title': 'La analogía «USB-C»:',
    'mcpsimulator.analogy_body':
      'el mismo MCP CLIENT sirve para GitHub, Google Drive y la base de datos sin escribir integraciones a medida para cada una. Cambias de herramienta y el protocolo es idéntico: un solo conector estándar para todo.',
    'mcpsimulator.tool.github.request': "mcp.call_tool('github.list_repos')",
    'mcpsimulator.tool.github.response':
      '{ "repos": ["ai-fundamentals", "mi-portfolio", "chatbot"], "count": 3 }',
    'mcpsimulator.tool.drive.request': "mcp.call_tool('drive.search_files', { q: 'informe' })",
    'mcpsimulator.tool.drive.response':
      '{ "files": ["informe-2025.pdf", "notas.txt"], "count": 2 }',
    'mcpsimulator.tool.database.request':
      "mcp.call_tool('db.query', { sql: 'SELECT * FROM clientes LIMIT 5' })",
    'mcpsimulator.tool.database.response': '{ "rows": 5, "ms": 12 }',
  },
  en: {
    'mcpsimulator.title': 'MCP simulator',
    'mcpsimulator.sub': 'Pick a tool and send a request to watch it travel.',
    'mcpsimulator.tool_prefix': 'TOOL:',
    'mcpsimulator.send': 'Send request',
    'mcpsimulator.sending': 'Sending…',
    'mcpsimulator.log_placeholder': '// the request and response will appear here…',
    'mcpsimulator.log_request': '→ request: {text}',
    'mcpsimulator.log_response': '← response: {text}',
    'mcpsimulator.analogy_title': 'The "USB-C" analogy:',
    'mcpsimulator.analogy_body':
      'the same MCP CLIENT works for GitHub, Google Drive and the database with no custom integrations for each one. Switch tools and the protocol stays identical: one standard connector for everything.',
    'mcpsimulator.tool.github.request': "mcp.call_tool('github.list_repos')",
    'mcpsimulator.tool.github.response':
      '{ "repos": ["ai-fundamentals", "my-portfolio", "chatbot"], "count": 3 }',
    'mcpsimulator.tool.drive.request': "mcp.call_tool('drive.search_files', { q: 'report' })",
    'mcpsimulator.tool.drive.response':
      '{ "files": ["report-2025.pdf", "notes.txt"], "count": 2 }',
    'mcpsimulator.tool.database.request':
      "mcp.call_tool('db.query', { sql: 'SELECT * FROM customers LIMIT 5' })",
    'mcpsimulator.tool.database.response': '{ "rows": 5, "ms": 12 }',
  },
};
