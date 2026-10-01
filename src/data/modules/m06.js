const es = {
  id: 'm6',
  title: 'Memoria: lo que el modelo recuerda de ti',
  short: 'Memoria',
  description: 'Contexto frente a memoria: los tipos de memoria de un sistema de IA y cómo recupera lo importante.',
  icon: 'History',
  stage: 'Prompts y contexto',
  sections: [
    {
      kind: 'text',
      heading: 'Contexto ≠ memoria: la distinción clave',
      paragraphs: [
        'Ya conoces el **contexto**: la información disponible **ahora mismo**, sobre la mesa de trabajo, que desaparece cuando cierras el chat. La **memoria** es otra cosa: información **almacenada** por el sistema para poder **recuperarla en futuras interacciones**.',
        'Una forma de verlo: el contexto es la memoria de trabajo (lo que tienes en la cabeza mientras resuelves un problema); la memoria es el archivo (notas guardadas que puedes consultar mañana). Cuando un asistente "te recuerda" entre sesiones, no es magia del modelo: es un sistema de memoria que rescata notas y las coloca en el contexto.',
      ],
    },
    {
      kind: 'text',
      heading: 'Tres tipos de memoria',
      paragraphs: [
        '**Memoria de corto plazo:** lo que ocurre dentro de una conversación: el historial reciente que viaja en el contexto. Es automática, limitada por la ventana de contexto y se pierde al cerrar el chat.',
        '**Memoria persistente:** datos que el sistema guarda entre sesiones: tu nombre, tus preferencias, hechos que le pediste recordar ("prefiero respuestas breves"). ChatGPT, Claude y Gemini ofrecen versiones de esto, normalmente configurables y borrables.',
        '**Memoria semántica:** conocimiento organizado sobre ti o tu dominio: tu perfil profesional, tus proyectos, el estado de tu trabajo. No son frases sueltas, sino una base de conocimiento que el sistema consulta cuando es relevante. Es lo que permite a un asistente decir "teniendo en cuenta tu proyecto de Logroño..." sin que se lo recuerdes.',
      ],
    },
    {
      kind: 'flow',
      heading: 'Cómo funciona la memoria, paso a paso',
      caption: 'La memoria no se "inyecta" entera: se guarda, se recupera lo relevante y solo eso entra al contexto.',
      direction: 'down',
      highlight: [2],
      nodes: [
        { label: 'Usuario', desc: 'Dices algo relevante: "Soy ingeniero industrial de Logroño".' },
        { label: 'Conversación', desc: 'El sistema detecta información digna de guardar.' },
        { label: 'Memoria', desc: 'La guarda de forma estructurada: hecho, preferencia o perfil.' },
        { label: 'Recuperación', desc: 'En otro chat, ante una pregunta relacionada, rescata ese dato.' },
        { label: 'Contexto', desc: 'El dato recuperado se añade al contexto actual.' },
        { label: 'LLM', desc: 'El modelo responde teniéndolo en cuenta, sin que se lo repitas.' },
      ],
    },
    {
      kind: 'text',
      heading: 'Recuperación: rescatar lo importante',
      paragraphs: [
        'Guardar es fácil; lo difícil es **recuperar lo relevante en el momento justo**. Los sistemas de memoria convierten tus datos en representaciones que permiten buscar por **significado**, no por palabras exactas: si guardó "trabaja en finanzas en Logroño" y preguntas por "empleos cerca de mí", conectará ambos.',
        'Por eso la memoria funciona mejor cuando es **selectiva**: guardar todo genera ruido y respuestas contaminadas con datos irrelevantes. Los buenos sistemas deciden qué merece guardarse (hechos estables, preferencias) y qué no (el chiste de ayer, un dato temporal).',
      ],
    },
    {
      kind: 'text',
      heading: 'Perfiles de usuario: la memoria en acción',
      paragraphs: [
        'Un **perfil de usuario** es el conjunto de memorias que un asistente mantiene sobre ti: quién eres, a qué te dedicas, cómo te gusta trabajar, en qué proyectos andas. Es lo que hace que con el tiempo el asistente parezca "conocerte".',
        'Ejemplo: le dices una vez que eres ingeniero industrial reconvertido a IA y que prefieres ejemplos con código. Semanas después, al pedirle ayuda con un proyecto, te responde con enfoque técnico y fragmentos de código sin que se lo pidas de nuevo. Eso es memoria persistente + recuperación funcionando.',
      ],
    },
    {
      kind: 'example',
      heading: 'Ejemplo real',
      label: 'El asistente que recuerda tus reuniones',
      body: 'En Claude puedes activar la memoria para que recuerde tus preferencias de trabajo. Un consultor le pidió una vez: "cuando te pida un resumen de reunión, dámelo en 5 viñetas con decisiones y responsables". A partir de entonces, cada vez que pega una transcripción, recibe exactamente ese formato sin repetir la instrucción.',
      result: 'Moraleja: la memoria convierte instrucciones repetidas en comportamiento por defecto. Ahorra tokens, tiempo y fricción.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Privacidad y control: la memoria se gestiona',
      body: 'La memoria guarda datos sobre ti, así que merece atención: revisa qué ha guardado tu asistente (ChatGPT, Claude y Gemini tienen pantallas de memoria), borra lo que no quieras conservar y **nunca compartas en un chat con memoria datos sensibles** (contraseñas, datos bancarios, información confidencial de tu empresa) que no quieras ver almacenados.',
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Un asistente con memoria activada te saluda: "¿Seguimos con tu proyecto del curso de IA?" aunque hoy has abierto un chat nuevo.',
      question: '¿Qué ha ocurrido técnicamente?',
      options: [
        'El modelo ha recordado tu conversación anterior por sí mismo, porque los LLMs tienen memoria permanente',
        'El sistema recuperó de tu memoria persistente el dato del proyecto y lo colocó en el contexto de este chat nuevo',
        'El contexto de ayer sigue abierto en segundo plano',
        'Es una alucinación: ningún sistema puede hacer eso',
      ],
      correctIndex: 1,
      explanation: 'El modelo por sí solo no recuerda entre chats: un sistema de memoria guardó el dato del proyecto, lo recuperó ante la nueva sesión y lo inyectó en el contexto. Contexto (temporal, este chat) ≠ memoria (almacenada, entre chats).',
    },
  ],
  keyConcepts: [
    { term: 'Memoria', def: 'Información almacenada por el sistema para recuperarla en futuras interacciones, más allá del chat actual.' },
    { term: 'Memoria de corto plazo', def: 'El historial de la conversación en curso, que viaja en el contexto y se pierde al cerrar el chat.' },
    { term: 'Memoria persistente', def: 'Datos guardados entre sesiones: nombre, preferencias, hechos que pediste recordar. Configurable y borrable.' },
    { term: 'Memoria semántica', def: 'Conocimiento organizado sobre ti o tu dominio (perfil, proyectos) que el sistema consulta cuando es relevante.' },
    { term: 'Recuperación', def: 'Proceso de rescatar de la memoria solo los datos relevantes para la pregunta actual e inyectarlos en el contexto.' },
    { term: 'Perfil de usuario', def: 'Conjunto de memorias que un asistente mantiene sobre ti: quién eres, cómo trabajas, en qué proyectos andas.' },
  ],
  mistakes: [
    { wrong: 'Contexto y memoria son lo mismo.', right: 'El contexto es información disponible ahora (temporal); la memoria es información almacenada recuperable en el futuro.' },
    { wrong: 'El modelo recuerda todo para siempre.', right: 'La memoria es limitada, selectiva y configurable: puedes revisar qué guarda el asistente y borrarlo.' },
    { wrong: 'La memoria funciona como la memoria humana.', right: 'Es almacenamiento y recuperación de datos por relevancia, no recuerdos vividos ni comprensión.' },
    { wrong: 'Si lo dije una vez en el chat, ya lo sabe para siempre.', right: 'Solo si el sistema decidió guardarlo como memoria persistente. El historial de un chat se pierde al cerrarlo.' },
  ],
};

