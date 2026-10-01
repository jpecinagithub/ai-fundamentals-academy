const es = {
  id: 'm4',
  title: 'El contexto: la memoria de trabajo del modelo',
  short: 'Contexto',
  description: 'Qué es el context window, qué información entra en él y qué ocurre cuando la conversación se hace muy larga.',
  icon: 'Layers',
  stage: 'Prompts y contexto',
  sections: [
    {
      kind: 'text',
      heading: 'Qué es el contexto',
      paragraphs: [
        'El **contexto** es toda la información que el modelo tiene **disponible en este momento** para generar su respuesta: tu mensaje actual, las instrucciones del sistema, la conversación previa, los documentos que adjuntaste y los resultados de las herramientas que haya usado. Es su "mesa de trabajo": solo puede usar lo que esté sobre la mesa.',
        'Un detalle crucial: el modelo **no recuerda nada entre mensajes por sí mismo**. Cada vez que le escribes, la aplicación le reenvía la conversación completa como contexto. Por eso "recuerda" lo que dijiste hace diez mensajes: porque se lo vuelven a contar cada vez.',
      ],
    },
    {
      kind: 'text',
      heading: 'El context window: el tamaño de la mesa',
      paragraphs: [
        'El **context window** (ventana de contexto) es el **límite máximo de tokens** que un modelo puede procesar de una vez. Los modelos actuales rondan entre los 128.000 y 1.000.000 de tokens. Para orientarte: 128.000 tokens equivalen a unas **300 páginas** de texto, y un millón, a una pequeña biblioteca.',
        'Pero hay matices: una ventana grande no significa que el modelo use bien todo su contenido. Los estudios muestran que los modelos prestan más atención al **principio y al final** del contexto y pueden "perder" información enterrada en medio. Además, más contexto = más coste y más lentitud. La calidad del contexto importa más que su tamaño.',
      ],
    },
    {
      kind: 'flow',
      heading: 'Qué entra en el contexto',
      caption: 'Todo esto viaja junto en cada petición al modelo, en este orden típico.',
      direction: 'down',
      highlight: [6],
      nodes: [
        { label: 'System Prompt', desc: 'Instrucciones invisibles que definen el comportamiento del asistente.' },
        { label: 'Conversación', desc: 'El historial de mensajes entre tú y el modelo en este chat.' },
        { label: 'Archivos', desc: 'Documentos o imágenes que adjuntaste o que la app inyectó.' },
        { label: 'Tools', desc: 'Resultados de herramientas usadas: búsquedas web, datos, código ejecutado.' },
        { label: 'Memoria relevante', desc: 'Fragmentos recuperados de tu memoria persistente, si existe.' },
        { label: 'Tu mensaje', desc: 'Lo que acabas de escribir: lo último que se añade.' },
        { label: 'LLM', desc: 'El modelo lee TODO lo anterior y genera la respuesta.' },
      ],
    },
    {
      kind: 'text',
      heading: 'Cuando la conversación es muy larga',
      paragraphs: [
        'Si el contexto supera el límite de la ventana, algo tiene que ceder. Las aplicaciones usan tres estrategias: el **truncado** (se descartan los mensajes más antiguos y el modelo "olvida" el principio), el **resumen** (se comprime la conversación vieja en un resumen que sí cabe) o una combinación de ambas.',
        'Por eso en chats larguísimos el asistente a veces pierde el hilo de lo que dijiste al principio, o confunde detalles: no es que sea tonto, es que esa parte ya no está sobre su mesa de trabajo. Si trabajas en algo largo e importante, **resume periódicamente los puntos clave** en el propio chat o empieza una conversación nueva con un resumen.',
      ],
    },
    {
      kind: 'text',
      heading: 'Tres cosas que no debes confundir',
      paragraphs: [
        '**Contexto ≠ conocimiento del modelo.** El conocimiento es lo que aprendió durante el entrenamiento (fijo, con fecha de corte); el contexto es la información que le das ahora (fresca, específica). Si le pegas un documento actual, el contexto manda sobre su conocimiento desactualizado.',
        '**Contexto ≠ memoria.** El contexto es temporal: desaparece cuando cierras el chat. La memoria es información **almacenada** que el sistema puede recuperar en futuras conversaciones. El módulo 6 está dedicado entero a esta diferencia.',
        '**Más contexto ≠ mejores respuestas.** Rellenar la ventana con información irrelevante distrae al modelo, ralentiza la respuesta y cuesta dinero. El arte está en darle **el contexto justo y relevante**.',
      ],
    },
    { kind: 'simulator', component: 'ContextSimulator' },
    {
      kind: 'example',
      heading: 'Ejemplo real',
      label: 'El informe que "olvidó"',
      body: 'Marta pega en Claude un informe de 80 páginas y mantiene una conversación de 40 mensajes analizándolo. Al final le pide: "recuerda la cifra de la página 3". Claude responde con un número... incorrecto. ¿Qué pasó? Entre el informe, el historial y los resúmenes intermedios, el contexto se llenó; la app resumió las primeras partes y el dato exacto de la página 3 se perdió en la compresión.',
      result: 'Moraleja: para datos exactos que necesitarás al final, mantenlos visibles (repítelos o guárdalos aparte). El contexto es una mesa de trabajo limitada, no un archivo infinito.',
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Llevas 60 mensajes en un mismo chat con un asistente de IA y de pronto empieza a contradecir cosas que acordasteis al principio de la conversación.',
      question: '¿Cuál es la explicación más probable?',
      options: [
        'El modelo ha borrado su conocimiento de entrenamiento',
        'El contexto se ha llenado y la app ha truncado o resumido los mensajes más antiguos, así que esos acuerdos ya no están disponibles para el modelo',
        'El modelo está alucinando porque hoy funciona mal',
        'Has superado el número máximo de chats permitidos',
      ],
      correctIndex: 1,
      explanation: 'Cada mensaje reenvía todo el historial como contexto. Al superar la ventana, lo más antiguo se recorta o resume, y el modelo pierde acceso literal a esos acuerdos. La solución: resumir los puntos clave o empezar un chat nuevo con un resumen.',
    },
  ],
  keyConcepts: [
    { term: 'Contexto', def: 'Toda la información disponible para el modelo en este momento: instrucciones, historial, archivos, resultados de tools y tu mensaje.' },
    { term: 'Context window', def: 'Límite máximo de tokens que un modelo puede procesar de una vez (de 128K a 1M+ en modelos actuales).' },
    { term: 'System prompt', def: 'Instrucciones invisibles que la aplicación coloca al inicio del contexto para definir el comportamiento del asistente.' },
    { term: 'Truncado', def: 'Estrategia que descarta los mensajes más antiguos cuando el contexto supera el límite de la ventana.' },
    { term: 'Resumen de conversación', def: 'Técnica que comprime el historial antiguo en un resumen para que quepa en el context window.' },
    { term: 'Conocimiento del modelo', def: 'Lo aprendido durante el entrenamiento (fijo, con fecha de corte); distinto del contexto, que es información fresca que le das tú.' },
  ],
  mistakes: [
    { wrong: 'El modelo recuerda todo lo que le dije ayer.', right: 'Cada conversación empieza con el contexto vacío. Solo "recuerda" lo que se le reenvía en el contexto actual, salvo que exista memoria persistente configurada.' },
    { wrong: 'Contexto y memoria son lo mismo.', right: 'El contexto es la información disponible ahora mismo (temporal); la memoria es información almacenada recuperable en futuras interacciones.' },
    { wrong: 'Cuanto más contexto, mejor respuesta siempre.', right: 'El contexto irrelevante distrae al modelo, ralentiza y encarece. Importa la relevancia, no solo el tamaño.' },
    { wrong: 'Si pego mucho texto, lo procesa todo tal cual.', right: 'Lo que exceda la ventana se recorta o se resume; los detalles enterrados en medio pueden perderse.' },
  ],
};

