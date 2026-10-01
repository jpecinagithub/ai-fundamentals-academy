export default {
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