const en = {
  id: 'm6',
  title: 'Memory: what the model remembers about you',
  short: 'Memory',
  description: 'Context vs memory: the types of memory in an AI system and how it retrieves what matters.',
  icon: 'History',
  stage: 'Prompts & Context',
  sections: [
    {
      kind: 'text',
      heading: 'Context ≠ memory: the key distinction',
      paragraphs: [
        'You already know **context**: the information available **right now**, on the work desk, which disappears when you close the chat. **Memory** is something else: information **stored** by the system so it can be **retrieved in future interactions**.',
        'One way to see it: context is working memory (what you hold in your head while solving a problem); memory is the filing cabinet (saved notes you can consult tomorrow). When an assistant "remembers you" between sessions, it is not model magic: it is a memory system that rescues notes and places them in the context.',
      ],
    },
    {
      kind: 'text',
      heading: 'Three types of memory',
      paragraphs: [
        '**Short-term memory:** what happens inside a conversation: the recent history traveling in the context. It is automatic, limited by the context window, and lost when the chat closes.',
        '**Persistent memory:** data the system saves between sessions: your name, your preferences, facts you asked it to remember ("I prefer brief answers"). ChatGPT, Claude, and Gemini offer versions of this, normally configurable and erasable.',
        '**Semantic memory:** organized knowledge about you or your domain: your professional profile, your projects, the state of your work. Not loose sentences, but a knowledge base the system consults when relevant. It is what lets an assistant say "considering your Logroño project..." without you reminding it.',
      ],
    },
    {
      kind: 'flow',
      heading: 'How memory works, step by step',
      caption: 'Memory is not "injected" whole: it is saved, the relevant part is retrieved, and only that enters the context.',
      direction: 'down',
      highlight: [2],
      nodes: [
        { label: 'User', desc: 'You say something relevant: "I am an industrial engineer from Logroño".' },
        { label: 'Conversation', desc: 'The system detects information worth saving.' },
        { label: 'Memory', desc: 'It saves it in structured form: fact, preference, or profile.' },
        { label: 'Retrieval', desc: 'In another chat, faced with a related question, it rescues that datum.' },
        { label: 'Context', desc: 'The retrieved datum is added to the current context.' },
        { label: 'LLM', desc: 'The model answers taking it into account, without you repeating it.' },
      ],
    },
    {
      kind: 'text',
      heading: 'Retrieval: rescuing what matters',
      paragraphs: [
        'Saving is easy; the hard part is **retrieving the relevant thing at the right moment**. Memory systems convert your data into representations that allow searching by **meaning**, not exact words: if it saved "works in finance in Logroño" and you ask about "jobs near me", it will connect both.',
        'That is why memory works best when it is **selective**: saving everything generates noise and answers polluted with irrelevant data. Good systems decide what deserves saving (stable facts, preferences) and what does not (yesterday joke, a temporary datum).',
      ],
    },
    {
      kind: 'text',
      heading: 'User profiles: memory in action',
      paragraphs: [
        'A **user profile** is the set of memories an assistant keeps about you: who you are, what you do, how you like to work, what projects you are on. It is what makes the assistant seem to "know you" over time.',
        'Example: you tell it once that you are an industrial engineer turned AI specialist and that you prefer examples with code. Weeks later, when you ask for help with a project, it answers with a technical focus and code snippets without you asking again. That is persistent memory + retrieval working.',
      ],
    },
    {
      kind: 'example',
      heading: 'Real example',
      label: 'The assistant that remembers your meetings',
      body: 'In Claude you can enable memory so it remembers your work preferences. A consultant once asked it: "when I ask for a meeting summary, give it to me in 5 bullets with decisions and owners". From then on, each time they paste a transcript, they receive exactly that format without repeating the instruction.',
      result: 'Lesson: memory turns repeated instructions into default behavior. It saves tokens, time, and friction.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Privacy and control: memory must be managed',
      body: 'Memory stores data about you, so it deserves attention: review what your assistant has saved (ChatGPT, Claude, and Gemini have memory screens), delete what you do not want to keep, and **never share in a memory-enabled chat sensitive data** (passwords, bank details, confidential company information) you do not want stored.',
    },
    {
      kind: 'exercise',
      heading: 'Check your understanding',
      prompt: 'An assistant with memory enabled greets you: "Shall we continue with your AI course project?" even though you opened a new chat today.',
      question: 'What happened technically?',
      options: [
        'The model remembered your previous conversation by itself, because LLMs have permanent memory',
        'The system retrieved the project datum from your persistent memory and placed it in the context of this new chat',
        'Yesterday context is still open in the background',
        'It is a hallucination: no system can do that',
      ],
      correctIndex: 1,
      explanation: 'The model alone does not remember between chats: a memory system saved the project datum, retrieved it for the new session, and injected it into the context. Context (temporary, this chat) ≠ memory (stored, between chats).',
    },
  ],
  keyConcepts: [
    { term: 'Memory', def: 'Information stored by the system to be retrieved in future interactions, beyond the current chat.' },
    { term: 'Short-term memory', def: 'The history of the ongoing conversation, traveling in the context and lost when the chat closes.' },
    { term: 'Persistent memory', def: 'Data saved between sessions: name, preferences, facts you asked to remember. Configurable and erasable.' },
    { term: 'Semantic memory', def: 'Organized knowledge about you or your domain (profile, projects) that the system consults when relevant.' },
    { term: 'Retrieval', def: 'Process of rescuing from memory only the data relevant to the current question and injecting it into the context.' },
    { term: 'User profile', def: 'Set of memories an assistant keeps about you: who you are, how you work, what projects you are on.' },
  ],
  mistakes: [
    { wrong: 'Context and memory are the same thing.', right: 'Context is information available now (temporary); memory is stored information recoverable in the future.' },
    { wrong: 'The model remembers everything forever.', right: 'Memory is limited, selective, and configurable: you can review what the assistant saves and delete it.' },
    { wrong: 'Memory works like human memory.', right: 'It is storage and retrieval of data by relevance, not lived memories or understanding.' },
    { wrong: 'If I said it once in the chat, it knows it forever.', right: 'Only if the system decided to save it as persistent memory. A chat history is lost when you close it.' },
  ],
};

export default { es, en };
