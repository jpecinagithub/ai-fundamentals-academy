const es = {
  id: 'm1',
  title: '¿Qué es la Inteligencia Artificial?',
  short: 'Fundamentos',
  description: 'Descubre qué es la IA, cómo aprende de los datos y las ramas que la componen, desde el Machine Learning hasta la IA generativa.',
  icon: 'Brain',
  stage: 'Fundamentos',
  sections: [
    {
      kind: 'text',
      heading: 'Qué es exactamente la IA',
      paragraphs: [
        'La **Inteligencia Artificial** es la disciplina que crea sistemas capaces de realizar tareas que normalmente requieren inteligencia humana: percibir el entorno, razonar, aprender de la experiencia y tomar decisiones. No es una sola tecnología, sino un paraguas que agrupa muchas técnicas distintas.',
        'La gran diferencia frente al software tradicional es esta: en un programa clásico, una persona escribe las **reglas** ("si el correo contiene la palabra oferta, márcalo como spam"). En un sistema de IA, el sistema **aprende las reglas por sí mismo** analizando miles o millones de ejemplos. Tú le das los datos; él descubre los patrones.',
      ],
    },
    {
      kind: 'analogy',
      heading: 'Una analogía sencilla',
      body: 'Imagina a un aprendiz de cocina. Nadie le entrega un manual con la regla exacta de "cuánta sal lleva cada plato en cada situación". En su lugar, prueba cientos de platos, recibe opiniones ("le falta sal", "está perfecto") y poco a poco desarrolla un **paladar**: una intuición que no puede explicar con fórmulas, pero que funciona. La IA aprende igual: no memoriza reglas, desarrolla un "paladar estadístico" a partir de ejemplos.',
    },
    {
      kind: 'flow',
      heading: 'De la IA a los modelos de lenguaje',
      caption: 'Cada nivel es una especialización del anterior: no son tecnologías rivales, sino capas.',
      direction: 'down',
      highlight: [0],
      nodes: [
        { label: 'IA', desc: 'Cualquier sistema que realiza tareas inteligentes: desde un termostato "listo" hasta ChatGPT.' },
        { label: 'Machine Learning', desc: 'Subcampo donde el sistema aprende patrones a partir de datos, en vez de seguir reglas programadas a mano.' },
        { label: 'Deep Learning', desc: 'Rama del ML basada en redes neuronales con muchas capas; excelente con imágenes, audio y lenguaje.' },
        { label: 'Modelos generativos', desc: 'Redes profundas entrenadas para CREAR contenido nuevo: texto, imágenes, código, música.' },
        { label: 'LLM y multimodales', desc: 'Los modelos generativos de lenguaje (GPT, Claude, Gemini) y los que combinan texto, imagen y audio.' },
      ],
    },
    {
      kind: 'text',
      heading: 'Machine Learning y Deep Learning, sin tecnicismos',
      paragraphs: [
        '**Machine Learning** (aprendizaje automático) es la idea de que el programa mejora con los datos. Le muestras 10.000 fotos etiquetadas como "gato" o "perro" y aprende a distinguirlos solo. Cuantos más ejemplos buenos, mejor aprende; con datos malos, aprende mal ("basura entra, basura sale").',
        '**Deep Learning** (aprendizaje profundo) usa **redes neuronales**: estructuras inspiradas vagamente en el cerebro, organizadas en capas. Cada capa detecta algo un poco más abstracto: en una foto, la primera capa ve bordes, la siguiente ve formas, y las últimas "entienden" que eso es un gato. "Profundo" se refiere simplemente a que hay muchas capas.',
        'Casi toda la IA moderna que ves en titulares (ChatGPT, traductores, reconocimiento facial) es Deep Learning. Pero ojo: la IA "clásica" no ha muerto, como verás en la siguiente comparación.',
      ],
    },
    {
      kind: 'compare',
      heading: 'IA tradicional frente a IA generativa',
      caption: 'Dos filosofías distintas dentro de la misma disciplina. Ambas se usan hoy, para problemas distintos.',
      left: {
        title: 'IA tradicional',
        tone: 'a',
        items: [
          'Responde con una etiqueta o un número: ¿es spam? ¿qué precio tendrá? ¿qué probabilidad de impago?',
          'Clasifica, predice y recomienda a partir de patrones aprendidos.',
          'Ejemplos: filtros antispam, recomendadores de Netflix, detección de fraude bancario, mantenimiento predictivo.',
        ],
      },
      right: {
        title: 'IA generativa',
        tone: 'b',
        items: [
          'Crea contenido nuevo: redacta textos, programa código, genera imágenes o compone música.',
          'Aprende la estructura profunda del lenguaje, las imágenes o el sonido.',
          'Ejemplos: ChatGPT, Claude, Gemini, generadores de imágenes como los integrados en esas mismas apps.',
        ],
      },
    },
    {
      kind: 'text',
      heading: 'Modelos fundacionales y multimodales',
      paragraphs: [
        'Un **modelo fundacional** es un modelo enorme entrenado con cantidades colosales de datos (buena parte de internet, libros, código...) que sirve de **base para muchísimas aplicaciones**. En vez de entrenar un modelo desde cero para cada tarea, las empresas parten de un modelo fundacional y lo adaptan. GPT, Claude y Gemini son modelos fundacionales.',
        'Un **modelo multimodal** es el que entiende y genera **varios tipos de datos a la vez**: texto, imágenes, audio o vídeo. Cuando le envías una foto a ChatGPT o a Gemini y te la describe, o cuando le pides que genere una imagen a partir de una frase, estás usando su capacidad multimodal. El futuro de la IA es multimodal: el mundo real no es solo texto.',
      ],
    },
    {
      kind: 'checklist',
      heading: 'La IA ya está en tu día a día',
      items: [
        'Recomendadores: Netflix, Spotify o YouTube deciden qué sugerirte con IA tradicional.',
        'Visión por computador: desbloqueo facial del móvil, etiquetado de fotos, cámaras de tráfico.',
        'Traducción automática: Google Translate o DeepL usan modelos de Deep Learning.',
        'Asistentes de escritura: autocompletado de Gmail, correctores, resúmenes automáticos.',
        'Conversación: ChatGPT, Claude y Gemini son IA generativa en forma de producto.',
        'Voz: subtítulos automáticos de YouTube o los asistentes de voz transcriben tu habla con IA.',
      ],
    },
    {
      kind: 'callout',
      tone: 'tip',
      title: 'La idea que vertebra todo el curso',
      body: 'La IA no "comprende" como tú: **detecta patrones estadísticos en datos**. Esa sola frase explica por qué es tan potente (encuentra patrones invisibles para humanos) y por qué a veces falla con total seguridad (un patrón no es una verdad). Tenla presente en cada módulo.',
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Una empresa quiere predecir qué clientes cancelarán su suscripción el próximo mes, a partir de su historial de uso.',
      question: '¿Qué tipo de IA encaja mejor con este problema?',
      options: [
        'IA generativa, porque es la más moderna',
        'IA tradicional (Machine Learning predictivo), porque el problema pide una predicción numérica, no crear contenido',
        'Un modelo multimodal, porque combina varios tipos de datos',
        'Ninguna: esto se resuelve mejor con reglas escritas a mano',
      ],
      correctIndex: 1,
      explanation: 'El problema pide clasificar/predecir (cancelará o no), que es el terreno clásico de la IA tradicional. La IA generativa crea contenido nuevo; aquí no hay nada que crear. Elegir la herramienta adecuada al problema es la primera habilidad de un profesional de IA.',
    },
  ],
  keyConcepts: [
    { term: 'IA', def: 'Disciplina que crea sistemas capaces de realizar tareas que requieren inteligencia humana: percibir, razonar, aprender y decidir.' },
    { term: 'Machine Learning', def: 'Subcampo de la IA donde el sistema aprende patrones a partir de datos, en lugar de seguir reglas programadas a mano.' },
    { term: 'Deep Learning', def: 'Rama del Machine Learning basada en redes neuronales con muchas capas, capaz de aprender representaciones muy complejas.' },
    { term: 'IA generativa', def: 'Tipo de IA que crea contenido nuevo (texto, imágenes, código, audio) a partir de lo aprendido durante su entrenamiento.' },
    { term: 'Modelo fundacional', def: 'Modelo de gran tamaño entrenado con enormes volúmenes de datos que sirve de base para muchas aplicaciones distintas.' },
    { term: 'Modelo multimodal', def: 'Modelo que entiende y genera varios tipos de datos a la vez: texto, imágenes, audio o vídeo.' },
    { term: 'Red neuronal', def: 'Estructura de cálculo organizada en capas, inspirada vagamente en el cerebro, que aprende detectando patrones por niveles.' },
    { term: 'Entrenamiento', def: 'Proceso en el que un modelo ajusta sus parámetros internos analizando grandes cantidades de ejemplos.' },
  ],
  mistakes: [
    { wrong: 'La IA entiende el mundo como una persona.', right: 'No: detecta patrones estadísticos en datos. Puede dar respuestas correctas sin "comprender" nada, y por eso a veces se equivoca con total seguridad.' },
    { wrong: 'IA y ChatGPT son lo mismo.', right: 'ChatGPT es un producto construido sobre un modelo (GPT). La IA abarca mucho más: recomendadores, visión por computador, traductores, robótica...' },
    { wrong: 'Si una IA lo dice, debe ser verdad.', right: 'Los modelos generativos producen texto plausible, no texto verificado. Contrasta siempre la información importante.' },
    { wrong: 'La IA tradicional ya no se usa.', right: 'Sigue siendo la más usada en empresas: detección de fraude, predicción de demanda, segmentación de clientes y mantenimiento predictivo.' },
  ],
};

