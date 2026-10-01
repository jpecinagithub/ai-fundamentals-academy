const es = {
  id: 'm9',
  title: 'MCP: el USB-C de la IA',
  short: 'MCP',
  description: 'Model Context Protocol: el estándar abierto que conecta agentes de IA con herramientas, datos y servicios.',
  icon: 'Cable',
  stage: 'Tools y MCP',
  sections: [
    {
      kind: 'text',
      heading: 'Qué es MCP',
      paragraphs: [
        '**MCP** (Model Context Protocol, protocolo de contexto para modelos) es un **estándar abierto** que define cómo las aplicaciones de IA se conectan con herramientas, bases de datos y servicios externos. Lo creó Anthropic (la empresa de Claude) y hoy lo adopta buena parte de la industria.',
        'Su objetivo es sencillo pero ambicioso: que cualquier agente de IA pueda conectarse a cualquier servicio (GitHub, Google Drive, una base de datos, tu empresa...) **hablando el mismo idioma**, sin integraciones a medida para cada combinación. Es un protocolo, es decir, un conjunto de reglas de comunicación, no un programa ni un modelo.',
      ],
    },
    {
      kind: 'analogy',
      heading: 'Una analogía sencilla',
      body: 'Antes del USB-C, cada móvil necesitaba su propio cargador: el cajón de cables era un caos. El USB-C unificó la conexión: un solo tipo de cable sirve para casi todo. MCP quiere ser el USB-C de la IA: antes, conectar un asistente a cada servicio exigía una integración distinta; con MCP, el servicio publica "su conector" una vez y cualquier agente compatible puede usarlo.',
    },
    {
      kind: 'compare',
      heading: 'Antes de MCP frente a con MCP',
      caption: 'El problema que resuelve MCP es la explosión de integraciones a medida.',
      left: {
        title: 'Antes: integraciones a medida',
        tone: 'poor',
        items: [
          'Cada app de IA necesitaba una integración específica para cada servicio (GitHub, Drive, Slack...).',
          'N aplicaciones × M servicios = un caos de código duplicado y mantenimiento imposible.',
          'Cambiar de proveedor o añadir un servicio nuevo obligaba a reescribir integraciones.',
        ],
      },
      right: {
        title: 'Con MCP: un estándar común',
        tone: 'good',
        items: [
          'Cada servicio expone un servidor MCP una sola vez, siguiendo el protocolo estándar.',
          'Cualquier agente compatible (Claude Code, asistentes, IDEs) se conecta sin código a medida.',
          'Añadir un servicio nuevo = añadir su servidor MCP. Cambiar de agente no rompe nada.',
        ],
      },
    },
    {
      kind: 'flow',
      heading: 'Arquitectura MCP',
      caption: 'El cliente y el servidor hablan MCP entre ellos; cada uno se conecta a su lado en su propio idioma.',
      direction: 'down',
      highlight: [2],
      nodes: [
        { label: 'LLM / Agente', desc: 'El modelo o asistente que necesita datos o acciones externas.' },
        { label: 'Cliente MCP', desc: 'Componente integrado en la app del agente; habla el protocolo MCP.' },
        { label: 'Protocolo MCP', desc: 'El idioma estándar: cómo pedir tools, leer recursos y usar prompts.' },
        { label: 'Servidor MCP', desc: 'Programa que expone las capacidades de un servicio concreto.' },
        { label: 'Herramientas y recursos', desc: 'Lo que ofrece el servicio: crear issues en GitHub, leer archivos, consultar la base de datos...' },
      ],
    },
    {
      kind: 'text',
      heading: 'Los cinco componentes',
      paragraphs: [
        '**MCP Client:** vive dentro de la aplicación del agente (p. ej. Claude Code) y es quien inicia la conversación con los servidores. **MCP Server:** programa ligero que expone las capacidades de un servicio concreto; hay servidores oficiales y comunitarios para GitHub, Google Drive, bases de datos, navegadores y cientos de servicios más.',
        'Lo que un servidor puede exponer son tres cosas: **Tools** (acciones que el modelo puede invocar: crear un issue, ejecutar una consulta), **Resources** (datos que el modelo puede leer: archivos, registros, documentación) y **Prompts** (plantillas de instrucciones reutilizables, parecidas a las skills del módulo anterior).',
      ],
    },
    {
      kind: 'example',
      heading: 'Ejemplo real',
      label: 'Claude Code → MCP → GitHub',
      body: 'Un desarrollador usa Claude Code con el servidor MCP de GitHub instalado. Le dice: "revisa los issues abiertos del repo mi-app y propón cuáles son bugs". Claude Code, a través del cliente MCP, pide al servidor la lista de issues (Resources), la lee, razona cuáles son bugs y, si el usuario lo aprueba, crea comentarios o PRs usando las Tools del servidor. El desarrollador no escribió ni una línea de integración: instaló el servidor MCP y funcionó.',
      result: 'Moraleja: MCP convierte "conectar la IA a un servicio" en instalar un conector estándar, no en programar una integración.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'MCP no es un modelo de IA',
      body: 'Error muy frecuente: MCP no genera texto, no "piensa" y no sustituye a ningún modelo. Es **un protocolo de comunicación**, como el HTTP de la web: define cómo se hablan el agente y los servicios. La inteligencia sigue viniendo del LLM; MCP solo le da enchufes estándar donde conectar sus manos.',
    },
    { kind: 'simulator', component: 'MCPSimulator' },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Una empresa quiere que su asistente de IA pueda consultar el stock de su base de datos interna y también crear tareas en su gestor de proyectos.',
      question: '¿Qué papel juega MCP en esta solución?',
      options: [
        'MCP es el modelo de IA que responderá a los empleados',
        'MCP es el protocolo estándar mediante el cual el asistente se conectará a la base de datos y al gestor de proyectos, usando un servidor MCP para cada servicio en lugar de integraciones a medida',
        'MCP sustituye a la base de datos: los datos se guardan en el protocolo',
        'MCP solo sirve para modelos de Anthropic y no se puede usar aquí',
      ],
      correctIndex: 1,
      explanation: 'MCP es el idioma común: la empresa expone (o instala) un servidor MCP para la base de datos y otro para el gestor de proyectos, y el asistente se conecta a ambos con el mismo protocolo. No es un modelo ni un almacén de datos, y es un estándar abierto.',
    },
  ],
  keyConcepts: [
    { term: 'MCP', def: 'Model Context Protocol: estándar abierto que define cómo las aplicaciones de IA se conectan con herramientas y servicios externos.' },
    { term: 'MCP Client', def: 'Componente dentro de la app del agente que inicia la comunicación con los servidores usando el protocolo MCP.' },
    { term: 'MCP Server', def: 'Programa que expone las capacidades de un servicio concreto (GitHub, Drive, base de datos...) siguiendo el estándar MCP.' },
    { term: 'Tools (en MCP)', def: 'Acciones que un servidor MCP expone para que el modelo las invoque: crear issues, ejecutar consultas, enviar mensajes...' },
    { term: 'Resources (en MCP)', def: 'Datos que un servidor MCP expone para lectura del modelo: archivos, registros, documentación.' },
    { term: 'Prompts (en MCP)', def: 'Plantillas de instrucciones reutilizables que un servidor MCP puede ofrecer, similares a skills.' },
  ],
  mistakes: [
    { wrong: 'MCP es un modelo de IA.', right: 'Es un protocolo de comunicación, no un modelo: no genera texto ni "piensa". La inteligencia sigue viniendo del LLM.' },
    { wrong: 'MCP es solo para Claude.', right: 'Es un estándar abierto creado por Anthropic pero adoptado por la industria: lo usan muchos agentes, IDEs y herramientas.' },
    { wrong: 'Con MCP ya no hacen falta APIs.', right: 'Los servidores MCP suelen envolver APIs existentes: MCP estandariza cómo se exponen, no elimina la necesidad de que el servicio exista.' },
    { wrong: 'MCP y tool calling son lo mismo.', right: 'Tool calling es el mecanismo por el que el modelo pide usar una herramienta; MCP es el estándar para exponer y descubrir esas herramientas.' },
  ],
};

