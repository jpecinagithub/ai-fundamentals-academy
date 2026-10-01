const es = {
  id: 'm2',
  title: 'Qué es un LLM',
  short: 'LLM',
  description: 'Large Language Models: qué son, cómo se entrenan, por qué predicen el siguiente token y por qué a veces alucinan.',
  icon: 'Cpu',
  stage: 'LLM',
  sections: [
    {
      kind: 'text',
      heading: 'LLM = Large Language Model',
      paragraphs: [
        'Un **LLM** (Large Language Model, modelo grande de lenguaje) es un modelo de IA entrenado con cantidades masivas de texto para **entender y generar lenguaje humano**. "Large" se refiere a su tamaño: miles de millones de parámetros ajustados durante el entrenamiento. GPT, Claude y Gemini son LLMs.',
        '¿Qué es exactamente "un modelo"? Piensa en él como una **fórmula matemática gigantesca** (miles de millones de números llamados **parámetros**) que, dado un texto de entrada, calcula qué texto debería venir después. No es un programa con reglas de gramática: es una máquina de probabilidades sobre el lenguaje.',
      ],
    },
    {
      kind: 'text',
      heading: 'Entrenamiento: leer internet para aprender el lenguaje',
      paragraphs: [
        'Durante el **entrenamiento**, el modelo "lee" enormes cantidades de texto: páginas web, libros, artículos, código... Pero no lo memoriza como un loro. Su tarea de entrenamiento es siempre la misma y muy simple: **dado un fragmento de texto, predecir la palabra (token) que viene a continuación**.',
        'Cada vez que acierta o falla, ajusta ligeramente sus miles de millones de parámetros. Repite esto billones de veces y emerge algo sorprendente: el modelo aprende gramática, hechos, estilos de escritura, lógica e incluso a programar. Todo, a partir de un único juego: adivinar qué viene después.',
        'Este proceso cuesta millones de euros en computación y dura semanas o meses. Pero una vez entrenado, **usar** el modelo (la **inferencia**) es barato y rápido: eso es lo que ocurre cada vez que escribes en ChatGPT.',
      ],
    },
    {
      kind: 'text',
      heading: 'El truco central: predecir el siguiente token',
      paragraphs: [
        'Cuando escribes "La capital de Francia es...", el modelo no "sabe" la respuesta como tú. Calcula **probabilidades** para cada posible continuación: "París" 97 %, "Lyon" 1 %, "Madrid" 0,1 %... y elige una (normalmente la más probable, con un toque de aleatoriedad).',
        'Después repite el proceso: con "La capital de Francia es París" como contexto, predice el siguiente token, y el siguiente, y el siguiente. **La respuesta se construye token a token**, como si el modelo fuera escribiendo sin haber planeado la frase completa de antemano.',
        'Esto explica dos cosas fundamentales: por qué los LLMs escriben con tanta fluidez (dominan las probabilidades del lenguaje) y por qué a veces inventan datos (eligen lo **plausible**, no lo verificado).',
      ],
    },
    { kind: 'simulator', component: 'TokenProbability' },
    {
      kind: 'text',
      heading: 'Por qué un LLM NO es una base de datos',
      paragraphs: [
        'Es tentador imaginar que el modelo "busca" la respuesta en su memoria, como Google busca en un índice. **No funciona así.** En una base de datos, la información está guardada de forma exacta y recuperable: preguntas por un dato y te devuelve ese dato o nada.',
        'Un LLM no almacena hechos en tablas; almacena **patrones estadísticos** comprimidos en sus parámetros. Cuando responde, **reconstruye** la respuesta probable a partir de esos patrones. Por eso puede responder a preguntas que nunca vio en el entrenamiento... y por eso también puede "recordar mal" un dato con total fluidez.',
        'Consecuencia práctica: un LLM es brillante para redactar, resumir, explicar y razonar sobre texto, pero es una **mala agenda de datos exactos**. Para hechos críticos (cifras, fechas, citas), necesita ayuda externa: búsqueda en internet o documentos (lo verás en el módulo de Tools).',
      ],
    },
    {
      kind: 'text',
      heading: 'Por qué se equivoca: las alucinaciones',
      paragraphs: [
        'Una **alucinación** es cuando el modelo genera información falsa con total seguridad: una cita inventada, una fecha incorrecta, un dato que suena perfecto pero no existe. Ocurre porque el modelo optimiza la **plausibilidad**, no la verdad.',
        'Las alucinaciones son más probables cuando le pides datos muy específicos o poco comunes (estadísticas exactas, referencias académicas, detalles oscuros), cuando el tema estaba poco representado en su entrenamiento, o cuando la pregunta presupone algo falso y el modelo la sigue en lugar de corregirla.',
        '¿Cómo defenderte? Pídele que cite fuentes, verifica los datos importantes por otra vía, dale tú el documento con la información (verás cómo en el módulo de contexto) y desconfía de la **seguridad en el tono**: un LLM suena igual de convencido cuando acierta que cuando inventa.',
      ],
    },
    {
      kind: 'callout',
      tone: 'info',
      title: 'LLM ≠ ChatGPT (ni Claude, ni Gemini)',
      body: 'Esta distinción te hará sonar como un profesional: **GPT es el modelo** (la "fórmula matemática"); **ChatGPT es el producto** (la app con interfaz, historial, memoria y herramientas construida sobre ese modelo). Lo mismo ocurre con **Claude** (producto de Anthropic sobre sus modelos Claude) y **Gemini** (producto de Google sobre sus modelos Gemini). Cuando una empresa "usa IA", normalmente está usando un producto construido sobre un LLM, no el modelo "a pelo".',
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Le preguntas a un LLM: "¿En qué año se fundó la empresa ficticia Tecnologías Iberoamericanas S.L.?" y te responde con total seguridad: "En 1987, en Sevilla".',
      question: '¿Qué ha ocurrido aquí?',
      options: [
        'El modelo ha consultado su base de datos interna y ha encontrado el dato',
        'El modelo ha alucinado: ha generado una respuesta plausible (año + ciudad suenan verosímiles) sin verificarla, porque optimiza plausibilidad, no verdad',
        'El modelo ha buscado en internet en tiempo real',
        'Es imposible: los LLMs nunca inventan datos',
      ],
      correctIndex: 1,
      explanation: 'Los LLMs generan el texto más probable, no el más verdadero. Ante una empresa inventada, construye una respuesta verosímil (año + ciudad española) con total fluidez. Por eso los datos exactos siempre deben verificarse.',
    },
  ],
  keyConcepts: [
    { term: 'LLM', def: 'Large Language Model: modelo de IA de gran tamaño entrenado con texto masivo para entender y generar lenguaje humano.' },
    { term: 'Modelo', def: 'Fórmula matemática gigantesca (miles de millones de parámetros) que calcula qué texto debe venir a continuación.' },
    { term: 'Entrenamiento', def: 'Fase en la que el modelo ajusta sus parámetros prediciendo el siguiente token billones de veces sobre texto masivo.' },
    { term: 'Parámetros', def: 'Los números internos del modelo (miles de millones) que codifican los patrones aprendidos durante el entrenamiento.' },
    { term: 'Inferencia', def: 'Fase de uso del modelo ya entrenado: generar respuestas a partir de una entrada. Es rápida y barata comparada con el entrenamiento.' },
    { term: 'Probabilidad del siguiente token', def: 'Mecanismo central del LLM: calcula qué token es más probable que siga al texto dado y lo genera, repitiendo el proceso.' },
    { term: 'Alucinación', def: 'Respuesta falsa generada con total seguridad porque el modelo optimiza la plausibilidad del texto, no su veracidad.' },
    { term: 'Producto vs modelo', def: 'El modelo (GPT, Claude, Gemini) es el motor; el producto (ChatGPT, app de Claude, app de Gemini) es la aplicación construida sobre él.' },
  ],
  mistakes: [
    { wrong: 'Un LLM es una base de datos gigante que busca respuestas.', right: 'No guarda hechos en tablas: guarda patrones estadísticos y reconstruye respuestas probables token a token. Por eso "recuerda" de forma aproximada.' },
    { wrong: 'GPT y ChatGPT son lo mismo.', right: 'GPT es el modelo; ChatGPT es el producto construido sobre él. Igual que Claude y Gemini son productos sobre sus respectivos modelos.' },
    { wrong: 'Si lo dice con seguridad, es verdad.', right: 'El tono seguro no indica veracidad: el modelo suena igual de convencido cuando acierta que cuando alucina.' },
    { wrong: 'El modelo razona como un humano antes de responder.', right: 'Genera texto probable paso a paso, sin planificar la respuesta completa de antemano. Puede simular razonamiento sin hacerlo de verdad.' },
  ],
};