const en = {
  id: 'm4',
  title: 'Context: the working memory of the model',
  short: 'Context',
  description: 'What the context window is, what information goes into it, and what happens when the conversation gets very long.',
  icon: 'Layers',
  stage: 'Prompts & Context',
  sections: [
    {
      kind: 'text',
      heading: 'What context is',
      paragraphs: [
        '**Context** is all the information the model has **available right now** to generate its answer: your current message, the system instructions, the previous conversation, the documents you attached, and the results of tools it has used. It is its "work desk": it can only use what is on the desk.',
        'A crucial detail: the model **does not remember anything between messages by itself**. Each time you write to it, the application resends the full conversation as context. That is why it "remembers" what you said ten messages ago: because it is told again every time.',
      ],
    },
    {
      kind: 'text',
      heading: 'The context window: the size of the desk',
      paragraphs: [
        'The **context window** is the **maximum number of tokens** a model can process at once. Current models range from about 128,000 to 1,000,000 tokens. For reference: 128,000 tokens equal about **300 pages** of text, and a million, a small library.',
        'But there are nuances: a large window does not mean the model uses all its content well. Studies show models pay more attention to the **beginning and the end** of the context and can "lose" information buried in the middle. Also, more context = more cost and more slowness. The quality of context matters more than its size.',
      ],
    },
    {
      kind: 'flow',
      heading: 'What goes into the context',
      caption: 'All of this travels together in each request to the model, in this typical order.',
      direction: 'down',
      highlight: [6],
      nodes: [
        { label: 'System prompt', desc: 'Invisible instructions that define the assistant behavior.' },
        { label: 'Conversation', desc: 'The message history between you and the model in this chat.' },
        { label: 'Files', desc: 'Documents or images you attached or that the app injected.' },
        { label: 'Tools', desc: 'Results of tools used: web searches, data, executed code.' },
        { label: 'Relevant memory', desc: 'Fragments recovered from your persistent memory, if any.' },
        { label: 'Your message', desc: 'What you just wrote: the last thing added.' },
        { label: 'LLM', desc: 'The model reads ALL of the above and generates the answer.' },
      ],
    },
    {
      kind: 'text',
      heading: 'When the conversation is very long',
      paragraphs: [
        'If the context exceeds the window limit, something has to give. Applications use three strategies: **truncation** (the oldest messages are discarded and the model "forgets" the beginning), **summarization** (the old conversation is compressed into a summary that does fit), or a combination of both.',
        'That is why in very long chats the assistant sometimes loses track of what you agreed at the beginning, or confuses details: it is not that it is dumb, it is that that part is no longer on its work desk. If you work on something long and important, **periodically summarize the key points** in the chat itself or start a new conversation with a summary.',
      ],
    },
    {
      kind: 'text',
      heading: 'Three things you must not confuse',
      paragraphs: [
        '**Context ≠ model knowledge.** Knowledge is what it learned during training (fixed, with a cutoff date); context is the information you give it now (fresh, specific). If you paste a current document, context overrides its outdated knowledge.',
        '**Context ≠ memory.** Context is temporary: it disappears when you close the chat. Memory is **stored** information that the system can recover in future conversations. Module 6 is entirely devoted to this difference.',
        '**More context ≠ better answers.** Filling the window with irrelevant information distracts the model, slows the answer, and costs money. The art is in giving it **just the right, relevant context**.',
      ],
    },
    { kind: 'simulator', component: 'ContextSimulator' },
    {
      kind: 'example',
      heading: 'Real example',
      label: 'The report it "forgot"',
      body: 'Marta pastes an 80-page report into Claude and holds a 40-message conversation analyzing it. At the end she asks: "remember the figure on page 3". Claude answers with a number... an incorrect one. What happened? Between the report, the history, and the intermediate summaries, the context filled up; the app summarized the first parts and the exact figure on page 3 was lost in the compression.',
      result: 'Lesson: for exact data you will need at the end, keep it visible (repeat it or save it aside). Context is a limited work desk, not an infinite filing cabinet.',
    },
    {
      kind: 'exercise',
      heading: 'Check your understanding',
      prompt: 'You are 60 messages into a chat with an AI assistant and it suddenly starts contradicting things you agreed on at the beginning of the conversation.',
      question: 'What is the most likely explanation?',
      options: [
        'The model has erased its training knowledge',
        'The context filled up and the app truncated or summarized the oldest messages, so those agreements are no longer available to the model',
        'The model is hallucinating because it is malfunctioning today',
        'You have exceeded the maximum number of allowed chats',
      ],
      correctIndex: 1,
      explanation: 'Each message resends the whole history as context. When the window is exceeded, the oldest part gets cut or summarized, and the model loses literal access to those agreements. The fix: summarize the key points or start a new chat with a summary.',
    },
  ],
  keyConcepts: [
    { term: 'Context', def: 'All the information available to the model right now: instructions, history, files, tool results, and your message.' },
    { term: 'Context window', def: 'Maximum number of tokens a model can process at once (128K to 1M+ in current models).' },
    { term: 'System prompt', def: 'Invisible instructions the application places at the start of the context to define the assistant behavior.' },
    { term: 'Truncation', def: 'Strategy that discards the oldest messages when the context exceeds the window limit.' },
    { term: 'Conversation summary', def: 'Technique that compresses old history into a summary so it fits in the context window.' },
    { term: 'Model knowledge', def: 'What was learned during training (fixed, with a cutoff date); different from context, which is fresh information you provide.' },
  ],
  mistakes: [
    { wrong: 'The model remembers everything I told it yesterday.', right: 'Each conversation starts with an empty context. It only "remembers" what is resent in the current context, unless persistent memory is configured.' },
    { wrong: 'Context and memory are the same thing.', right: 'Context is the information available right now (temporary); memory is stored information recoverable in future interactions.' },
    { wrong: 'The more context, the better the answer, always.', right: 'Irrelevant context distracts the model, slows it down, and costs money. Relevance matters, not just size.' },
    { wrong: 'If I paste a lot of text, it processes it all as is.', right: 'Whatever exceeds the window gets cut or summarized; details buried in the middle can be lost.' },
  ],
};

export default { es, en };
