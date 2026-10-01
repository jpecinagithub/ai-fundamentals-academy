/**
 * ArchitectureExplorer strings. Namespaced with the "architectureexplorer." prefix.
 */
export const dict = {
  es: {
    'architectureexplorer.title': 'Explorador de arquitectura',
    'architectureexplorer.intro':
      'Pulsa cada pieza para ver qué papel juega en el sistema. Las piezas con módulo enlazan a su explicación completa.',
    'architectureexplorer.view_module': 'Ver módulo',
    'architectureexplorer.no_module': 'Sin módulo asociado',
    'architectureexplorer.main_chain': 'Cadena principal de una petición',
    'architectureexplorer.chain_note':
      'Las piezas laterales (tools, MCP, memoria, RAG, base de datos, servicios) se conectan al backend o al LLM según lo necesite cada petición; GitHub y Vercel sostienen el ciclo de desarrollo y despliegue.',
    'architectureexplorer.node.usuario.label': 'USUARIO',
    'architectureexplorer.node.usuario.desc':
      'La persona que usa la aplicación desde el navegador: escribe prompts y recibe respuestas.',
    'architectureexplorer.node.frontend.label': 'REACT FRONTEND',
    'architectureexplorer.node.frontend.desc':
      'Interfaz construida con React: captura la entrada del usuario, llama al backend y muestra el resultado.',
    'architectureexplorer.node.backend.label': 'BACKEND',
    'architectureexplorer.node.backend.desc':
      'Servidor que valida las peticiones, guarda la API key a salvo y orquesta la lógica de la app.',
    'architectureexplorer.node.api.label': 'AI API',
    'architectureexplorer.node.api.desc':
      'Endpoint HTTP del proveedor de IA: recibe el JSON con el prompt y devuelve los tokens generados.',
    'architectureexplorer.node.llm.label': 'LLM',
    'architectureexplorer.node.llm.desc':
      'El modelo de lenguaje: predice el siguiente token una y otra vez hasta completar la respuesta.',
    'architectureexplorer.node.tools.label': 'TOOLS',
    'architectureexplorer.node.tools.desc':
      'Funciones que el agente puede invocar: consultar el clima, calcular, buscar en la web.',
    'architectureexplorer.node.mcp.label': 'MCP',
    'architectureexplorer.node.mcp.desc':
      'Protocolo estándar (el «USB-C» de la IA) para conectar herramientas externas con un solo conector.',
    'architectureexplorer.node.servicios.label': 'SERVICIOS',
    'architectureexplorer.node.servicios.desc':
      'APIs externas de terceros: clima, mapas, correo, pagos... accesibles vía tools o MCP.',
    'architectureexplorer.node.memoria.label': 'MEMORIA',
    'architectureexplorer.node.memoria.desc':
      'Historial de la conversación que se reinyecta como contexto para que el modelo «recuerde».',
    'architectureexplorer.node.rag.label': 'RAG',
    'architectureexplorer.node.rag.desc':
      'Recupera fragmentos de tus documentos y los añade al prompt para responder con tus datos.',
    'architectureexplorer.node.database.label': 'BASE DE DATOS',
    'architectureexplorer.node.database.desc':
      'Almacena usuarios, sesiones, embeddings y resultados de forma persistente.',
    'architectureexplorer.node.github.label': 'GITHUB',
    'architectureexplorer.node.github.desc':
      'Repositorio del código fuente con control de versiones y despliegue continuo.',
    'architectureexplorer.node.vercel.label': 'VERCEL',
    'architectureexplorer.node.vercel.desc':
      'Plataforma donde se despliegan el frontend y el backend para que sean accesibles en internet.',
  },
  en: {
    'architectureexplorer.title': 'Architecture explorer',
    'architectureexplorer.intro':
      'Click each piece to see the role it plays in the system. Pieces with a module link to their full explanation.',
    'architectureexplorer.view_module': 'View module',
    'architectureexplorer.no_module': 'No associated module',
    'architectureexplorer.main_chain': 'Main request chain',
    'architectureexplorer.chain_note':
      'The side pieces (tools, MCP, memory, RAG, database, services) connect to the backend or the LLM as each request requires; GitHub and Vercel support the development and deployment cycle.',
    'architectureexplorer.node.usuario.label': 'USER',
    'architectureexplorer.node.usuario.desc':
      'The person using the application from the browser: writes prompts and receives responses.',
    'architectureexplorer.node.frontend.label': 'REACT FRONTEND',
    'architectureexplorer.node.frontend.desc':
      'Interface built with React: captures user input, calls the backend and displays the result.',
    'architectureexplorer.node.backend.label': 'BACKEND',
    'architectureexplorer.node.backend.desc':
      'Server that validates requests, keeps the API key safe and orchestrates the app logic.',
    'architectureexplorer.node.api.label': 'AI API',
    'architectureexplorer.node.api.desc':
      'HTTP endpoint of the AI provider: receives the JSON with the prompt and returns the generated tokens.',
    'architectureexplorer.node.llm.label': 'LLM',
    'architectureexplorer.node.llm.desc':
      'The language model: predicts the next token over and over until the response is complete.',
    'architectureexplorer.node.tools.label': 'TOOLS',
    'architectureexplorer.node.tools.desc':
      'Functions the agent can invoke: check the weather, calculate, search the web.',
    'architectureexplorer.node.mcp.label': 'MCP',
    'architectureexplorer.node.mcp.desc':
      'Standard protocol (the "USB-C" of AI) for connecting external tools with a single connector.',
    'architectureexplorer.node.servicios.label': 'SERVICES',
    'architectureexplorer.node.servicios.desc':
      'Third-party external APIs: weather, maps, email, payments... accessible via tools or MCP.',
    'architectureexplorer.node.memoria.label': 'MEMORY',
    'architectureexplorer.node.memoria.desc':
      'Conversation history that is re-injected as context so the model "remembers".',
    'architectureexplorer.node.rag.label': 'RAG',
    'architectureexplorer.node.rag.desc':
      'Retrieves fragments of your documents and adds them to the prompt to answer with your data.',
    'architectureexplorer.node.database.label': 'DATABASE',
    'architectureexplorer.node.database.desc':
      'Stores users, sessions, embeddings and results persistently.',
    'architectureexplorer.node.github.label': 'GITHUB',
    'architectureexplorer.node.github.desc':
      'Source code repository with version control and continuous deployment.',
    'architectureexplorer.node.vercel.label': 'VERCEL',
    'architectureexplorer.node.vercel.desc':
      'Platform where the frontend and backend are deployed to be accessible on the internet.',
  },
};
