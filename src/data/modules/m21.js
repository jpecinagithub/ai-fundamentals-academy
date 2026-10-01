const es = {
  id: 'm21',
  title: 'RAG: el modelo consulta tus documentos',
  short: 'RAG',
  description: 'Retrieval-Augmented Generation: cómo darle al LLM acceso a tus documentos privados y actualizados sin reentrenarlo, para que responda con datos reales y citando fuentes.',
  icon: 'Search',
  stage: 'APIs',
  sections: [
    {
      kind: 'text',
      heading: 'El problema: el modelo no conoce TUS documentos',
      paragraphs: [
        'Un LLM como ChatGPT sabe muchísimo sobre el mundo... **hasta la fecha en que se entrenó**. Lo que no sabe es nada de **tu empresa**: tus informes internos, tus manuales, tus facturas, tus precios.',
        'Además, su conocimiento se queda **congelado en el tiempo**. Si le preguntas por «el EBITDA de septiembre» y estamos en octubre, un modelo entrenado en junio no puede saberlo.',
        'La solución obvia —«pues vuelve a entrenar el modelo con mis documentos»— es carísima, lenta, y tendrías que repetirla cada vez que cambie un documento. Necesitamos algo más inteligente.',
      ],
    },
    {
      kind: 'analogy',
      heading: 'Un experto con una biblioteca al lado',
      body: 'Imagina que le preguntas a un experto algo que no sabe de memoria. En lugar de inventarse la respuesta, hace lo profesional: **se levanta, va a la biblioteca, busca el documento correcto, lo consulta y te responde basándose en lo que leyó**. RAG hace exactamente eso con el LLM: en lugar de obligarlo a «sabérselo todo de memoria», le damos la capacidad de **consultar nuestros documentos en el momento** y responder apoyándose en ellos.',
    },
    {
      kind: 'flow',
      heading: 'Cómo funciona RAG, paso a paso',
      caption: 'RAG = Retrieval (recuperar) + Augmented (aumentado) + Generation (generación): generar la respuesta con el contexto recuperado.',
      direction: 'down',
      highlight: [3],
      nodes: [
        { label: 'Pregunta del usuario', desc: '«¿Cuál fue el EBITDA en septiembre?»' },
        { label: 'Búsqueda', desc: 'La pregunta se convierte a embedding y se buscan los fragmentos más parecidos en tus documentos.' },
        { label: 'Recuperación', desc: 'Se extraen los fragmentos relevantes (p. ej., el informe financiero de septiembre).' },
        { label: 'Contexto ampliado', desc: 'Esos fragmentos se pegan junto a la pregunta en el prompt.' },
        { label: 'El LLM responde', desc: 'El modelo redacta la respuesta basándose en los fragmentos recuperados.' },
      ],
    },
    {
      kind: 'compare',
      heading: 'LLM solo vs. LLM con RAG',
      caption: 'La misma pregunta, dos mundos distintos.',
      left: {
        title: 'LLM solo',
        tone: 'poor',
        items: [
          'Solo sabe lo aprendido en el entrenamiento',
          'No conoce tus documentos privados',
          'Conocimiento congelado en la fecha de entrenamiento',
          'Si no lo sabe, puede inventárselo (alucinación)',
        ],
      },
      right: {
        title: 'LLM + RAG',
        tone: 'good',
        items: [
          'Consulta tus documentos en tiempo real',
          'Responde con datos internos y privados',
          'Usa siempre la información más actualizada',
          'Se apoya en fragmentos reales: puede citar sus fuentes',
        ],
      },
    },
    {
      kind: 'example',
      heading: 'Ejemplo real: «¿Cuál fue el EBITDA en septiembre?»',
      label: 'Caso de empresa',
      body: 'Preguntas al asistente de tu empresa: **«¿Cuál fue el EBITDA de nuestra empresa en septiembre?»**. El LLM por sí solo no tiene ni idea: esos datos no estaban en su entrenamiento (son privados y recientes). Con RAG, el sistema convierte tu pregunta en un embedding, busca en la base de documentos internos, **recupera el informe financiero de septiembre** y lo añade al contexto. El LLM lee el fragmento y responde: «El EBITDA de septiembre fue de 142.300 €, según el informe financiero mensual».',
      result: 'Sin RAG: «no lo sé» o una alucinación. Con RAG: la respuesta correcta, con la fuente citada.',
    },
    {
      kind: 'text',
      heading: 'Un detalle clave: los fragmentos (chunks)',
      paragraphs: [
        'Los documentos no se buscan enteros: se dividen en **fragmentos** (*chunks*) de unos pocos párrafos. Cada fragmento se convierte a embedding (módulo 20) y se guarda en un índice.',
        'Cuando preguntas algo, el sistema no busca **palabras clave**, sino **significado**: encuentra los fragmentos cuyo embedding está más cerca del embedding de tu pregunta. Por eso entiende «¿cuánto ganamos en septiembre?» aunque el informe diga «EBITDA».',
      ],
    },
    {
      kind: 'checklist',
      heading: 'Cuándo usar RAG',
      items: [
        'Cuando el LLM necesita datos **privados o internos** (documentos de tu empresa).',
        'Cuando la información **cambia con frecuencia** (precios, informes mensuales, documentación).',
        'Cuando quieres que el modelo **cite sus fuentes** en lugar de inventarse la respuesta.',
        'Cuando reentrenar el modelo sería demasiado **caro o lento** para tu caso.',
      ],
    },
    {
      kind: 'callout',
      tone: 'info',
      title: 'RAG no cambia el modelo',
      body: 'Un matiz importante que retomaremos en el módulo 22: **RAG no modifica lo que el modelo sabe**, solo le añade información en el contexto de cada pregunta. El modelo sigue siendo el mismo; la diferencia está en lo que puede consultar.',
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Un empleado pregunta al asistente interno: «¿Cuál es la política de devoluciones de este año?»',
      question: '¿Por qué RAG es la mejor opción aquí?',
      options: [
        'Porque el modelo memoriza la política en su entrenamiento para siempre.',
        'Porque recupera el documento actualizado de la intranet y responde apoyándose en él, sin reentrenar nada.',
        'Porque cambia permanentemente el comportamiento del modelo.',
        'Porque ya no hace falta ningún documento: el modelo lo deduce solo.',
      ],
      correctIndex: 1,
      explanation: 'La política puede cambiar cada año y es información interna que el modelo no tiene en su entrenamiento. RAG la recupera del documento actual y la añade al contexto, dando la respuesta correcta con la fuente, sin necesidad de reentrenar.',
    },
  ],
  keyConcepts: [
    { term: 'RAG', def: 'Técnica que combina un LLM con la recuperación de documentos: busca fragmentos relevantes y los añade al contexto antes de responder.' },
    { term: 'Retrieval (recuperación)', def: 'Fase de RAG en la que se buscan los fragmentos de documento más parecidos a la pregunta usando embeddings.' },
    { term: 'Chunk (fragmento)', def: 'Porción pequeña de un documento (unos párrafos) que se indexa por separado para recuperar solo lo relevante.' },
    { term: 'Contexto aumentado', def: 'El prompt final que une la pregunta del usuario con los fragmentos recuperados.' },
    { term: 'Índice vectorial', def: 'Base donde se guardan los embeddings de los fragmentos para buscar los más parecidos en milisegundos.' },
    { term: 'Alucinación', def: 'Respuesta inventada por el modelo cuando no tiene información fiable; RAG la reduce apoyándose en datos reales.' },
  ],
  mistakes: [
    { wrong: 'RAG entrena o reentrena el modelo con mis documentos.', right: 'RAG no modifica el modelo: solo recupera fragmentos y los pega en el contexto de cada pregunta. Modificar el modelo es el fine-tuning (módulo 22).' },
    { wrong: 'Con RAG el modelo siempre dice la verdad.', right: 'RAG reduce mucho las alucinaciones, pero el modelo puede seguir interpretando mal un fragmento o combinando información de forma incorrecta.' },
    { wrong: 'RAG es solo una búsqueda por palabras clave.', right: 'RAG busca por significado con embeddings: entiende «¿cuánto ganamos?» aunque el documento diga «EBITDA».' },
  ],
};

