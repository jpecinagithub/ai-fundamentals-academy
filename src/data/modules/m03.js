const es = {
  id: 'm3',
  title: 'Tokens: las piezas del lenguaje',
  short: 'Tokens',
  description: 'Qué son los tokens, cómo se trocea el texto antes de llegar al modelo y por qué determinan el coste y los límites.',
  icon: 'Boxes',
  stage: 'LLM',
  sections: [
    {
      kind: 'text',
      heading: 'Qué es un token',
      paragraphs: [
        'Un **token** es la unidad mínima de texto con la que trabaja un modelo de lenguaje. No son palabras ni letras exactamente: son **fragmentos de texto** que el modelo aprendió a reconocer durante su entrenamiento. Todo lo que escribes se convierte primero en tokens, y todo lo que el modelo genera son tokens que luego se vuelven a convertir en texto.',
        'Como regla aproximada, **1 token ≈ ¾ de una palabra en inglés** (unas 4 letras). En español la proporción es algo peor, porque la mayoría de los modelos se entrenaron sobre todo con texto en inglés. Mil tokens equivalen más o menos a 750 palabras en inglés o unas 500-600 en español.',
      ],
    },
    {
      kind: 'text',
      heading: 'Tokenización: por qué una palabra puede ser varios tokens',
      paragraphs: [
        'El proceso de trocear el texto se llama **tokenización**. Las palabras frecuentes ("casa", "the") suelen ser un solo token, pero las palabras largas o poco comunes se dividen en piezas: "inteligencia" podría partirse en `in` + `tel` + `igen` + `cia`. Los acentos, los signos de puntuación y los idiomas menos representados también generan más fragmentos.',
        'Esto tiene dos consecuencias que notarás como usuario: los textos en español o con muchos tecnicismos **consumen más tokens** que su equivalente en inglés, y el modelo a veces "ve" las palabras de forma rara (por eso puede fallar contando letras de una palabra: él no ve letras, ve tokens).',
      ],
    },
    { kind: 'simulator', component: 'TokenVisualizer' },
    {
      kind: 'text',
      heading: 'Tokens y dinero: la entrada y la salida se pagan',
      paragraphs: [
        'Casi todos los servicios de IA cobran **por token**, y distinguen entre **tokens de entrada** (todo lo que envías: tu mensaje, el historial, los documentos) y **tokens de salida** (lo que el modelo genera). Los de salida suelen costar más, porque generar es computacionalmente más caro que leer.',
        'Esto significa que una conversación larga cuesta más que una corta (todo el historial se reenvía cada vez, como verás en el módulo de contexto), y que pedir respuestas eternas sale caro. La buena noticia: para un usuario normal de ChatGPT o Claude con suscripción, el coste ya está incluido en la tarifa plana.',
      ],
    },
    {
      kind: 'flow',
      heading: 'Del texto a la respuesta',
      caption: 'Todo el viaje de tu mensaje pasa por los tokens, en ambas direcciones.',
      direction: 'right',
      highlight: [2],
      nodes: [
        { label: 'Tu texto', desc: 'Lo que escribes en la app, en lenguaje humano normal.' },
        { label: 'Tokenizador', desc: 'Trocea tu texto en tokens: la "moneda" que entiende el modelo.' },
        { label: 'Modelo', desc: 'El LLM predice token a token la continuación más probable.' },
        { label: 'Respuesta', desc: 'Los tokens generados se convierten de nuevo en texto legible.' },
      ],
    },
    {
      kind: 'callout',
      tone: 'tip',
      title: 'Trucos para gastar menos tokens',
      body: 'Sé conciso en lo que pegas (no adjuntes documentos enteros si solo necesitas una parte), pide respuestas con la longitud justa ("resúmelo en 5 líneas"), y evita repetir en cada mensaje lo que ya está en la conversación: el historial ya viaja en el contexto. Si algún día usas una API de pago, estos hábitos se traducen directamente en euros.',
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Estás usando una API que cobra por tokens. Envías un documento de 10.000 tokens y pides un resumen. El modelo genera un resumen de 500 tokens.',
      question: '¿Por qué tokens pagas en esta interacción?',
      options: [
        'Solo por los 500 tokens de salida, porque es lo único que genera el modelo',
        'Por los 10.500 tokens en total: los 10.000 de entrada (documento + instrucciones) más los 500 de salida',
        'Por una tarifa fija, los tokens no se cobran por separado',
        'Solo por los 10.000 de entrada, porque la salida es gratuita',
      ],
      correctIndex: 1,
      explanation: 'Se paga por ambas direcciones: los tokens de entrada (todo lo enviado al modelo, incluido el documento) y los de salida (lo generado, normalmente más caros). Por eso los documentos largos encarecen cada petición.',
    },
  ],
  keyConcepts: [
    { term: 'Token', def: 'Unidad mínima de texto con la que trabaja un LLM: un fragmento que puede ser una palabra, parte de ella o un carácter.' },
    { term: 'Tokenización', def: 'Proceso de trocear el texto en tokens antes de entregárselo al modelo.' },
    { term: 'Vocabulario', def: 'Conjunto de tokens (decenas de miles) que un modelo concreto sabe reconocer y generar.' },
    { term: 'Tokens de entrada', def: 'Todos los tokens que envías al modelo: tu mensaje, el historial, documentos adjuntos e instrucciones del sistema.' },
    { term: 'Tokens de salida', def: 'Los tokens que el modelo genera como respuesta; suelen tener un precio mayor que los de entrada.' },
    { term: 'Coste por token', def: 'Modelo de precios de las APIs de IA: pagas según los tokens de entrada y salida que consumes.' },
    { term: 'Subword', def: 'Fragmento de palabra (como "intel" o "igencia") que el tokenizador usa para representar palabras poco frecuentes.' },
  ],
  mistakes: [
    { wrong: 'Un token es una palabra.', right: 'Puede ser una palabra completa, un fragmento ("inteligencia" en 4 piezas) o incluso un solo carácter. Depende de la frecuencia en el entrenamiento.' },
    { wrong: 'El modelo entiende el español igual de bien que el inglés.', right: 'La mayoría de los tokenizadores están optimizados para inglés: el español suele consumir más tokens para decir lo mismo.' },
    { wrong: 'Los tokens solo importan a los programadores.', right: 'Determinan el coste de cada petición y el límite de cuánto texto puedes enviar o recibir en una conversación.' },
    { wrong: 'Puedo pegar un libro entero y lo procesará sin problema.', right: 'Existe un límite (el context window): lo que exceda se recorta o se resume, como verás en el módulo 4.' },
  ],
};

