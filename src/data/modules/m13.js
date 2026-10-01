const es = {
  id: 'm13',
  title: 'Agentes de escritorio y de trabajo',
  short: 'Agentes de trabajo',
  description: 'Más allá del chat: agentes que completan tareas de principio a fin usando tus aplicaciones y tus archivos. Qué son, qué herramientas actuales los encarnan y un ejemplo guiado paso a paso.',
  icon: 'MonitorSmartphone',
  stage: 'Agentes',
  sections: [
    {
      kind: 'text',
      heading: 'El concepto: agentes que terminan el trabajo',
      paragraphs: [
        'Hay una familia de agentes que no vive en una ventana de chat, sino **en tu escritorio y en tus aplicaciones de trabajo**. Su promesa es distinta: no te ayudan a hacer una tarea, **la completan de principio a fin** usando tus apps y tus archivos como lo harías tú.',
        'Tú le das un objetivo en lenguaje natural —"analiza mis gastos del trimestre y prepara una presentación"— y el agente se pone en marcha: abre tu hoja de cálculo, lee los datos, hace los cálculos, crea las diapositivas y te entrega el resultado para que lo revises. Tú defines el qué; él se encarga del cómo, navegando entre aplicaciones.',
        'Fíjate en la diferencia con un chatbot: el chatbot te explicaría cómo hacer la presentación; el asistente te ayudaría con partes sueltas si se lo pides; el **agente de trabajo** te entrega la presentación hecha. Es el salto de "ayudar a pensar" a "ayudar a hacer".',
      ],
    },
    {
      kind: 'analogy',
      heading: 'Del recadero al gestor',
      body: 'Un recadero hace exactamente lo que le dices: "lleva esta carta a correos". Si correos está cerrado, vuelve con la carta y te lo cuenta. Un gestor recibe un objetivo —"quiero enviar esta documentación hoy"— y si correos está cerrado busca una alternativa: mensajería urgente, envío digital o lo reprograma para mañana a primera hora. Los agentes de escritorio y de trabajo aspiran a ser gestores, no recaderos: ante un obstáculo, prueban otra vía en lugar de devolverte el problema intacto.',
    },
    {
      kind: 'text',
      heading: 'Los ejemplos actuales',
      paragraphs: [
        'Este espacio evoluciona a toda velocidad, pero hoy ya existen productos que encarnan la idea. **ChatGPT Work** (de OpenAI) plantea agentes que trabajan con tus documentos y aplicaciones. **Claude**, de Anthropic, ofrece modos de trabajo prolongado sobre archivos y proyectos (conocidos en distintos momentos como Cowork o modos agente de escritorio). **Meta Muse** es el asistente-agente de Meta integrado en sus aplicaciones y dispositivos. **Gemini Spark** es la apuesta de Google en esta misma dirección, conectada a su ecosistema de productividad.',
        'Todos comparten el mismo patrón: se conectan a tus **archivos, tu correo, tu calendario y tus aplicaciones**, entienden el contexto de tu trabajo y ejecutan tareas de varios pasos con tu supervisión.',
        'Lo importante no es memorizar esta lista —cambiará—, sino reconocer el patrón cuando lo veas: si un producto acepta objetivos, usa tus apps y te devuelve trabajo terminado, estás ante un agente de trabajo, se llame como se llame.',
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Verifica siempre la información actual del proveedor',
      body: 'Los nombres, funciones y disponibilidad de estos productos **cambian muy rápido**: lo que hoy se llama de una forma mañana puede renombrarse, fusionarse con otro producto o desaparecer. Este portal está diseñado con los contenidos en **archivos de datos fáciles de actualizar** precisamente por eso. Antes de contratar, instalar o recomendar cualquiera de estas herramientas, verifica siempre la información actual en la web oficial del proveedor.',
    },
    {
      kind: 'example',
      heading: 'Ejemplo guiado: "Analiza mis gastos del trimestre y prepara una presentación"',
      label: 'Caso práctico',
      body: 'Objetivo del usuario: "Analiza mis gastos del trimestre y prepara una presentación". Así lo resuelve un agente de trabajo, paso a paso:\n\nPaso 1 — ENTENDER: interpreta el objetivo y localiza el archivo de gastos del trimestre en tus documentos.\n\nPaso 2 — LEER: abre la hoja de cálculo, identifica las columnas (fecha, categoría, importe) y detecta el rango del trimestre.\n\nPaso 3 — CALCULAR: suma por categorías, compara con el trimestre anterior y detecta las tres partidas que más han crecido.\n\nPaso 4 — DECIDIR EL FORMATO: planifica una presentación de 6 diapositivas: resumen, evolución, top categorías, desviaciones y conclusiones.\n\nPaso 5 — CREAR: genera las diapositivas con gráficos a partir de los cálculos, usando tu plantilla corporativa si existe.\n\nPaso 6 — REVISAR: comprueba que los números cuadran y que no hay datos sensibles expuestos.\n\nPaso 7 — ENTREGAR: te presenta el resultado para tu aprobación antes de enviarlo o guardarlo donde le indiques.',
      result: 'Tú has invertido dos minutos en describir el objetivo y cinco en revisar el resultado. El agente ha hecho el trabajo mecánico intermedio: leer, calcular, diseñar y comprobar.',
    },
    {
      kind: 'compare',
      heading: 'AI assistant vs. AI worker (agente)',
      left: {
        title: 'AI assistant',
        tone: 'a',
        items: [
          'Te ayuda mientras tú haces la tarea.',
          'Responde preguntas y redacta textos.',
          'Ejecuta acciones sueltas cuando se lo pides.',
          'Tú orquestas los pasos; él ejecuta los que le asignas.',
          'Ejemplo: "redáctame el email para el cliente".',
        ],
      },
      right: {
        title: 'AI worker / agente',
        tone: 'b',
        items: [
          'Hace la tarea completa por ti, de principio a fin.',
          'Usa tus aplicaciones y archivos directamente.',
          'Encadena acciones: lee, calcula, crea, envía.',
          'Él orquesta los pasos; tú apruebas el resultado.',
          'Ejemplo: "prepara la propuesta para el cliente y envíasela".',
        ],
      },
    },
    {
      kind: 'checklist',
      heading: 'Qué puede hacer por ti un agente de trabajo',
      items: [
        'Leer y organizar tus archivos: hojas de cálculo, PDFs, presentaciones.',
        'Resumir hilos de correo largos y redactar respuestas pendientes.',
        'Cruzar datos entre aplicaciones: del CRM a la hoja de cálculo, del calendario al informe.',
        'Crear documentos completos: informes, presentaciones, presupuestos.',
        'Preparar reuniones: agenda, resumen de contexto y acta posterior.',
        'Automatizar tareas repetitivas semanales con tu supervisión.',
        'Avisarte cuando algo necesita tu decisión en lugar de decidir por ti.',
      ],
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Le dices a un sistema: "Cada lunes por la mañana, revisa mi bandeja de entrada, resume los correos importantes y prepara un briefing de la semana".',
      question: '¿Qué lo convierte en un agente de trabajo y no en un simple asistente?',
      options: [
        'Que entiende español perfectamente.',
        'Que acepta un objetivo recurrente, usa tu correo de forma autónoma, encadena varios pasos y te entrega el trabajo terminado para tu revisión.',
        'Que responde más rápido que un asistente normal.',
        'Que tiene un nombre comercial atractivo.',
      ],
      correctIndex: 1,
      explanation: 'La clave está en el patrón completo: objetivo (no pregunta suelta), uso autónomo de tus aplicaciones, encadenamiento de pasos y entrega de trabajo terminado con tu supervisión. Ni la velocidad ni el idioma lo definen: lo define la arquitectura de trabajo.',
    },
  ],
  keyConcepts: [
    { term: 'Agente de trabajo', def: 'Agente que completa tareas de principio a fin usando las aplicaciones y archivos del usuario, no solo conversando.' },
    { term: 'Integraciones', def: 'Conexiones del agente con aplicaciones externas (correo, calendario, hojas de cálculo, CRM) que le permiten actuar sobre datos reales.' },
    { term: 'Permisos', def: 'Límites que definen a qué aplicaciones y datos puede acceder el agente y qué acciones requieren aprobación.' },
    { term: 'Contexto de trabajo', def: 'Conjunto de archivos, correos y datos que el agente puede consultar para entender la tarea, como lo haría un compañero.' },
    { term: 'Tarea de principio a fin', def: 'Encargo completo que el agente ejecuta sin fragmentarlo en micro-instrucciones: del objetivo al resultado entregable.' },
    { term: 'Supervisión humana', def: 'Revisión y aprobación del resultado por parte del usuario antes de que el trabajo se considere terminado o se envíe.' },
  ],
  mistakes: [
    { wrong: 'Es otro nombre para el chatbot de siempre.', right: 'El chatbot conversa; el agente de trabajo ejecuta tareas completas usando tus aplicaciones y archivos.' },
    { wrong: 'Hace todo solo sin que yo mire nada.', right: 'Tú defines el objetivo y los permisos; el agente trabaja y te muestra el resultado para que lo apruebes.' },
    { wrong: 'Vale para cualquier tarea sin preparación.', right: 'Necesita acceso a tus apps y archivos (integraciones y permisos); sin contexto no puede actuar.' },
    { wrong: 'Si el producto cambia de nombre, el concepto deja de valer.', right: 'Los nombres comerciales cambian; la idea —delegar tareas completas a un agente— permanece. Verifica siempre la información actual del proveedor.' },
  ],
};

const en = {
  id: 'm13',
  title: 'Desktop and work agents',
  short: 'Work agents',
  description: 'Beyond chat: agents that complete tasks from start to finish using your applications and your files. What they are, which current tools embody them, and a guided step-by-step example.',
  icon: 'MonitorSmartphone',
  stage: 'Agents',
  sections: [
    {
      kind: 'text',
      heading: 'The concept: agents that finish the job',
      paragraphs: [
        'There is a family of agents that does not live in a chat window, but **on your desktop and in your work applications**. Their promise is different: they do not help you do a task, they **complete it from start to finish** using your apps and files the way you would.',
        'You give them a goal in natural language — “analyze my quarterly expenses and prepare a presentation” — and the agent gets going: it opens your spreadsheet, reads the data, does the calculations, creates the slides and hands you the result to review. You define the what; it takes care of the how, moving between applications.',
        'Note the difference with a chatbot: the chatbot would explain how to make the presentation; the assistant would help you with loose parts if you ask; the **work agent** hands you the finished presentation. It is the leap from “helping to think” to “helping to do”.',
      ],
    },
    {
      kind: 'analogy',
      heading: 'From errand-runner to manager',
      body: 'An errand-runner does exactly what you tell them: “take this letter to the post office”. If the post office is closed, they come back with the letter and tell you. A manager receives a goal — “I want this documentation sent today” — and if the post office is closed they look for an alternative: urgent courier, digital sending, or rescheduling for first thing tomorrow. Desktop and work agents aspire to be managers, not errand-runners: faced with an obstacle, they try another route instead of handing the problem back intact.',
    },
    {
      kind: 'text',
      heading: 'The current examples',
      paragraphs: [
        'This space evolves at full speed, but today there are already products that embody the idea. **ChatGPT Work** (from OpenAI) proposes agents that work with your documents and applications. **Claude**, from Anthropic, offers extended work modes over files and projects (known at different times as Cowork or desktop agent modes). **Meta Muse** is Meta’s assistant-agent integrated into its apps and devices. **Gemini Spark** is Google’s bet in the same direction, connected to its productivity ecosystem.',
        'They all share the same pattern: they connect to your **files, your email, your calendar and your applications**, understand your work context and execute multi-step tasks under your supervision.',
        'What matters is not memorizing this list — it will change — but recognizing the pattern when you see it: if a product accepts goals, uses your apps and hands you finished work, you are looking at a work agent, whatever it is called.',
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Always verify the provider’s current information',
      body: 'The names, features and availability of these products **change very fast**: what is called one thing today may be renamed, merged with another product or disappear tomorrow. This portal is designed with its content in **easily updatable data files** precisely for that reason. Before hiring, installing or recommending any of these tools, always verify the current information on the provider’s official website.',
    },
    {
      kind: 'example',
      heading: 'Guided example: “Analyze my quarterly expenses and prepare a presentation”',
      label: 'Practical case',
      body: 'User goal: “Analyze my quarterly expenses and prepare a presentation”. This is how a work agent solves it, step by step:\n\nStep 1 — UNDERSTAND: it interprets the goal and locates the quarter’s expense file in your documents.\n\nStep 2 — READ: it opens the spreadsheet, identifies the columns (date, category, amount) and detects the quarter’s range.\n\nStep 3 — CALCULATE: it sums by category, compares with the previous quarter and detects the three line items that grew the most.\n\nStep 4 — DECIDE THE FORMAT: it plans a 6-slide presentation: summary, evolution, top categories, deviations and conclusions.\n\nStep 5 — CREATE: it generates the slides with charts from the calculations, using your corporate template if one exists.\n\nStep 6 — REVIEW: it checks the numbers add up and that no sensitive data is exposed.\n\nStep 7 — DELIVER: it presents the result for your approval before sending it or saving it where you indicate.',
      result: 'You have invested two minutes describing the goal and five reviewing the result. The agent did the mechanical work in between: reading, calculating, designing and checking.',
    },
    {
      kind: 'compare',
      heading: 'AI assistant vs. AI worker (agent)',
      left: {
        title: 'AI assistant',
        tone: 'a',
        items: [
          'It helps you while you do the task.',
          'It answers questions and drafts texts.',
          'It executes one-off actions when you ask it to.',
          'You orchestrate the steps; it executes the ones you assign.',
          'Example: “draft the email for the client”.',
        ],
      },
      right: {
        title: 'AI worker / agent',
        tone: 'b',
        items: [
          'It does the whole task for you, from start to finish.',
          'It uses your applications and files directly.',
          'It chains actions: reads, calculates, creates, sends.',
          'It orchestrates the steps; you approve the result.',
          'Example: “prepare the proposal for the client and send it to them”.',
        ],
      },
    },
    {
      kind: 'checklist',
      heading: 'What a work agent can do for you',
      items: [
        'Read and organize your files: spreadsheets, PDFs, presentations.',
        'Summarize long email threads and draft pending replies.',
        'Cross-reference data between applications: from the CRM to the spreadsheet, from the calendar to the report.',
        'Create complete documents: reports, presentations, budgets.',
        'Prepare meetings: agenda, context summary and follow-up minutes.',
        'Automate weekly repetitive tasks under your supervision.',
        'Alert you when something needs your decision instead of deciding for you.',
      ],
    },
    {
      kind: 'exercise',
      heading: 'Check your understanding',
      prompt: 'You tell a system: “Every Monday morning, review my inbox, summarize the important emails and prepare a briefing for the week”.',
      question: 'What makes it a work agent and not a mere assistant?',
      options: [
        'That it understands English perfectly.',
        'That it accepts a recurring goal, uses your email autonomously, chains several steps and hands you the finished work for your review.',
        'That it answers faster than a normal assistant.',
        'That it has an attractive commercial name.',
      ],
      correctIndex: 1,
      explanation: 'The key is the complete pattern: goal (not a loose question), autonomous use of your applications, chaining of steps and delivery of finished work under your supervision. Neither speed nor language defines it: the work architecture does.',
    },
  ],
  keyConcepts: [
    { term: 'Work agent', def: 'Agent that completes tasks from start to finish using the user’s applications and files, not just by chatting.' },
    { term: 'Integrations', def: 'The agent’s connections to external applications (email, calendar, spreadsheets, CRM) that let it act on real data.' },
    { term: 'Permissions', def: 'Limits defining which applications and data the agent can access and which actions require approval.' },
    { term: 'Work context', def: 'The set of files, emails and data the agent can consult to understand the task, like a colleague would.' },
    { term: 'End-to-end task', def: 'Complete assignment the agent executes without breaking it into micro-instructions: from goal to deliverable result.' },
    { term: 'Human supervision', def: 'Review and approval of the result by the user before the work is considered finished or sent.' },
  ],
  mistakes: [
    { wrong: 'It is just another name for the same old chatbot.', right: 'The chatbot chats; the work agent executes complete tasks using your applications and files.' },
    { wrong: 'It does everything alone without me checking anything.', right: 'You define the goal and the permissions; the agent works and shows you the result to approve.' },
    { wrong: 'It works for any task with no setup.', right: 'It needs access to your apps and files (integrations and permissions); without context it cannot act.' },
    { wrong: 'If the product changes its name, the concept no longer holds.', right: 'Commercial names change; the idea — delegating complete tasks to an agent — remains. Always verify the provider’s current information.' },
  ],
};

export default { es, en };
