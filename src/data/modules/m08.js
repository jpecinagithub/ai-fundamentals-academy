const es = {
  id: 'm8',
  title: 'Skills: procedimientos reutilizables',
  short: 'Skills',
  description: 'Qué es una skill, en qué se diferencia de una tool y cómo empaqueta conocimiento experto reutilizable.',
  icon: 'Puzzle',
  stage: 'Tools y MCP',
  sections: [
    {
      kind: 'text',
      heading: 'Qué es una skill',
      paragraphs: [
        'Una **skill** es un conjunto reutilizable de **instrucciones, conocimientos, procedimientos y reglas** que enseña al modelo **cómo resolver bien un tipo concreto de problema**. Si la tool es la mano (la capacidad de actuar), la skill es la **formación profesional** de esa mano: el método, los criterios de calidad y la experiencia empaquetada.',
        'Piensa en un electricista: las tools son su taladro y su polímetro; su skill es saber diagnosticar una avería paso a paso, qué comprobar primero, qué valores son normales y cómo documentar el trabajo. Sin la skill, las tools no sirven de mucho; sin tools, la skill no puede ejecutarse.',
      ],
    },
    {
      kind: 'text',
      heading: 'Ejemplo: la skill "Analizar estados financieros"',
      paragraphs: [
        'Imagina que equipas a un asistente con una skill de análisis financiero. No es una sola instrucción, sino un paquete completo: **instrucciones** ("sigue siempre este orden: liquidez, endeudamiento, rentabilidad"), **metodología** (cómo calcular cada ratio y qué fuentes usar), **ratios de referencia** (qué valores se consideran sanos por sector), **plantillas** (el formato exacto del informe final) y **herramientas** (qué tools usar para extraer datos del balance).',
        'Con esa skill instalada, cada vez que le pidas analizar una empresa, el asistente seguirá el mismo procedimiento riguroso, sin que tengas que repetir las instrucciones. Y lo mejor: esa skill es **reutilizable** — sirve para cualquier empresa, cualquier trimestre, cualquier usuario.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Tool frente a Skill: la diferencia que todo lo aclara',
      caption: 'Se complementan: la skill dice cómo hacerlo bien, la tool permite hacerlo.',
      left: {
        title: 'Tool: la capacidad concreta',
        tone: 'a',
        items: [
          'Es una acción ejecutable: buscar en la web, leer un archivo, consultar una base de datos.',
          'El modelo decide cuándo llamarla y con qué parámetros.',
          'Ejemplo: `buscar_web("tipos de interés BCE 2026")` o `leer_excel("balance.xlsx")`.',
          'Sin instrucciones, la tool se usa de forma improvisada.',
        ],
      },
      right: {
        title: 'Skill: el saber hacer',
        tone: 'b',
        items: [
          'Es conocimiento estructurado: instrucciones, metodología, criterios de calidad, plantillas.',
          'Define el procedimiento completo para un tipo de problema.',
          'Ejemplo: analizar balances siguiendo ratios, umbrales y formato de informe.',
          'Convierte el uso de tools en un proceso riguroso y repetible.',
        ],
      },
    },
    {
      kind: 'text',
      heading: 'Cómo trabajan juntas: skill + tools + modelo',
      paragraphs: [
        'El flujo completo es elegante: la **skill** le dice al modelo el procedimiento ("para analizar un balance, primero extrae estas partidas, luego calcula estos ratios..."), el **modelo** razona siguiendo ese procedimiento, y las **tools** ejecutan cada paso concreto (leer el Excel, buscar el tipo de cambio actual, generar el gráfico).',
        'Esta combinación es lo que hace potentes a los asistentes modernos como Claude Code: no es solo un modelo con herramientas, sino un modelo con herramientas **y** procedimientos expertos para usarlas bien. Entender esta tríada (modelo + skills + tools) es entender cómo funciona la IA aplicada de verdad.',
      ],
    },
    {
      kind: 'checklist',
      heading: 'Ejemplos de skills en el mundo real',
      items: [
        'Revisión de código: instrucciones de qué buscar (seguridad, rendimiento), checklist y formato del informe.',
        'Redacción SEO: estructura de artículo, densidad de palabras clave, tono y plantilla de titulares.',
        'Análisis financiero: ratios, umbrales por sector y plantilla de informe (el ejemplo de este módulo).',
        'Soporte al cliente: guion de diagnóstico, tono de respuesta y criterios de escalado.',
        'Investigación de mercado: fuentes fiables, método de comparación y formato de entrega.',
      ],
    },
    {
      kind: 'callout',
      tone: 'tip',
      title: 'La skill es tu conocimiento, empaquetado',
      body: 'Si hay una tarea que haces una y otra vez con IA y siempre das las mismas instrucciones, tienes una skill esperando a ser escrita. Documentar tu método una vez (pasos, criterios, ejemplos, formato) y reutilizarlo siempre es una de las formas más rentables de trabajar con IA.',
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Un asistente tiene la tool `enviar_email` y una skill "Redactar newsletters" con estructura, tono y checklist de calidad.',
      question: '¿Qué aporta la skill que la tool por sí sola no da?',
      options: [
        'La capacidad técnica de enviar el email',
        'El procedimiento experto: qué estructura seguir, qué tono usar y qué criterios de calidad aplicar antes de enviar',
        'El acceso a internet para buscar contenidos',
        'Nada: con la tool ya es suficiente para una buena newsletter',
      ],
      correctIndex: 1,
      explanation: 'La tool solo ejecuta la acción (enviar). La skill aporta el saber hacer: la metodología, los criterios de calidad y el formato que convierten un envío improvisado en una newsletter profesional y repetible.',
    },
  ],
  keyConcepts: [
    { term: 'Skill', def: 'Conjunto reutilizable de instrucciones, conocimientos, procedimientos y reglas que enseña al modelo a resolver bien un tipo de problema.' },
    { term: 'Procedimiento', def: 'Secuencia ordenada de pasos que la skill define para abordar una tarea de forma rigurosa y repetible.' },
    { term: 'Metodología', def: 'El método experto empaquetado en la skill: qué hacer, en qué orden y con qué criterios.' },
    { term: 'Plantilla', def: 'Formato predefinido de entrega incluido en la skill para que los resultados sean consistentes.' },
    { term: 'Tool vs skill', def: 'La tool es la capacidad concreta de actuar; la skill es el conocimiento estructurado de cómo usarla bien para un problema.' },
    { term: 'Reutilización', def: 'Propiedad clave de las skills: se definen una vez y sirven para cualquier caso del mismo tipo de problema.' },
  ],
  mistakes: [
    { wrong: 'Skill y tool son lo mismo.', right: 'La tool es la capacidad concreta de actuar (buscar, enviar, calcular); la skill es la forma estructurada de resolver un tipo de problema usando esas capacidades.' },
    { wrong: 'Una skill es un modelo de IA aparte.', right: 'No: es un paquete de instrucciones y conocimiento que utiliza el mismo modelo. No requiere entrenar nada.' },
    { wrong: 'Las skills solo sirven para programar.', right: 'Sirven para finanzas, marketing, soporte, redacción, investigación... cualquier tarea repetible con un método.' },
    { wrong: 'Crear una skill requiere entrenar un modelo.', right: 'Se "crea" escribiendo: instrucciones, metodología, ejemplos, criterios y plantillas. Es documentación experta, no entrenamiento.' },
  ],
};

const en = {
  id: 'm8',
  title: 'Skills: reusable procedures',
  short: 'Skills',
  description: 'What a skill is, how it differs from a tool, and how it packages reusable expert knowledge.',
  icon: 'Puzzle',
  stage: 'Tools & MCP',
  sections: [
    {
      kind: 'text',
      heading: 'What a skill is',
      paragraphs: [
        'A **skill** is a reusable set of **instructions, knowledge, procedures and rules** that teaches the model **how to solve a specific type of problem well**. If the tool is the hand (the ability to act), the skill is that hand’s **professional training**: the method, the quality criteria and the packaged experience.',
        'Think of an electrician: their tools are the drill and the multimeter; their skill is knowing how to diagnose a fault step by step, what to check first, which values are normal and how to document the job. Without the skill, the tools are not much use; without tools, the skill cannot be executed.',
      ],
    },
    {
      kind: 'text',
      heading: 'Example: the “Analyze financial statements” skill',
      paragraphs: [
        'Imagine you equip an assistant with a financial-analysis skill. It is not a single instruction, but a complete package: **instructions** (“always follow this order: liquidity, debt, profitability”), **methodology** (how to calculate each ratio and which sources to use), **benchmark ratios** (which values are considered healthy by sector), **templates** (the exact format of the final report) and **tools** (which tools to use to extract data from the balance sheet).',
        'With that skill installed, every time you ask it to analyze a company, the assistant will follow the same rigorous procedure, without you having to repeat the instructions. And the best part: that skill is **reusable** — it works for any company, any quarter, any user.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Tool vs. skill: the difference that clarifies everything',
      caption: 'They complement each other: the skill says how to do it well, the tool makes it possible.',
      left: {
        title: 'Tool: the concrete capability',
        tone: 'a',
        items: [
          'It is an executable action: searching the web, reading a file, querying a database.',
          'The model decides when to call it and with which parameters.',
          'Example: `buscar_web("tipos de interés BCE 2026")` or `leer_excel("balance.xlsx")`.',
          'Without instructions, the tool is used improvisationally.',
        ],
      },
      right: {
        title: 'Skill: the know-how',
        tone: 'b',
        items: [
          'It is structured knowledge: instructions, methodology, quality criteria, templates.',
          'It defines the complete procedure for a type of problem.',
          'Example: analyzing balance sheets following ratios, thresholds and a report format.',
          'It turns tool use into a rigorous, repeatable process.',
        ],
      },
    },
    {
      kind: 'text',
      heading: 'How they work together: skill + tools + model',
      paragraphs: [
        'The full flow is elegant: the **skill** tells the model the procedure (“to analyze a balance sheet, first extract these line items, then calculate these ratios…”), the **model** reasons following that procedure, and the **tools** execute each concrete step (reading the spreadsheet, looking up the current exchange rate, generating the chart).',
        'This combination is what makes modern assistants like Claude Code powerful: it is not just a model with tools, but a model with tools **and** expert procedures for using them well. Understanding this triad (model + skills + tools) is understanding how applied AI really works.',
      ],
    },
    {
      kind: 'checklist',
      heading: 'Examples of skills in the real world',
      items: [
        'Code review: instructions on what to look for (security, performance), checklist and report format.',
        'SEO writing: article structure, keyword density, tone and headline template.',
        'Financial analysis: ratios, sector thresholds and report template (this module’s example).',
        'Customer support: diagnostic script, response tone and escalation criteria.',
        'Market research: reliable sources, comparison method and delivery format.',
      ],
    },
    {
      kind: 'callout',
      tone: 'tip',
      title: 'The skill is your knowledge, packaged',
      body: 'If there is a task you do over and over with AI and you always give the same instructions, you have a skill waiting to be written. Documenting your method once (steps, criteria, examples, format) and reusing it forever is one of the most profitable ways of working with AI.',
    },
    {
      kind: 'exercise',
      heading: 'Check your understanding',
      prompt: 'An assistant has the tool `enviar_email` and a “Write newsletters” skill with structure, tone and a quality checklist.',
      question: 'What does the skill add that the tool alone does not provide?',
      options: [
        'The technical ability to send the email',
        'The expert procedure: which structure to follow, which tone to use and which quality criteria to apply before sending',
        'Internet access to search for content',
        'Nothing: the tool alone is enough for a good newsletter',
      ],
      correctIndex: 1,
      explanation: 'The tool only executes the action (sending). The skill adds the know-how: the methodology, the quality criteria and the format that turn an improvised send into a professional, repeatable newsletter.',
    },
  ],
  keyConcepts: [
    { term: 'Skill', def: 'Reusable set of instructions, knowledge, procedures and rules that teaches the model to solve a type of problem well.' },
    { term: 'Procedure', def: 'Ordered sequence of steps that the skill defines for tackling a task rigorously and repeatably.' },
    { term: 'Methodology', def: 'The expert method packaged in the skill: what to do, in which order and with which criteria.' },
    { term: 'Template', def: 'Predefined delivery format included in the skill so results stay consistent.' },
    { term: 'Tool vs skill', def: 'The tool is the concrete ability to act; the skill is the structured knowledge of how to use it well for a problem.' },
    { term: 'Reusability', def: 'Key property of skills: defined once, they serve for any case of the same type of problem.' },
  ],
  mistakes: [
    { wrong: 'Skill and tool are the same thing.', right: 'The tool is the concrete ability to act (search, send, calculate); the skill is the structured way of solving a type of problem using those abilities.' },
    { wrong: 'A skill is a separate AI model.', right: 'No: it is a package of instructions and knowledge used by the same model. Nothing needs to be trained.' },
    { wrong: 'Skills are only useful for programming.', right: 'They work for finance, marketing, support, writing, research… any repeatable task with a method.' },
    { wrong: 'Creating a skill requires training a model.', right: 'You “create” one by writing: instructions, methodology, examples, criteria and templates. It is expert documentation, not training.' },
  ],
};

export default { es, en };
