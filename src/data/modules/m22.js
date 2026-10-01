const es = {
  id: 'm22',
  title: 'Fine-tuning: enseñarle a comportarse',
  short: 'Fine-tuning',
  description: 'El tercer nivel después del prompting y el RAG: un entrenamiento adicional que modifica el comportamiento aprendido del modelo de forma permanente. Cuándo usar cada técnica.',
  icon: 'SlidersHorizontal',
  stage: 'APIs',
  sections: [
    {
      kind: 'text',
      heading: 'Fine-tuning: enseñarle al modelo a comportarse',
      paragraphs: [
        'Hasta ahora hemos visto dos formas de mejorar las respuestas: **dar mejores instrucciones** (prompting) y **darle mejor información** (RAG). Pero ninguna de las dos cambia lo que el modelo *es*: sigue siendo el mismo modelo de propósito general.',
        '**Fine-tuning** (ajuste fino) es el tercer nivel: un **entrenamiento adicional** sobre el modelo ya entrenado, con ejemplos de cómo queremos que responda. No le enseñamos datos nuevos (eso es trabajo de RAG); le enseñamos **cómo comportarse**.',
        'Piénsalo así: prompting = **dar instrucciones** («responde como un abogado»), RAG = **dar información relevante** («lee este documento y responde»), fine-tuning = **modificar el comportamiento aprendido** (el modelo ya sale de fábrica «hablando como un abogado»).',
      ],
    },
    {
      kind: 'table',
      heading: 'Prompting vs RAG vs Fine-tuning',
      headers: ['Aspecto', 'Prompting', 'RAG', 'Fine-tuning'],
      rows: [
        ['Qué es', 'Dar instrucciones en el prompt', 'Dar información relevante en el contexto', 'Entrenamiento adicional que modifica el modelo'],
        ['Cuándo usarlo', 'Guiar el tono, formato o estilo de respuesta', 'El modelo necesita datos que no conoce', 'Cambiar el comportamiento de forma permanente'],
        ['Coste / complejidad', 'Gratis e inmediato', 'Medio: hay que indexar documentos', 'Alto: requiere ejemplos y entrenamiento'],
        ['Ejemplo', '«Responde en viñetas y en tono formal»', 'Un asistente que consulta tus manuales', 'Un modelo que redacta contratos en el estilo de tu despacho'],
      ],
    },
    {
      kind: 'analogy',
      heading: 'Tres formas de ayudar a un empleado nuevo',
      body: 'Imagina que llega un becario brillante pero genérico a tu empresa. **Prompting** es darle instrucciones cada mañana («hoy atiende así»). **RAG** es ponerle la intranet al lado para que consulte lo que no sabe. **Fine-tuning** es formarlo durante semanas hasta que el estilo de la empresa le sale de forma natural, sin instrucciones ni consultas. Los tres son útiles; cada uno resuelve un problema distinto.',
    },
    {
      kind: 'example',
      heading: 'Ejemplo: un asistente con el tono de tu marca',
      label: 'Caso real',
      body: 'Una tienda online quiere que su chatbot responda siempre con un tono cercano y juvenil, usando sus expresiones y su forma de tratar al cliente. Con prompting tendrían que repetir las instrucciones en cada mensaje (y a veces el modelo «se olvida»). Con **fine-tuning**, entrenan el modelo con cientos de ejemplos de respuestas con el tono deseado: a partir de ahí, el tono sale **por defecto**, sin instrucciones adicionales.',
      result: 'Prompting = instrucciones repetidas · RAG = información consultada · Fine-tuning = comportamiento modificado de forma permanente.',
    },
    {
      kind: 'text',
      heading: 'Cuándo NO hacer fine-tuning',
      paragraphs: [
        'El fine-tuning suena potente, pero en la mayoría de proyectos **no es necesario**. Si tu problema es que el modelo no conoce ciertos datos → **RAG**. Si es que no sigue el formato que quieres → **prompting** bien diseñado.',
        'El fine-tuning tiene sentido cuando necesitas un **cambio de comportamiento sistemático y permanente**: un estilo de escritura concreto, respuestas en un formato muy específico, o el vocabulario técnico de un sector.',
        'Además es la opción más **cara y compleja**: necesitas un conjunto de ejemplos de calidad (decenas o cientos), pagar el entrenamiento y validar que el modelo no ha empeorado en otras cosas.',
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'No uses fine-tuning para datos que cambian',
      body: 'Un error clásico: hacer fine-tuning con el catálogo de productos o los precios. Cuando cambien (y cambiarán), tendrás que reentrenar. **Los datos que cambian van en RAG; el comportamiento estable, en fine-tuning**.',
    },
    {
      kind: 'checklist',
      heading: 'Regla de decisión rápida',
      items: [
        '¿El modelo no sigue el formato o el tono que quiero? → **Prompting**.',
        '¿El modelo no conoce la información? → **RAG**.',
        '¿Necesito que el comportamiento sea permanente y sistemático? → **Fine-tuning**.',
        '¿Los datos cambian con frecuencia? → **RAG**, nunca fine-tuning.',
      ],
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Una clínica quiere un asistente que redacte siempre los informes con la estructura y el vocabulario médico exactos que usan sus doctores, en cada respuesta, sin tener que recordárselo.',
      question: '¿Qué técnica encaja mejor?',
      options: [
        'RAG, porque necesita consultar los informes anteriores.',
        'Prompting, porque basta con decirle la estructura una vez.',
        'Fine-tuning, porque necesita un comportamiento permanente y sistemático en el estilo de redacción.',
        'Ninguna: es imposible que un modelo mantenga un estilo.',
      ],
      correctIndex: 2,
      explanation: 'No es un problema de información (RAG) ni de una instrucción puntual (prompting): es un comportamiento que debe salir por defecto en todas las respuestas. El fine-tuning modifica el comportamiento aprendido del modelo de forma permanente.',
    },
  ],
  keyConcepts: [
    { term: 'Fine-tuning', def: 'Entrenamiento adicional de un modelo ya entrenado con ejemplos, para modificar su comportamiento de forma permanente.' },
    { term: 'Prompting', def: 'Dar instrucciones en el prompt para guiar la respuesta, sin cambiar el modelo.' },
    { term: 'Comportamiento aprendido', def: 'La forma de responder que el modelo adopta tras el fine-tuning, sin necesidad de instrucciones.' },
    { term: 'Dataset de ajuste', def: 'Conjunto de ejemplos (pregunta → respuesta deseada) con el que se entrena el modelo en el fine-tuning.' },
    { term: 'Coste de entrenamiento', def: 'Tiempo y dinero necesarios para entrenar; hace del fine-tuning la opción más cara de las tres.' },
    { term: 'Sobreajuste (overfitting)', def: 'Riesgo de que el modelo memorice los ejemplos de entrenamiento y pierda capacidad general.' },
  ],
  mistakes: [
    { wrong: 'El fine-tuning es la mejor forma de enseñarle datos nuevos al modelo.', right: 'Para datos nuevos o cambiantes usa RAG: el fine-tuning sirve para modificar el comportamiento, no para memorizar información.' },
    { wrong: 'Con fine-tuning ya no necesito escribir prompts.', right: 'El fine-tuning cambia el comportamiento base, pero sigues escribiendo un prompt en cada petición: instrucciones + comportamiento aprendido se combinan.' },
    { wrong: 'El fine-tuning es rápido y barato.', right: 'Requiere preparar ejemplos de calidad, pagar el entrenamiento y validarlo: es la opción más cara y compleja de las tres.' },
  ],
};
const en = {"description":"The third level after prompting and RAG: additional training that permanently changes the model's learned behavior. When to use each technique.","icon":"SlidersHorizontal","id":"m22","keyConcepts":[{"def":"Additional training of an already-trained model with examples, to permanently modify its behavior.","term":"Fine-tuning"},{"def":"Giving instructions in the prompt to guide the response, without changing the model.","term":"Prompting"},{"def":"The way of responding the model adopts after fine-tuning, with no instructions needed.","term":"Learned behavior"},{"def":"Set of examples (question → desired answer) used to train the model during fine-tuning.","term":"Tuning dataset"},{"def":"Time and money needed to train; makes fine-tuning the most expensive of the three options.","term":"Training cost"},{"def":"Risk that the model memorizes the training examples and loses general ability.","term":"Overfitting"}],"mistakes":[{"right":"For new or changing data use RAG: fine-tuning modifies behavior, it doesn't memorize information.","wrong":"Fine-tuning is the best way to teach the model new data."},{"right":"Fine-tuning changes the base behavior, but you still write a prompt in every request: instructions + learned behavior combine.","wrong":"With fine-tuning I no longer need to write prompts."},{"right":"It requires preparing quality examples, paying for training, and validating it: it's the most expensive and complex of the three options.","wrong":"Fine-tuning is fast and cheap."}],"sections":[{"heading":"Fine-tuning: teaching the model how to behave","kind":"text","paragraphs":["So far we've seen two ways to improve responses: **giving better instructions** (prompting) and **giving it better information** (RAG). But neither changes what the model *is*: it's still the same general-purpose model.","**Fine-tuning** is the third level: **additional training** on the already-trained model, with examples of how we want it to respond. We don't teach it new data (that's RAG's job); we teach it **how to behave**.","Think of it this way: prompting = **giving instructions** (\"respond like a lawyer\"), RAG = **giving relevant information** (\"read this document and answer\"), fine-tuning = **modifying learned behavior** (the model comes out of the box already \"talking like a lawyer\")."]},{"headers":["Aspect","Prompting","RAG","Fine-tuning"],"heading":"Prompting vs RAG vs Fine-tuning","kind":"table","rows":[["What it is","Giving instructions in the prompt","Giving relevant information in the context","Additional training that modifies the model"],["When to use it","Guiding the tone, format, or style of a response","The model needs data it doesn't know","Changing behavior permanently"],["Cost / complexity","Free and immediate","Medium: you need to index documents","High: requires examples and training"],["Example","\"Respond in bullet points and a formal tone\"","An assistant that consults your manuals","A model that drafts contracts in your firm's style"]]},{"body":"Imagine a brilliant but generic intern joins your company. **Prompting** is giving them instructions every morning (\"serve customers like this today\"). **RAG** is putting the intranet next to them so they can look up what they don't know. **Fine-tuning** is training them for weeks until the company's style comes naturally, with no instructions or lookups. All three are useful; each solves a different problem.","heading":"Three ways to help a new hire","kind":"analogy"},{"body":"An online store wants its chatbot to always respond with a warm, youthful tone, using its expressions and its way of treating customers. With prompting they'd have to repeat the instructions in every message (and sometimes the model \"forgets\"). With **fine-tuning**, they train the model on hundreds of examples of responses in the desired tone: from then on, the tone comes out **by default**, with no extra instructions.","heading":"Example: an assistant with your brand's tone","kind":"example","label":"Real case","result":"Prompting = repeated instructions · RAG = consulted information · Fine-tuning = permanently modified behavior."},{"heading":"When NOT to fine-tune","kind":"text","paragraphs":["Fine-tuning sounds powerful, but in most projects **it's not necessary**. If your problem is that the model doesn't know certain data → **RAG**. If it's that it doesn't follow the format you want → well-designed **prompting**.","Fine-tuning makes sense when you need a **systematic, permanent behavior change**: a specific writing style, responses in a very specific format, or the technical vocabulary of an industry.","It's also the most **expensive and complex** option: you need a set of quality examples (dozens or hundreds), pay for the training, and validate that the model hasn't gotten worse at other things."]},{"body":"A classic mistake: fine-tuning on the product catalog or prices. When they change (and they will), you'll have to retrain. **Data that changes goes in RAG; stable behavior goes in fine-tuning**.","kind":"callout","title":"Don't use fine-tuning for data that changes","tone":"warn"},{"heading":"Quick decision rule","items":["The model doesn't follow the format or tone I want? → **Prompting**.","The model doesn't know the information? → **RAG**.","I need the behavior to be permanent and systematic? → **Fine-tuning**.","The data changes frequently? → **RAG**, never fine-tuning."],"kind":"checklist"},{"correctIndex":2,"explanation":"This isn't an information problem (RAG) or a one-off instruction (prompting): it's a behavior that must come out by default in every response. Fine-tuning permanently modifies the model's learned behavior.","heading":"Check your understanding","kind":"exercise","options":["RAG, because it needs to consult previous reports.","Prompting, because telling it the structure once is enough.","Fine-tuning, because it needs permanent, systematic behavior in its writing style.","None: it's impossible for a model to keep a style."],"prompt":"A clinic wants an assistant that always drafts reports with the exact structure and medical vocabulary its doctors use, in every response, without having to be reminded.","question":"Which technique fits best?"}],"short":"Fine-tuning","stage":"APIs","title":"Fine-tuning: teaching it how to behave"};
export default { es, en };
