const es = {
  id: 'm5',
  title: 'Prompts: el arte de pedir bien',
  short: 'Prompts',
  description: 'Qué es un prompt, la diferencia entre system y user prompt, y la estructura que convierte respuestas mediocres en excelentes.',
  icon: 'PenLine',
  stage: 'Prompts y contexto',
  sections: [
    {
      kind: 'text',
      heading: 'Qué es un prompt',
      paragraphs: [
        'Un **prompt** es la entrada que le das al modelo: tu mensaje, con sus instrucciones, su contexto y sus preguntas. Parece trivial ("es lo que escribo en el chat"), pero es la **palanca de control más potente** que tienes sobre un LLM: el mismo modelo da respuestas mediocres o brillantes según cómo se lo pidas.',
        'Piensa en el modelo como un becario brillantísimo pero sin contexto de tu mundo: si le das una orden vaga, improvisará; si le das rol, objetivo, información y formato, ejecutará con precisión. La **ingeniería de prompts** (prompt engineering) es precisamente la disciplina de diseñar esas entradas.',
      ],
    },
    {
      kind: 'text',
      heading: 'System prompt vs user prompt',
      paragraphs: [
        'El **user prompt** es lo que tú escribes en el chat. El **system prompt** son instrucciones invisibles que la aplicación coloca antes, y que definen la personalidad y las reglas del asistente ("Eres un asistente útil que responde en español, con tono profesional...").',
        'El system prompt tiene **prioridad**: si hay conflicto, el modelo obedece antes al sistema que al usuario. Por eso no puedes pedirle a ChatGPT que "olvide sus reglas": están blindadas por diseño. Como usuario normal no lo ves ni lo editas (aunque algunas apps, como los GPTs personalizados, te dejan definir el tuyo).',
      ],
    },
    {
      kind: 'text',
      heading: 'Los cuatro ingredientes de un buen prompt',
      paragraphs: [
        '**1. Instrucciones claras:** qué debe hacer, con verbos de acción ("analiza", "compara", "resume"). Evita la vaguedad: "hazme un análisis" puede significar diez cosas distintas.',
        '**2. Contexto:** la información que el modelo necesita y no tiene: datos, documentos, antecedentes, tu situación. Sin contexto, el modelo rellena huecos con invenciones (hola, alucinaciones).',
        '**3. Ejemplos (few-shot):** mostrarle una o dos muestras del resultado esperado es la técnica más potente para fijar formato, tono y nivel de detalle. El modelo imita patrones mejor que sigue descripciones abstractas.',
        '**4. Restricciones:** qué NO debe hacer y los límites: longitud, idioma, formato, audiencia, qué evitar. Las restricciones recortan el espacio de respuestas posibles hacia la que tú quieres.',
      ],
    },
    {
      kind: 'callout',
      tone: 'tip',
      title: 'La estructura que nunca falla',
      body: '**ROL** (actúa como...) + **OBJETIVO** (qué quiero conseguir) + **CONTEXTO** (datos y antecedentes) + **RESTRICCIONES** (límites y qué evitar) + **FORMATO DE SALIDA** (cómo debe presentar el resultado). Cinco bloques, en ese orden, y casi cualquier petición mejora de forma radical.',
    },
    { kind: 'simulator', component: 'PromptComparer' },
    {
      kind: 'example',
      heading: 'Ejemplo real',
      label: 'Del prompt pobre al prompt bueno',
      body: 'Prompt pobre: "Hazme un análisis financiero." Resultado: un texto genérico, sin datos reales, con ratios inventados y un formato impredecible. Prompt mejorado: "Actúa como analista financiero senior. Te adjunto el balance y la cuenta de resultados 2024-2025 de la empresa X (ver documento). Calcula liquidez, endeudamiento y ROE, compara ambos años y señala 3 riesgos. Máximo 300 palabras, en español, con una tabla de ratios y sin jerga innecesaria."',
      result: 'Moraleja: el segundo prompt fija rol, objetivo, contexto (documento real), restricciones (300 palabras, español) y formato (tabla). El modelo ya no tiene que adivinar nada: solo ejecutar.',
    },
    {
      kind: 'checklist',
      heading: 'Buenas prácticas de prompting',
      items: [
        'Sé específico: sustituye "hazlo bien" por criterios concretos y medibles.',
        'Da el contexto antes de pedir: pega los datos, no esperes que los adivine.',
        'Muestra un ejemplo del formato que quieres, aunque sea inventado.',
        'Pide estructura: títulos, tablas o listas en lugar de párrafos eternos.',
        'Itera: la primera respuesta es un borrador; pide ajustes ("más breve", "con ejemplos").',
        'Una tarea por prompt: divide los encargos grandes en pasos.',
      ],
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Quieres que la IA redacte el email de lanzamiento de tu curso online para suscriptores interesados en IA.',
      question: '¿Qué elemento es MÁS importante añadir si el primer borrador te sale genérico y sin gancho?',
      options: [
        'Más tokens de contexto pegando toda tu web',
        'Rol, audiencia y formato: quién eres, a quién escribes, qué tono y qué estructura debe tener el email',
        'Pedirle que lo escriba dos veces para elegir',
        'Cambiar de modelo de IA',
      ],
      correctIndex: 1,
      explanation: 'Un borrador genérico casi siempre viene de un prompt genérico. Definir rol (quién habla), audiencia (a quién), tono y formato de salida recorta el espacio de respuestas hacia exactamente lo que necesitas. Más contexto sin estructura solo añade ruido.',
    },
  ],
  keyConcepts: [
    { term: 'Prompt', def: 'Entrada que le das al modelo: instrucciones, contexto, ejemplos y preguntas. Es tu principal palanca de control sobre un LLM.' },
    { term: 'System prompt', def: 'Instrucciones invisibles que la aplicación coloca antes de tu mensaje para definir personalidad y reglas del asistente; tiene prioridad sobre el usuario.' },
    { term: 'User prompt', def: 'El mensaje que tú escribes en el chat en cada turno de la conversación.' },
    { term: 'Instrucción', def: 'Orden clara de qué debe hacer el modelo, con verbos de acción concretos en lugar de vaguedades.' },
    { term: 'Few-shot', def: 'Técnica de incluir uno o varios ejemplos del resultado esperado para que el modelo imite formato, tono y nivel de detalle.' },
    { term: 'Restricción', def: 'Límite explícito (longitud, idioma, formato, qué evitar) que recorta las respuestas posibles hacia la deseada.' },
    { term: 'Formato de salida', def: 'Especificación de cómo debe presentar el resultado: tabla, lista, email, informe, número de palabras...' },
  ],
  mistakes: [
    { wrong: 'Basta con pedirlo una vez y ya está.', right: 'Los prompts se iteran: la primera respuesta es un borrador. Pide ajustes concretos hasta llegar al resultado ("más breve", "con ejemplos").' },
    { wrong: 'Cuanto más largo el prompt, mejor.', right: 'Largo y desordenado confunde. Lo que gana es estructurado y claro: rol, objetivo, contexto, restricciones y formato.' },
    { wrong: 'El system prompt no me afecta como usuario.', right: 'Define la personalidad y las reglas de cada respuesta que recibes, y tiene prioridad sobre tus instrucciones si hay conflicto.' },
    { wrong: 'Dar ejemplos es hacer trampa o es innecesario.', right: 'Los ejemplos (few-shot) son la técnica más potente para fijar el formato: el modelo imita patrones mejor que sigue descripciones abstractas.' },
  ],
};