const en = {
  id: 'm21',
  title: 'RAG: the model queries your documents',
  short: 'RAG',
  description: 'Retrieval-Augmented Generation: how to give the LLM access to your private, up-to-date documents without retraining it, so it responds with real data and cites sources.',
  icon: 'Search',
  stage: 'APIs',
  sections: [
    {
      kind: 'text',
      heading: 'The problem: the model does not know YOUR documents',
      paragraphs: [
        'An LLM like ChatGPT knows a huge amount about the world... **up to the date it was trained on**. What it does not know is anything about **your company**: your internal reports, your manuals, your invoices, your prices.',
        'What is more, its knowledge stays **frozen in time**. If you ask it about "September\'s EBITDA" and it is October, a model trained in June cannot know it.',
        'The obvious solution — "well, retrain the model on my documents" — is hugely expensive, slow, and you would have to repeat it every time a document changes. We need something smarter.',
      ],
    },
    {
      kind: 'analogy',
      heading: 'An expert with a library at hand',
      body: 'Imagine you ask an expert something they do not know by heart. Instead of making up the answer, they do the professional thing: **they get up, go to the library, find the right document, consult it, and answer you based on what they read**. RAG does exactly that with the LLM: instead of forcing it to "know everything by heart", we give it the ability to **consult our documents on the spot** and respond based on them.',
    },
    {
      kind: 'flow',
      heading: 'How RAG works, step by step',
      caption: 'RAG = Retrieval + Augmented + Generation: generating the answer with the retrieved context.',
      direction: 'down',
      highlight: [3],
      nodes: [
        { label: 'User question', desc: '"What was the EBITDA in September?"' },
        { label: 'Search', desc: 'The question is turned into an embedding and the most similar fragments are searched in your documents.' },
        { label: 'Retrieval', desc: 'The relevant fragments are extracted (e.g., the September financial report).' },
        { label: 'Augmented context', desc: 'Those fragments are pasted alongside the question in the prompt.' },
        { label: 'The LLM responds', desc: 'The model writes the answer based on the retrieved fragments.' },
      ],
    },
    {
      kind: 'compare',
      heading: 'LLM alone vs. LLM with RAG',
      caption: 'The same question, two different worlds.',
      left: {
        title: 'LLM alone',
        tone: 'poor',
        items: [
          'Only knows what it learned in training',
          'Does not know your private documents',
          'Knowledge frozen at the training date',
          'If it does not know, it may make it up (hallucination)',
        ],
      },
      right: {
        title: 'LLM + RAG',
        tone: 'good',
        items: [
          'Consults your documents in real time',
          'Responds with internal, private data',
          'Always uses the most up-to-date information',
          'Builds on real fragments: it can cite its sources',
        ],
      },
    },
    {
      kind: 'example',
      heading: 'Real example: "What was the EBITDA in September?"',
      label: 'Business case',
      body: 'You ask your company\'s assistant: **"What was our company\'s EBITDA in September?"**. The LLM alone has no idea: that data was not in its training (it is private and recent). With RAG, the system turns your question into an embedding, searches the internal document base, **retrieves the September financial report**, and adds it to the context. The LLM reads the fragment and responds: "September\'s EBITDA was €142,300, according to the monthly financial report".',
      result: 'Without RAG: "I don\'t know" or a hallucination. With RAG: the correct answer, with the source cited.',
    },
    {
      kind: 'text',
      heading: 'A key detail: the fragments (chunks)',
      paragraphs: [
        'Documents are not searched whole: they are split into **fragments** (*chunks*) of a few paragraphs. Each fragment is turned into an embedding (module 20) and stored in an index.',
        'When you ask something, the system does not search for **keywords**, but for **meaning**: it finds the fragments whose embedding is closest to your question\'s embedding. That is why it understands "how much did we earn in September?" even if the report says "EBITDA".',
      ],
    },
    {
      kind: 'checklist',
      heading: 'When to use RAG',
      items: [
        'When the LLM needs **private or internal** data (your company\'s documents).',
        'When the information **changes frequently** (prices, monthly reports, documentation).',
        'When you want the model to **cite its sources** instead of making up the answer.',
        'When retraining the model would be too **expensive or slow** for your case.',
      ],
    },
    {
      kind: 'callout',
      tone: 'info',
      title: 'RAG does not change the model',
      body: 'An important nuance we will revisit in module 22: **RAG does not modify what the model knows**, it only adds information to the context of each question. The model stays the same; the difference is in what it can consult.',
    },
    {
      kind: 'exercise',
      heading: 'Check your understanding',
      prompt: 'An employee asks the internal assistant: "What is this year\'s returns policy?"',
      question: 'Why is RAG the best option here?',
      options: [
        'Because the model memorizes the policy in its training forever.',
        'Because it retrieves the updated document from the intranet and responds based on it, without retraining anything.',
        'Because it permanently changes the model\'s behavior.',
        'Because no document is needed anymore: the model deduces it on its own.',
      ],
      correctIndex: 1,
      explanation: 'The policy can change every year and it is internal information the model does not have in its training. RAG retrieves it from the current document and adds it to the context, giving the correct answer with the source, with no need to retrain.',
    },
  ],
  keyConcepts: [
    { term: 'RAG', def: 'Technique that combines an LLM with document retrieval: it searches for relevant fragments and adds them to the context before responding.' },
    { term: 'Retrieval', def: 'The RAG phase in which the document fragments most similar to the question are searched using embeddings.' },
    { term: 'Chunk', def: 'Small portion of a document (a few paragraphs) that is indexed separately so only the relevant part is retrieved.' },
    { term: 'Augmented context', def: 'The final prompt that joins the user\'s question with the retrieved fragments.' },
    { term: 'Vector index', def: 'Database where fragment embeddings are stored to find the most similar ones in milliseconds.' },
    { term: 'Hallucination', def: 'Invented response from the model when it lacks reliable information; RAG reduces it by building on real data.' },
  ],
  mistakes: [
    { wrong: 'RAG trains or retrains the model on my documents.', right: 'RAG does not modify the model: it only retrieves fragments and pastes them into each question\'s context. Modifying the model is fine-tuning (module 22).' },
    { wrong: 'With RAG the model always tells the truth.', right: 'RAG greatly reduces hallucinations, but the model can still misinterpret a fragment or combine information incorrectly.' },
    { wrong: 'RAG is just keyword search.', right: 'RAG searches by meaning with embeddings: it understands "how much did we earn?" even if the document says "EBITDA".' },
  ],
};

export default { es, en };
