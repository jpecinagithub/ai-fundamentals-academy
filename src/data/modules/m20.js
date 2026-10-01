const es = {
  id: 'm20',
  title: 'Embeddings: el significado en números',
  short: 'Embeddings',
  description: 'Descubre cómo la IA convierte palabras y textos en listas de números que permiten medir qué tan parecidos son por su significado, sin matemáticas complicadas.',
  icon: 'Boxes',
  stage: 'APIs',
  sections: [
    {
      kind: 'text',
      heading: 'El ordenador no entiende palabras... pero sí entiende números',
      paragraphs: [
        'Todo lo que un ordenador procesa son **números**. Sin embargo, las palabras, frases e ideas que usamos tienen algo que los números simples no capturan: el **significado**. La palabra «perro» no vale 7, y «gato» no vale 8.',
        'Un **embedding** es la solución a este problema: una forma de convertir cualquier texto (una palabra, una frase, un documento entero) en una **lista de números** que representa su significado. A esa lista de números se la llama **vector**.',
        'Lo importante no son los números en sí (que son arbitrarios), sino lo que permiten hacer: **medir qué tan parecidos son dos textos por su significado**, simplemente comparando sus números.',
      ],
    },
    {
      kind: 'analogy',
      heading: 'Un mapa donde lo parecido está junto',
      body: 'Imagina que cada palabra es una ciudad en un mapa. En un mapa normal, las ciudades cercanas suelen compartir clima y cultura. En el «mapa del significado» ocurre igual: las palabras con significado parecido —«perro» y «gato»— quedan en el mismo vecindario, mientras que «coche» vive en un barrio muy lejano. Los embeddings son las **coordenadas GPS** de ese mapa: un sistema de números que sitúa cada texto en el lugar correcto del mapa del significado.',
    },
    {
      kind: 'text',
      heading: 'La distancia es la clave',
      paragraphs: [
        'Con los embeddings, preguntas como **«¿qué tan parecidos son estos dos textos?»** se convierten en un cálculo de distancia: cuanto más cerca estén los números, más parecido es el significado.',
        'Esto es potentísimo porque funciona incluso cuando los textos **no comparten ninguna palabra**: «El felino dormía al sol» y «Un gato descansaba en el jardín» tienen palabras distintas, pero sus embeddings quedan muy cerca porque significan casi lo mismo.',
        'Y no es magia: estos mapas numéricos se aprenden analizando **millones de textos** durante el entrenamiento del modelo. Las palabras que aparecen en contextos parecidos acaban con embeddings parecidos.',
      ],
    },
    { kind: 'simulator', component: 'EmbeddingsVisual' },
    {
      kind: 'example',
      heading: 'Visualización conceptual: «perro», «gato» y «coche»',
      label: 'Caso conceptual',
      body: 'Supón que representamos tres palabras en un mapa 2D simplificado del significado. **«perro»** y **«gato»** aparecen en contextos similares (mascotas, hogar, cuidados), así que sus puntos quedan muy juntos. **«coche»** aparece en contextos totalmente distintos (carreteras, motor, velocidad), así que su punto queda lejos de ambos. La distancia numérica entre los puntos refleja la distancia de significado. En la realidad los embeddings tienen cientos de dimensiones, no dos, pero la idea es exactamente la misma.',
      result: 'Medir la distancia entre embeddings = medir la similitud semántica. Sin entender una sola palabra: solo con números.',
    },
    {
      kind: 'flow',
      heading: 'Del texto al embedding',
      caption: 'El modelo convierte el texto en números; los números permiten comparar significados.',
      direction: 'right',
      nodes: [
        { label: 'Texto', desc: 'Una palabra, frase o documento' },
        { label: 'Modelo de embeddings', desc: 'Red neuronal ya entrenada' },
        { label: 'Vector', desc: 'Lista de cientos de números' },
        { label: 'Comparación', desc: 'Distancias = similitud de significado' },
      ],
    },
    {
      kind: 'checklist',
      heading: 'Dónde se usan los embeddings (con ejemplos reales)',
      items: [
        '**Búsqueda semántica**: un buscador interno que encuentra documentos aunque la consulta no use las palabras exactas (buscar «cómo dar de baja mi cuenta» encuentra el artículo «Procedimiento de cancelación de suscripciones»).',
        '**Recomendaciones**: Netflix o Spotify sugieren contenido «parecido a lo que te gustó» midiendo qué embeddings están cerca.',
        '**RAG** (módulo 21): encontrar los fragmentos de documento más relevantes para la pregunta del usuario antes de responder.',
        '**Clasificación**: asignar automáticamente una etiqueta a un texto —un ticket de soporte se clasifica como «facturación» o «técnico»— sin programar reglas a mano.',
        '**Detección de duplicados**: saber que dos preguntas o dos reseñas dicen lo mismo aunque estén escritas con otras palabras.',
      ],
    },
    {
      kind: 'text',
      heading: 'Lo que de verdad importa (sin matemáticas)',
      paragraphs: [
        'No necesitas saber cómo se calcula nada. Quédate con la idea central: **los embeddings convierten el significado en números que se pueden comparar**.',
        'Cuando oigas «búsqueda semántica», «recomendador» o «RAG», piensa: *ahí detrás hay embeddings midiendo distancias de significado*. Esa intuición te servirá para todo el resto del curso.',
      ],
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Imagina tres palabras —«perro», «gato» y «coche»— ya convertidas a embeddings. El sistema calcula las distancias entre ellas.',
      question: '¿Qué distancia será la más pequeña?',
      options: [
        'Entre «perro» y «coche», porque los dos pueden ir por la misma calle.',
        'Entre «perro» y «gato», porque comparten significado: son mascotas.',
        'Entre «gato» y «coche», porque las dos palabras tienen cinco letras.',
        'Todas iguales, porque las distancias no dependen del significado.',
      ],
      correctIndex: 1,
      explanation: 'Correcto: los embeddings sitúan juntos los textos con significado parecido («perro» y «gato», ambos mascotas) y lejos los de significado distinto («coche»). La distancia numérica refleja la distancia de significado, no el parecido de las letras ni el contexto literal.',
    },
  ],
  keyConcepts: [
    { term: 'Embedding', def: 'Lista de números (vector) que representa el significado de un texto: una palabra, una frase o un documento.' },
    { term: 'Vector', def: 'Lista ordenada de números que el ordenador puede comparar y medir.' },
    { term: 'Similitud semántica', def: 'Qué tan parecidos son dos textos por su significado, aunque no compartan palabras.' },
    { term: 'Espacio vectorial', def: 'El «mapa» donde vive cada embedding; en él, lo parecido queda junto y lo distinto, lejos.' },
    { term: 'Dimensionalidad', def: 'Cantidad de números que forma cada embedding (p. ej., 1536). Más dimensiones permiten capturar matices más finos.' },
    { term: 'Modelo de embeddings', def: 'Modelo de IA entrenado para convertir texto en embeddings; se usa vía API sin entrenar nada.' },
    { term: 'Índice vectorial', def: 'Estructura que permite buscar embeddings parecidos entre millones de ellos en milisegundos.' },
  ],
  mistakes: [
    { wrong: 'Los embeddings le dan al ordenador una comprensión del significado como la nuestra.', right: 'Los embeddings capturan patrones estadísticos del lenguaje, no «comprenden» nada: son coordenadas aprendidas de millones de textos.' },
    { wrong: 'Un embedding es simplemente asignar a cada palabra un número fijo.', right: 'No: el embedding es una lista de números que representa el significado en contexto, y lo que importa es la distancia entre listas, no un número asignado a mano.' },
    { wrong: 'Para usar embeddings necesito entrenar un modelo yo mismo.', right: 'Los modelos de embeddings se usan como servicio (API de OpenAI, Cohere, etc.): envías texto y recibes el vector, sin entrenar nada.' },
    { wrong: 'Si dos textos no comparten palabras, los embeddings no los relacionan.', right: 'Precisamente la gracia es que «el felino dormía al sol» y «un gato descansaba en el jardín» quedan cerca aunque no compartan ninguna palabra.' },
  ],
};

