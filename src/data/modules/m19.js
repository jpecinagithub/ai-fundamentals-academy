export default {
  id: 'm19',
  title: 'Temperature y parámetros: el carácter del modelo',
  short: 'Temperature',
  description: 'Temperature, top-p y max tokens son los diales que controlan cómo responde un modelo: creatividad frente a precisión. Aprende a ajustarlos y a elegir entre modelos rápidos y modelos de razonamiento.',
  icon: 'Thermometer',
  stage: 'APIs',
  sections: [
    {
      kind: 'text',
      heading: 'Temperature: el dial de la creatividad',
      paragraphs: [
        'Cuando un modelo genera texto, no elige "la" palabra siguiente: calcula **probabilidades** para muchas palabras candidatas y elige entre ellas. El parámetro **temperature** controla cuánto riesgo asume en esa elección.',
        'Con **temperature 0**, el modelo siempre elige la opción más probable: respuestas **deterministas** (misma pregunta → misma respuesta), precisas y conservadoras. Con **temperature 1** (o más), se permite elegir opciones menos probables: respuestas más **variadas, creativas e impredecibles**… y con más riesgo de error.',
        'Piensa en temperature como el dial entre **"sé preciso"** y **"sorpréndeme"**. No hace al modelo más listo ni más tonto: cambia su carácter.',
      ],
    },
    {
      kind: 'text',
      heading: 'Max tokens y top-p, en lenguaje humano',
      paragraphs: [
        '**Max tokens** es el límite de longitud de la respuesta: cuántos tokens como máximo puede generar el modelo antes de detenerse. No limita lo "listo" que es, sino **lo largo que puede hablar**. Si lo pones muy bajo, las respuestas salen cortadas a mitad de frase; si lo pones muy alto, pagas por tokens que quizá no necesitas.',
        '**Top-p** (también llamado *nucleus sampling*) es otro dial de variabilidad, primo de temperature: en lugar de ajustar el riesgo global, recorta el menú de palabras candidatas a las más probables que sumen una probabilidad `p`. Con `top-p` bajo (p. ej. 0,1), el modelo solo elige entre las opciones más seguras; con `top-p` alto (p. ej. 0,9), el menú es amplio y variado.',
        'En la práctica, ajusta **uno de los dos** (temperature o top-p), no ambos a la vez: son dos formas de mover la misma aguja entre precisión y creatividad.',
      ],
    },
    {
      kind: 'table',
      heading: 'Temperature en la práctica',
      headers: ['Valor', 'Comportamiento', 'Úsalo cuando…'],
      rows: [
        ['0 – 0,2', 'Determinista: misma respuesta siempre. Preciso y conservador.', 'Clasificar datos, extraer información, código, respuestas que deben ser fiables.'],
        ['0,3 – 0,6', 'Equilibrado: algo de variedad sin perder el norte.', 'Redacción profesional, resúmenes, explicaciones.'],
        ['0,7 – 1', 'Creativo: respuestas diversas e impredecibles.', 'Ideas de negocio, nombres, historias, brainstorming.'],
        ['> 1', 'Caótico: muy original pero propenso a incoherencias.', 'Experimentación; rara vez en producción.'],
      ],
    },
    {
      kind: 'compare',
      heading: 'Modelos rápidos vs. modelos de razonamiento',
      left: {
        title: 'Modelos rápidos',
        tone: 'a',
        items: [
          'Responden de forma directa, casi instantánea.',
          'Ideales para tareas simples: clasificar, resumir, traducir, redactar.',
          'Más baratos por token y con menor latencia.',
          'Pueden fallar en problemas que exigen varios pasos de lógica.',
          'Ejemplo: "resume este email en dos líneas".',
        ],
      },
      right: {
        title: 'Modelos de razonamiento',
        tone: 'b',
        items: [
          'Piensan antes de responder: generan un razonamiento interno paso a paso.',
          'Ideales para problemas complejos: matemáticas, código difícil, análisis.',
          'Más lentos y más caros (generan muchos tokens "de pensamiento").',
          'Exagerados para tareas triviales: pagarías de más y esperarías más.',
          'Ejemplo: "diseña la estrategia fiscal de esta operación".',
        ],
      },
    },
    {
      kind: 'simulator',
      component: 'TemperatureLab',
    },
    {
      kind: 'callout',
      tone: 'tip',
      title: 'La regla de oro',
      body: '**Temperature baja para datos, temperature alta para ideas.** Si necesitas que el modelo clasifique, extraiga o calcule → 0–0,2. Si necesitas que invente, proponga o narre → 0,7–1. Y recuerda: temperature 0 no significa "sin errores", significa "mismo error siempre" si el modelo se equivoca. La precisión también depende del prompt y del modelo elegido.',
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Tienes dos tareas: (A) extraer los importes de 200 facturas en formato JSON; (B) proponer 10 nombres para una nueva marca de café.',
      question: '¿Qué configuración tiene más sentido?',
      options: [
        'Temperature 0,9 para ambas: así el modelo rinde al máximo.',
        'Temperature 0–0,2 para (A) y 0,7–1 para (B): precisión en datos, creatividad en ideas.',
        'Temperature 0–0,2 para (B) y 0,7–1 para (A): al revés.',
        'Da igual: temperature no afecta al resultado.',
      ],
      correctIndex: 1,
      explanation: 'Extraer importes exige determinismo y fiabilidad → temperature baja. Inventar nombres pide variedad y originalidad → temperature alta. Ajustar temperature (o top-p) a la tarea es una de las decisiones más rentables al usar APIs de IA.',
    },
  ],
  keyConcepts: [
    { term: 'Temperature', def: 'Parámetro (0 a 1+) que controla la variabilidad de las respuestas: 0 = determinista y preciso; 1 = creativo e impredecible.' },
    { term: 'Top-p', def: 'Parámetro que limita las palabras candidatas a las más probables que sumen probabilidad p; otra forma de regular la creatividad.' },
    { term: 'Max tokens', def: 'Límite máximo de tokens que el modelo puede generar en una respuesta; controla la longitud, no la calidad.' },
    { term: 'Determinismo', def: 'Propiedad de dar siempre la misma respuesta ante la misma entrada; se consigue con temperature 0.' },
    { term: 'Modelo rápido', def: 'Modelo optimizado para responder de forma directa, barata y con baja latencia; ideal para tareas simples.' },
    { term: 'Modelo de razonamiento', def: 'Modelo que genera un razonamiento interno paso a paso antes de responder; mejor en problemas complejos, pero más lento y caro.' },
    { term: 'Alucinación', def: 'Error en el que el modelo genera información falsa con total seguridad; el riesgo aumenta con temperature alta.' },
  ],
  mistakes: [
    { wrong: 'Temperature alta = modelo más inteligente.', right: 'No cambia la inteligencia: cambia la variabilidad. Alta = respuestas más diversas e impredecibles, con más riesgo de error.' },
    { wrong: 'Con temperature 0 el modelo nunca se equivoca.', right: 'Será determinista (misma respuesta siempre), pero puede repetir el mismo error con total seguridad.' },
    { wrong: 'Max tokens limita lo listo que es el modelo.', right: 'Limita la longitud de la respuesta, no la calidad; si se queda corto, la respuesta sale cortada a mitad de frase.' },
    { wrong: 'Los modelos de razonamiento sirven para todo.', right: 'Brillan en problemas complejos, pero son más lentos y caros; para tareas simples basta un modelo rápido.' },
  ],
};