const en = {
  id: 'm5',
  title: 'Prompts: the art of asking well',
  short: 'Prompts',
  description: 'What a prompt is, the difference between system and user prompts, and the structure that turns mediocre answers into excellent ones.',
  icon: 'PenLine',
  stage: 'Prompts & Context',
  sections: [
    {
      kind: 'text',
      heading: 'What a prompt is',
      paragraphs: [
        'A **prompt** is the input you give the model: your message, with its instructions, its context, and its questions. It seems trivial ("it is what I type in the chat"), but it is the **most powerful control lever** you have over an LLM: the same model gives mediocre or brilliant answers depending on how you ask.',
        'Think of the model as a brilliant intern with no context about your world: if you give a vague order, they will improvise; if you give role, goal, information, and format, they will execute precisely. **Prompt engineering** is precisely the discipline of designing those inputs.',
      ],
    },
    {
      kind: 'text',
      heading: 'System prompt vs user prompt',
      paragraphs: [
        'The **user prompt** is what you type in the chat. The **system prompt** is invisible instructions the application places before it, defining the assistant personality and rules ("You are a helpful assistant that answers in Spanish, with a professional tone...").',
        'The system prompt takes **priority**: in case of conflict, the model obeys the system before the user. That is why you cannot ask ChatGPT to "forget its rules": they are shielded by design. As a normal user you neither see nor edit it (although some apps, like custom GPTs, let you define your own).',
      ],
    },
    {
      kind: 'text',
      heading: 'The four ingredients of a good prompt',
      paragraphs: [
        '**1. Clear instructions:** what it must do, with action verbs ("analyze", "compare", "summarize"). Avoid vagueness: "give me an analysis" can mean ten different things.',
        '**2. Context:** the information the model needs and does not have: data, documents, background, your situation. Without context, the model fills gaps with inventions (hello, hallucinations).',
        '**3. Examples (few-shot):** showing one or two samples of the expected result is the most powerful technique for setting format, tone, and level of detail. The model imitates patterns better than it follows abstract descriptions.',
        '**4. Constraints:** what it must NOT do and the limits: length, language, format, audience, what to avoid. Constraints narrow the space of possible answers toward the one you want.',
      ],
    },
    {
      kind: 'callout',
      tone: 'tip',
      title: 'The structure that never fails',
      body: '**ROLE** (act as...) + **GOAL** (what I want to achieve) + **CONTEXT** (data and background) + **CONSTRAINTS** (limits and what to avoid) + **OUTPUT FORMAT** (how it must present the result). Five blocks, in that order, and almost any request improves radically.',
    },
    { kind: 'simulator', component: 'PromptComparer' },
    {
      kind: 'example',
      heading: 'Real example',
      label: 'From poor prompt to good prompt',
      body: 'Poor prompt: "Give me a financial analysis." Result: a generic text, with no real data, invented ratios, and an unpredictable format. Improved prompt: "Act as a senior financial analyst. I attach the 2024-2025 balance sheet and income statement of company X (see document). Calculate liquidity, debt, and ROE, compare both years, and flag 3 risks. Maximum 300 words, in Spanish, with a table of ratios and no unnecessary jargon."',
      result: 'Lesson: the second prompt sets role, goal, context (real document), constraints (300 words, Spanish), and format (table). The model no longer has to guess anything: just execute.',
    },
    {
      kind: 'checklist',
      heading: 'Prompting best practices',
      items: [
        'Be specific: replace "do it well" with concrete, measurable criteria.',
        'Give the context before asking: paste the data, do not expect it to guess.',
        'Show an example of the format you want, even if invented.',
        'Ask for structure: headings, tables, or lists instead of endless paragraphs.',
        'Iterate: the first answer is a draft; ask for adjustments ("shorter", "with examples").',
        'One task per prompt: break large assignments into steps.',
      ],
    },
    {
      kind: 'exercise',
      heading: 'Check your understanding',
      prompt: 'You want the AI to write the launch email for your online course, for subscribers interested in AI.',
      question: 'What is the MOST important element to add if the first draft comes out generic and hookless?',
      options: [
        'More context tokens by pasting your entire website',
        'Role, audience, and format: who you are, who you write to, what tone, and what structure the email must have',
        'Asking it to write it twice so you can choose',
        'Switching AI models',
      ],
      correctIndex: 1,
      explanation: 'A generic draft almost always comes from a generic prompt. Defining role (who speaks), audience (who it is for), tone, and output format narrows the answer space toward exactly what you need. More context without structure only adds noise.',
    },
  ],
  keyConcepts: [
    { term: 'Prompt', def: 'Input you give the model: instructions, context, examples, and questions. Your main control lever over an LLM.' },
    { term: 'System prompt', def: 'Invisible instructions the application places before your message to define the assistant personality and rules; it takes priority over the user.' },
    { term: 'User prompt', def: 'The message you type in the chat on each turn of the conversation.' },
    { term: 'Instruction', def: 'Clear order of what the model must do, with concrete action verbs instead of vagueness.' },
    { term: 'Few-shot', def: 'Technique of including one or more examples of the expected result so the model imitates format, tone, and level of detail.' },
    { term: 'Constraint', def: 'Explicit limit (length, language, format, what to avoid) that narrows the possible answers toward the desired one.' },
    { term: 'Output format', def: 'Specification of how the result must be presented: table, list, email, report, word count...' },
  ],
  mistakes: [
    { wrong: 'Asking once is enough.', right: 'Prompts are iterated: the first answer is a draft. Ask for concrete adjustments until you reach the result ("shorter", "with examples").' },
    { wrong: 'The longer the prompt, the better.', right: 'Long and messy confuses. What wins is structured and clear: role, goal, context, constraints, and format.' },
    { wrong: 'The system prompt does not affect me as a user.', right: 'It defines the personality and rules of every answer you receive, and takes priority over your instructions in case of conflict.' },
    { wrong: 'Giving examples is cheating or unnecessary.', right: 'Examples (few-shot) are the most powerful technique for setting format: the model imitates patterns better than it follows abstract descriptions.' },
  ],
};

export default { es, en };