const en = {
  id: 'm1',
  title: 'What is Artificial Intelligence?',
  short: 'Fundamentals',
  description: 'Discover what AI is, how it learns from data, and the branches that make it up, from Machine Learning to generative AI.',
  icon: 'Brain',
  stage: 'Fundamentals',
  sections: [
    {
      kind: 'text',
      heading: 'What AI actually is',
      paragraphs: [
        'Artificial Intelligence is the discipline that creates systems capable of performing tasks that normally require human intelligence: perceiving the environment, reasoning, learning from experience, and making decisions. It is not a single technology, but an umbrella covering many different techniques.',
        'The big difference from traditional software is this: in a classic program, a person writes the **rules** ("if the email contains the word offer, mark it as spam"). In an AI system, the system **learns the rules by itself** by analyzing thousands or millions of examples. You give it the data; it discovers the patterns.',
      ],
    },
    {
      kind: 'analogy',
      heading: 'A simple analogy',
      body: 'Imagine a cooking apprentice. Nobody hands them a manual with the exact rule for "how much salt every dish needs in every situation". Instead, they taste hundreds of dishes, receive feedback ("needs more salt", "it is perfect"), and gradually develop a **palate**: an intuition they cannot explain with formulas, but which works. AI learns the same way: it does not memorize rules, it develops a "statistical palate" from examples.',
    },
    {
      kind: 'flow',
      heading: 'From AI to language models',
      caption: 'Each level is a specialization of the previous one: they are not rival technologies, but layers.',
      direction: 'down',
      highlight: [0],
      nodes: [
        { label: 'AI', desc: 'Any system that performs intelligent tasks: from a "smart" thermostat to ChatGPT.' },
        { label: 'Machine Learning', desc: 'Subfield where the system learns patterns from data, instead of following hand-programmed rules.' },
        { label: 'Deep Learning', desc: 'Branch of ML based on neural networks with many layers; excellent with images, audio, and language.' },
        { label: 'Generative models', desc: 'Deep networks trained to CREATE new content: text, images, code, music.' },
        { label: 'LLMs & multimodal', desc: 'Generative language models (GPT, Claude, Gemini) and those combining text, image, and audio.' },
      ],
    },
    {
      kind: 'text',
      heading: 'Machine Learning and Deep Learning, without jargon',
      paragraphs: [
        '**Machine Learning** is the idea that the program improves with data. You show it 10,000 photos labeled "cat" or "dog" and it learns to tell them apart on its own. The more good examples, the better it learns; with bad data, it learns badly ("garbage in, garbage out").',
        '**Deep Learning** uses **neural networks**: structures vaguely inspired by the brain, organized in layers. Each layer detects something slightly more abstract: in a photo, the first layer sees edges, the next sees shapes, and the last ones "understand" that it is a cat. "Deep" simply refers to there being many layers.',
        'Almost all the modern AI you see in headlines (ChatGPT, translators, facial recognition) is Deep Learning. But beware: "classic" AI is not dead, as you will see in the next comparison.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Traditional AI vs generative AI',
      caption: 'Two different philosophies within the same discipline. Both are used today, for different problems.',
      left: {
        title: 'Traditional AI',
        tone: 'a',
        items: [
          'Answers with a label or a number: is it spam? What will the price be? What is the probability of default?',
          'Classifies, predicts, and recommends from learned patterns.',
          'Examples: spam filters, Netflix recommenders, bank fraud detection, predictive maintenance.',
        ],
      },
      right: {
        title: 'Generative AI',
        tone: 'b',
        items: [
          'Creates new content: writes text, programs code, generates images, or composes music.',
          'Learns the deep structure of language, images, or sound.',
          'Examples: ChatGPT, Claude, Gemini, image generators like the ones built into those same apps.',
        ],
      },
    },
    {
      kind: 'text',
      heading: 'Foundation models and multimodal models',
      paragraphs: [
        'A **foundation model** is a huge model trained on colossal amounts of data (much of the internet, books, code...) that serves as a **base for a great many applications**. Instead of training a model from scratch for each task, companies start from a foundation model and adapt it. GPT, Claude, and Gemini are foundation models.',
        'A **multimodal model** is one that understands and generates **several types of data at once**: text, images, audio, or video. When you send a photo to ChatGPT or Gemini and it describes it, or when you ask it to generate an image from a sentence, you are using its multimodal capability. The future of AI is multimodal: the real world is not just text.',
      ],
    },
    {
      kind: 'checklist',
      heading: 'AI is already in your daily life',
      items: [
        'Recommenders: Netflix, Spotify, or YouTube decide what to suggest to you with traditional AI.',
        'Computer vision: phone face unlock, photo tagging, traffic cameras.',
        'Automatic translation: Google Translate or DeepL use Deep Learning models.',
        'Writing assistants: Gmail autocomplete, spell checkers, automatic summaries.',
        'Conversation: ChatGPT, Claude, and Gemini are generative AI in product form.',
        'Voice: automatic YouTube subtitles or voice assistants transcribe your speech with AI.',
      ],
    },
    {
      kind: 'callout',
      tone: 'tip',
      title: 'The idea that runs through the whole course',
      body: 'AI does not "understand" like you do: **it detects statistical patterns in data**. That single sentence explains why it is so powerful (it finds patterns invisible to humans) and why it sometimes fails with total confidence (a pattern is not a truth). Keep it in mind in every module.',
    },
    {
      kind: 'exercise',
      heading: 'Check your understanding',
      prompt: 'A company wants to predict which customers will cancel their subscription next month, based on their usage history.',
      question: 'Which type of AI best fits this problem?',
      options: [
        'Generative AI, because it is the most modern',
        'Traditional AI (predictive Machine Learning), because the problem asks for a numerical prediction, not creating content',
        'A multimodal model, because it combines several types of data',
        'None: this is better solved with hand-written rules',
      ],
      correctIndex: 1,
      explanation: 'The problem asks to classify/predict (will cancel or not), which is the classic territory of traditional AI. Generative AI creates new content; there is nothing to create here. Choosing the right tool for the problem is the first skill of an AI professional.',
    },
  ],
  keyConcepts: [
    { term: 'AI', def: 'Discipline that creates systems capable of performing tasks that require human intelligence: perceiving, reasoning, learning, and deciding.' },
    { term: 'Machine Learning', def: 'Subfield of AI where the system learns patterns from data, instead of following hand-programmed rules.' },
    { term: 'Deep Learning', def: 'Branch of Machine Learning based on neural networks with many layers, capable of learning very complex representations.' },
    { term: 'Generative AI', def: 'Type of AI that creates new content (text, images, code, audio) from what it learned during training.' },
    { term: 'Foundation model', def: 'Large model trained on huge volumes of data that serves as a base for many different applications.' },
    { term: 'Multimodal model', def: 'Model that understands and generates several types of data at once: text, images, audio, or video.' },
    { term: 'Neural network', def: 'Computing structure organized in layers, vaguely inspired by the brain, that learns by detecting patterns at levels.' },
    { term: 'Training', def: 'Process in which a model adjusts its internal parameters by analyzing large amounts of examples.' },
  ],
  mistakes: [
    { wrong: 'AI understands the world like a person does.', right: 'It does not: it detects statistical patterns in data. It can give correct answers without "understanding" anything, which is why it sometimes gets things wrong with total confidence.' },
    { wrong: 'AI and ChatGPT are the same thing.', right: 'ChatGPT is a product built on a model (GPT). AI covers much more: recommenders, computer vision, translators, robotics...' },
    { wrong: 'If an AI says it, it must be true.', right: 'Generative models produce plausible text, not verified text. Always double-check important information.' },
    { wrong: 'Traditional AI is no longer used.', right: 'It is still the most used in companies: fraud detection, demand forecasting, customer segmentation, and predictive maintenance.' },
  ],
};

export default { es, en };
