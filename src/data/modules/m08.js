export default {
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