const en = {
  id: 'm9',
  title: 'MCP: the USB-C of AI',
  short: 'MCP',
  description: 'Model Context Protocol: the open standard that connects AI agents with tools, data and services.',
  icon: 'Cable',
  stage: 'Tools & MCP',
  sections: [
    {
      kind: 'text',
      heading: 'What MCP is',
      paragraphs: [
        '**MCP** (Model Context Protocol) is an **open standard** that defines how AI applications connect to tools, databases and external services. It was created by Anthropic (the company behind Claude) and much of the industry adopts it today.',
        'Its goal is simple but ambitious: that any AI agent can connect to any service (GitHub, Google Drive, a database, your company…) **speaking the same language**, without custom integrations for every combination. It is a protocol — a set of communication rules — not a program or a model.',
      ],
    },
    {
      kind: 'analogy',
      heading: 'A simple analogy',
      body: 'Before USB-C, every phone needed its own charger: the cable drawer was chaos. USB-C unified the connection: a single cable type works for almost everything. MCP wants to be the USB-C of AI: before, connecting an assistant to each service required a different integration; with MCP, the service publishes “its connector” once and any compatible agent can use it.',
    },
    {
      kind: 'compare',
      heading: 'Before MCP vs. with MCP',
      caption: 'The problem MCP solves is the explosion of custom integrations.',
      left: {
        title: 'Before: custom integrations',
        tone: 'poor',
        items: [
          'Each AI app needed a specific integration for each service (GitHub, Drive, Slack…).',
          'N apps × M services = a chaos of duplicated code and impossible maintenance.',
          'Switching providers or adding a new service forced integrations to be rewritten.',
        ],
      },
      right: {
        title: 'With MCP: a common standard',
        tone: 'good',
        items: [
          'Each service exposes an MCP server once, following the standard protocol.',
          'Any compatible agent (Claude Code, assistants, IDEs) connects with no custom code.',
          'Adding a new service = adding its MCP server. Switching agents breaks nothing.',
        ],
      },
    },
    {
      kind: 'flow',
      heading: 'MCP architecture',
      caption: 'The client and the server speak MCP to each other; each connects to its own side in its own language.',
      direction: 'down',
      highlight: [2],
      nodes: [
        { label: 'LLM / Agent', desc: 'The model or assistant that needs external data or actions.' },
        { label: 'MCP Client', desc: 'Component built into the agent’s app; it speaks the MCP protocol.' },
        { label: 'MCP Protocol', desc: 'The standard language: how to request tools, read resources and use prompts.' },
        { label: 'MCP Server', desc: 'Program that exposes the capabilities of a specific service.' },
        { label: 'Tools and resources', desc: 'What the service offers: creating GitHub issues, reading files, querying the database…' },
      ],
    },
    {
      kind: 'text',
      heading: 'The five components',
      paragraphs: [
        '**MCP Client:** lives inside the agent’s application (e.g. Claude Code) and initiates the conversation with servers. **MCP Server:** a lightweight program that exposes the capabilities of a specific service; there are official and community servers for GitHub, Google Drive, databases, browsers and hundreds more services.',
        'What a server can expose comes down to three things: **Tools** (actions the model can invoke: creating an issue, running a query), **Resources** (data the model can read: files, records, documentation) and **Prompts** (reusable instruction templates, similar to the skills from the previous module).',
      ],
    },
    {
      kind: 'example',
      heading: 'Real example',
      label: 'Claude Code → MCP → GitHub',
      body: 'A developer uses Claude Code with the GitHub MCP server installed. They say: “review the open issues in the mi-app repo and suggest which ones are bugs”. Claude Code, through the MCP client, asks the server for the issue list (Resources), reads it, reasons about which ones are bugs and, if the user approves, creates comments or PRs using the server’s Tools. The developer did not write a single line of integration: they installed the MCP server and it worked.',
      result: 'Takeaway: MCP turns “connecting AI to a service” into installing a standard connector, not programming an integration.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'MCP is not an AI model',
      body: 'A very common mistake: MCP does not generate text, does not “think” and does not replace any model. It is **a communication protocol**, like HTTP for the web: it defines how the agent and services talk to each other. The intelligence still comes from the LLM; MCP only gives it standard sockets to plug its hands into.',
    },
    { kind: 'simulator', component: 'MCPSimulator' },
    {
      kind: 'exercise',
      heading: 'Check your understanding',
      prompt: 'A company wants its AI assistant to check stock in its internal database and also create tasks in its project manager.',
      question: 'What role does MCP play in this solution?',
      options: [
        'MCP is the AI model that will answer employees',
        'MCP is the standard protocol through which the assistant will connect to the database and the project manager, using one MCP server per service instead of custom integrations',
        'MCP replaces the database: data is stored in the protocol',
        'MCP only works for Anthropic models and cannot be used here',
      ],
      correctIndex: 1,
      explanation: 'MCP is the common language: the company exposes (or installs) one MCP server for the database and another for the project manager, and the assistant connects to both with the same protocol. It is not a model or a data store, and it is an open standard.',
    },
  ],
  keyConcepts: [
    { term: 'MCP', def: 'Model Context Protocol: open standard defining how AI applications connect to external tools and services.' },
    { term: 'MCP Client', def: 'Component inside the agent’s app that initiates communication with servers using the MCP protocol.' },
    { term: 'MCP Server', def: 'Program that exposes the capabilities of a specific service (GitHub, Drive, database…) following the MCP standard.' },
    { term: 'Tools (in MCP)', def: 'Actions an MCP server exposes for the model to invoke: creating issues, running queries, sending messages…' },
    { term: 'Resources (in MCP)', def: 'Data an MCP server exposes for the model to read: files, records, documentation.' },
    { term: 'Prompts (in MCP)', def: 'Reusable instruction templates an MCP server can offer, similar to skills.' },
  ],
  mistakes: [
    { wrong: 'MCP is an AI model.', right: 'It is a communication protocol, not a model: it does not generate text or “think”. The intelligence still comes from the LLM.' },
    { wrong: 'MCP is only for Claude.', right: 'It is an open standard created by Anthropic but adopted by the industry: many agents, IDEs and tools use it.' },
    { wrong: 'With MCP you no longer need APIs.', right: 'MCP servers usually wrap existing APIs: MCP standardizes how they are exposed; it does not remove the need for the service to exist.' },
    { wrong: 'MCP and tool calling are the same thing.', right: 'Tool calling is the mechanism by which the model asks to use a tool; MCP is the standard for exposing and discovering those tools.' },
  ],
};

export default { es, en };