const en = {
  id: 'm3',
  title: 'Tokens: the pieces of language',
  short: 'Tokens',
  description: 'What tokens are, how text is chopped up before reaching the model, and why they determine cost and limits.',
  icon: 'Boxes',
  stage: 'LLM',
  sections: [
    {
      kind: 'text',
      heading: 'What a token is',
      paragraphs: [
        'A **token** is the smallest unit of text a language model works with. They are not exactly words or letters: they are **fragments of text** the model learned to recognize during training. Everything you write is first converted into tokens, and everything the model generates is tokens that are then converted back into text.',
        'As a rough rule, **1 token ≈ ¾ of a word in English** (around 4 characters). In Spanish the ratio is somewhat worse, because most models were trained mostly on English text. A thousand tokens equal roughly 750 words in English or about 500-600 in Spanish.',
      ],
    },
    {
      kind: 'text',
      heading: 'Tokenization: why one word can be several tokens',
      paragraphs: [
        'The process of chopping text is called **tokenization**. Frequent words ("casa", "the") are usually a single token, but long or uncommon words are split into pieces: "inteligencia" could be split into `in` + `tel` + `igen` + `cia`. Accents, punctuation marks, and less-represented languages also generate more fragments.',
        'This has two consequences you will notice as a user: texts in Spanish or with many technical terms **consume more tokens** than their English equivalent, and the model sometimes "sees" words strangely (which is why it can fail at counting the letters of a word: it does not see letters, it sees tokens).',
      ],
    },
    { kind: 'simulator', component: 'TokenVisualizer' },
    {
      kind: 'text',
      heading: 'Tokens and money: input and output are paid for',
      paragraphs: [
        'Almost all AI services charge **per token**, distinguishing between **input tokens** (everything you send: your message, the history, the documents) and **output tokens** (what the model generates). Output tokens usually cost more, because generating is computationally more expensive than reading.',
        'This means a long conversation costs more than a short one (the whole history is resent each time, as you will see in the context module), and asking for endless answers is expensive. The good news: for a normal ChatGPT or Claude user with a subscription, the cost is already included in the flat rate.',
      ],
    },
    {
      kind: 'flow',
      heading: 'From text to answer',
      caption: 'Your whole message journey goes through tokens, in both directions.',
      direction: 'right',
      highlight: [2],
      nodes: [
        { label: 'Your text', desc: 'What you type in the app, in normal human language.' },
        { label: 'Tokenizer', desc: 'Chops your text into tokens: the "currency" the model understands.' },
        { label: 'Model', desc: 'The LLM predicts the most likely continuation token by token.' },
        { label: 'Answer', desc: 'The generated tokens are converted back into readable text.' },
      ],
    },
    {
      kind: 'callout',
      tone: 'tip',
      title: 'Tricks to spend fewer tokens',
      body: 'Be concise in what you paste (do not attach entire documents if you only need a part), ask for answers of the right length ("summarize it in 5 lines"), and avoid repeating in each message what is already in the conversation: the history already travels in the context. If you ever use a paid API, these habits translate directly into euros.',
    },
    {
      kind: 'exercise',
      heading: 'Check your understanding',
      prompt: 'You are using an API that charges per token. You send a 10,000-token document and ask for a summary. The model generates a 500-token summary.',
      question: 'Which tokens do you pay for in this interaction?',
      options: [
        'Only the 500 output tokens, because that is the only thing the model generates',
        'For all 10,500 tokens: the 10,000 input tokens (document + instructions) plus the 500 output tokens',
        'A flat rate; tokens are not charged separately',
        'Only the 10,000 input tokens, because output is free',
      ],
      correctIndex: 1,
      explanation: 'You pay for both directions: input tokens (everything sent to the model, including the document) and output tokens (what is generated, usually more expensive). That is why long documents make each request pricier.',
    },
  ],
  keyConcepts: [
    { term: 'Token', def: 'Smallest unit of text an LLM works with: a fragment that can be a word, part of one, or a character.' },
    { term: 'Tokenization', def: 'Process of chopping text into tokens before handing it to the model.' },
    { term: 'Vocabulary', def: 'Set of tokens (tens of thousands) that a specific model can recognize and generate.' },
    { term: 'Input tokens', def: 'All the tokens you send to the model: your message, the history, attached documents, and system instructions.' },
    { term: 'Output tokens', def: 'The tokens the model generates as a response; they usually cost more than input tokens.' },
    { term: 'Per-token cost', def: 'Pricing model of AI APIs: you pay according to the input and output tokens you consume.' },
    { term: 'Subword', def: 'Word fragment (like "intel" or "igencia") that the tokenizer uses to represent infrequent words.' },
  ],
  mistakes: [
    { wrong: 'A token is a word.', right: 'It can be a whole word, a fragment ("inteligencia" in 4 pieces), or even a single character. It depends on frequency in training.' },
    { wrong: 'The model understands Spanish as well as English.', right: 'Most tokenizers are optimized for English: Spanish usually consumes more tokens to say the same thing.' },
    { wrong: 'Tokens only matter to programmers.', right: 'They determine the cost of each request and the limit of how much text you can send or receive in a conversation.' },
    { wrong: 'I can paste a whole book and it will process it without problems.', right: 'There is a limit (the context window): whatever exceeds it gets cut or summarized, as you will see in module 4.' },
  ],
};

export default { es, en };