const en = {
  id: 'm20',
  title: 'Embeddings: meaning in numbers',
  short: 'Embeddings',
  description: 'Discover how AI turns words and texts into lists of numbers that make it possible to measure how similar they are in meaning — no complicated math.',
  icon: 'Boxes',
  stage: 'APIs',
  sections: [
    {
      kind: 'text',
      heading: 'Computers do not understand words... but they do understand numbers',
      paragraphs: [
        'Everything a computer processes is **numbers**. But the words, phrases, and ideas we use have something that plain numbers do not capture: **meaning**. The word "dog" is not worth 7, and "cat" is not worth 8.',
        'An **embedding** is the solution to this problem: a way of turning any text (a word, a phrase, an entire document) into a **list of numbers** that represents its meaning. That list of numbers is called a **vector**.',
        'What matters is not the numbers themselves (they are arbitrary), but what they make possible: **measuring how similar two texts are in meaning**, simply by comparing their numbers.',
      ],
    },
    {
      kind: 'analogy',
      heading: 'A map where similar things sit together',
      body: 'Imagine that each word is a city on a map. On a normal map, nearby cities tend to share climate and culture. On the "meaning map" the same thing happens: words with similar meaning — "dog" and "cat" — end up in the same neighborhood, while "car" lives in a very distant district. Embeddings are the **GPS coordinates** of that map: a system of numbers that places each text in the right spot on the meaning map.',
    },
    {
      kind: 'text',
      heading: 'Distance is the key',
      paragraphs: [
        'With embeddings, questions like **"how similar are these two texts?"** become a distance calculation: the closer the numbers, the more similar the meaning.',
        'This is extremely powerful because it works even when the texts **share no words at all**: "The feline slept in the sun" and "A cat rested in the garden" use different words, but their embeddings end up very close because they mean almost the same thing.',
        'And it is not magic: these numerical maps are learned by analyzing **millions of texts** during the model\'s training. Words that appear in similar contexts end up with similar embeddings.',
      ],
    },
    { kind: 'simulator', component: 'EmbeddingsVisual' },
    {
      kind: 'example',
      heading: 'Conceptual visualization: "dog", "cat", and "car"',
      label: 'Conceptual case',
      body: 'Suppose we represent three words on a simplified 2D map of meaning. **"dog"** and **"cat"** appear in similar contexts (pets, home, care), so their points end up very close together. **"car"** appears in totally different contexts (roads, engines, speed), so its point ends up far from both. The numerical distance between the points reflects the distance in meaning. In reality embeddings have hundreds of dimensions, not two, but the idea is exactly the same.',
      result: 'Measuring the distance between embeddings = measuring semantic similarity. Without understanding a single word: only with numbers.',
    },
    {
      kind: 'flow',
      heading: 'From text to embedding',
      caption: 'The model turns text into numbers; the numbers make it possible to compare meanings.',
      direction: 'right',
      nodes: [
        { label: 'Text', desc: 'A word, phrase, or document' },
        { label: 'Embeddings model', desc: 'Already trained neural network' },
        { label: 'Vector', desc: 'List of hundreds of numbers' },
        { label: 'Comparison', desc: 'Distances = meaning similarity' },
      ],
    },
    {
      kind: 'checklist',
      heading: 'Where embeddings are used (with real examples)',
      items: [
        '**Semantic search**: an internal search engine that finds documents even when the query does not use the exact words (searching "how to cancel my account" finds the article "Subscription cancellation procedure").',
        '**Recommendations**: Netflix or Spotify suggest content "similar to what you liked" by measuring which embeddings are nearby.',
        '**RAG** (module 21): finding the document fragments most relevant to the user\'s question before responding.',
        '**Classification**: automatically assigning a label to a text — a support ticket gets classified as "billing" or "technical" — without hand-coding rules.',
        '**Duplicate detection**: knowing that two questions or two reviews say the same thing even when written with different words.',
      ],
    },
    {
      kind: 'text',
      heading: 'What really matters (no math)',
      paragraphs: [
        'You do not need to know how anything is computed. Keep the core idea: **embeddings turn meaning into numbers that can be compared**.',
        'When you hear "semantic search", "recommender", or "RAG", think: *there are embeddings behind it measuring meaning distances*. That intuition will serve you for the rest of the course.',
      ],
    },
    {
      kind: 'exercise',
      heading: 'Check your understanding',
      prompt: 'Imagine three words — "dog", "cat", and "car" — already converted to embeddings. The system computes the distances between them.',
      question: 'Which distance will be the smallest?',
      options: [
        'Between "dog" and "car", because both can drive down the same street.',
        'Between "dog" and "cat", because they share meaning: they are pets.',
        'Between "cat" and "car", because both words have three letters.',
        'All equal, because distances do not depend on meaning.',
      ],
      correctIndex: 1,
      explanation: 'Correct: embeddings place texts with similar meaning ("dog" and "cat", both pets) together and those with different meaning ("car") far apart. Numerical distance reflects meaning distance, not letter similarity or literal context.',
    },
  ],
  keyConcepts: [
    { term: 'Embedding', def: 'List of numbers (vector) that represents the meaning of a text: a word, a phrase, or a document.' },
    { term: 'Vector', def: 'Ordered list of numbers that a computer can compare and measure.' },
    { term: 'Semantic similarity', def: 'How similar two texts are in meaning, even if they share no words.' },
    { term: 'Vector space', def: 'The "map" where each embedding lives; in it, similar things sit together and different things sit far apart.' },
    { term: 'Dimensionality', def: 'Number of numbers that make up each embedding (e.g., 1536). More dimensions capture finer nuances.' },
    { term: 'Embeddings model', def: 'AI model trained to turn text into embeddings; used via API without training anything.' },
    { term: 'Vector index', def: 'Structure that allows finding similar embeddings among millions of them in milliseconds.' },
  ],
  mistakes: [
    { wrong: 'Embeddings give computers an understanding of meaning like ours.', right: 'Embeddings capture statistical patterns of language, they do not "understand" anything: they are coordinates learned from millions of texts.' },
    { wrong: 'An embedding is simply assigning each word a fixed number.', right: 'No: the embedding is a list of numbers that represents meaning in context, and what matters is the distance between lists, not a hand-assigned number.' },
    { wrong: 'To use embeddings I need to train a model myself.', right: 'Embeddings models are used as a service (OpenAI, Cohere APIs, etc.): you send text and receive the vector, without training anything.' },
    { wrong: 'If two texts share no words, embeddings cannot relate them.', right: 'That is precisely the point: "the feline slept in the sun" and "a cat rested in the garden" end up close even though they share no words.' },
  ],
};

export default { es, en };