const en = {
  id: 'm2',
  title: 'What is an LLM',
  short: 'LLM',
  description: 'Large Language Models: what they are, how they are trained, why they predict the next token, and why they sometimes hallucinate.',
  icon: 'Cpu',
  stage: 'LLM',
  sections: [
    {
      kind: 'text',
      heading: 'LLM = Large Language Model',
      paragraphs: [
        'An **LLM** (Large Language Model) is an AI model trained on massive amounts of text to **understand and generate human language**. "Large" refers to its size: billions of parameters tuned during training. GPT, Claude, and Gemini are LLMs.',
        'What exactly is "a model"? Think of it as a **gigantic mathematical formula** (billions of numbers called **parameters**) that, given an input text, computes what text should come next. It is not a program with grammar rules: it is a probability machine over language.',
      ],
    },
    {
      kind: 'text',
      heading: 'Training: reading the internet to learn language',
      paragraphs: [
        'During **training**, the model "reads" huge amounts of text: web pages, books, articles, code... But it does not memorize it like a parrot. Its training task is always the same and very simple: **given a fragment of text, predict the word (token) that comes next**.',
        'Each time it gets it right or wrong, it slightly adjusts its billions of parameters. Repeat this trillions of times and something surprising emerges: the model learns grammar, facts, writing styles, logic, and even programming. All from a single game: guessing what comes next.',
        'This process costs millions of euros in computing and takes weeks or months. But once trained, **using** the model (**inference**) is cheap and fast: that is what happens every time you type in ChatGPT.',
      ],
    },
    {
      kind: 'text',
      heading: 'The central trick: predicting the next token',
      paragraphs: [
        'When you type "The capital of France is...", the model does not "know" the answer like you do. It computes **probabilities** for each possible continuation: "Paris" 97%, "Lyon" 1%, "Madrid" 0.1%... and picks one (usually the most likely, with a touch of randomness).',
        'Then it repeats the process: with "The capital of France is Paris" as context, it predicts the next token, and the next, and the next. **The answer is built token by token**, as if the model were writing without having planned the full sentence in advance.',
        'This explains two fundamental things: why LLMs write so fluently (they master the probabilities of language) and why they sometimes invent data (they choose what is **plausible**, not what is verified).',
      ],
    },
    { kind: 'simulator', component: 'TokenProbability' },
    {
      kind: 'text',
      heading: 'Why an LLM is NOT a database',
      paragraphs: [
        'It is tempting to imagine the model "looking up" the answer in its memory, like Google searches an index. **It does not work like that.** In a database, information is stored exactly and retrievably: you ask for a datum and it returns that datum or nothing.',
        'An LLM does not store facts in tables; it stores **statistical patterns** compressed into its parameters. When it answers, it **reconstructs** the likely answer from those patterns. That is why it can answer questions it never saw in training... and also why it can "misremember" a fact with total fluency.',
        'Practical consequence: an LLM is brilliant at writing, summarizing, explaining, and reasoning about text, but it is a **bad ledger of exact data**. For critical facts (figures, dates, quotes), it needs external help: web search or documents (you will see this in the Tools module).',
      ],
    },
    {
      kind: 'text',
      heading: 'Why it gets things wrong: hallucinations',
      paragraphs: [
        'A **hallucination** is when the model generates false information with total confidence: an invented quote, an incorrect date, a datum that sounds perfect but does not exist. It happens because the model optimizes for **plausibility**, not truth.',
        'Hallucinations are more likely when you ask for very specific or uncommon data (exact statistics, academic references, obscure details), when the topic was poorly represented in its training, or when the question assumes something false and the model follows it instead of correcting it.',
        'How to defend yourself? Ask it to cite sources, verify important data through another channel, give it the document with the information yourself (you will see how in the context module), and distrust **confidence in tone**: an LLM sounds just as convinced when it is right as when it invents.',
      ],
    },
    {
      kind: 'callout',
      tone: 'info',
      title: 'LLM ≠ ChatGPT (nor Claude, nor Gemini)',
      body: 'This distinction will make you sound like a professional: **GPT is the model** (the "mathematical formula"); **ChatGPT is the product** (the app with interface, history, memory, and tools built on that model). The same goes for **Claude** (Anthropic product built on its Claude models) and **Gemini** (Google product built on its Gemini models). When a company "uses AI", it is normally using a product built on an LLM, not the raw model.',
    },
    {
      kind: 'exercise',
      heading: 'Check your understanding',
      prompt: 'You ask an LLM: "In what year was the fictitious company Tecnologías Iberoamericanas S.L. founded?" and it answers with total confidence: "In 1987, in Seville".',
      question: 'What happened here?',
      options: [
        'The model consulted its internal database and found the datum',
        'The model hallucinated: it generated a plausible answer (year + city sound believable) without verifying it, because it optimizes plausibility, not truth',
        'The model searched the internet in real time',
        'Impossible: LLMs never invent data',
      ],
      correctIndex: 1,
      explanation: 'LLMs generate the most probable text, not the truest. Faced with an invented company, it builds a believable answer (year + Spanish city) with total fluency. That is why exact data must always be verified.',
    },
  ],
  keyConcepts: [
    { term: 'LLM', def: 'Large Language Model: large AI model trained on massive text to understand and generate human language.' },
    { term: 'Model', def: 'Gigantic mathematical formula (billions of parameters) that computes what text should come next.' },
    { term: 'Training', def: 'Phase in which the model adjusts its parameters by predicting the next token trillions of times over massive text.' },
    { term: 'Parameters', def: 'The internal numbers of the model (billions) that encode the patterns learned during training.' },
    { term: 'Inference', def: 'Phase of using the already-trained model: generating answers from an input. It is fast and cheap compared to training.' },
    { term: 'Next-token probability', def: 'Central mechanism of the LLM: it computes which token is most likely to follow the given text and generates it, repeating the process.' },
    { term: 'Hallucination', def: 'False answer generated with total confidence because the model optimizes text plausibility, not its truthfulness.' },
    { term: 'Product vs model', def: 'The model (GPT, Claude, Gemini) is the engine; the product (ChatGPT, Claude app, Gemini app) is the application built on it.' },
  ],
  mistakes: [
    { wrong: 'An LLM is a giant database that looks up answers.', right: 'It does not store facts in tables: it stores statistical patterns and reconstructs likely answers token by token. That is why it "remembers" approximately.' },
    { wrong: 'GPT and ChatGPT are the same thing.', right: 'GPT is the model; ChatGPT is the product built on it. Just like Claude and Gemini are products built on their respective models.' },
    { wrong: 'If it says it confidently, it is true.', right: 'A confident tone does not indicate truthfulness: the model sounds just as convinced when it is right as when it hallucinates.' },
    { wrong: 'The model reasons like a human before answering.', right: 'It generates likely text step by step, without planning the full answer in advance. It can simulate reasoning without actually doing it.' },
  ],
};

export default { es, en };
