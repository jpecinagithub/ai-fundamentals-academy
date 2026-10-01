const es = {
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

const en = {
  id: 'm19',
  title: 'Temperature and parameters: the model\'s personality',
  short: 'Temperature',
  description: 'Temperature, top-p, and max tokens are the dials that control how a model responds: creativity versus precision. Learn to tune them and to choose between fast models and reasoning models.',
  icon: 'Thermometer',
  stage: 'APIs',
  sections: [
    {
      kind: 'text',
      heading: 'Temperature: the creativity dial',
      paragraphs: [
        'When a model generates text, it does not choose "the" next word: it computes **probabilities** for many candidate words and picks among them. The **temperature** parameter controls how much risk it takes in that choice.',
        'With **temperature 0**, the model always picks the most likely option: **deterministic** responses (same question → same answer), precise and conservative. With **temperature 1** (or higher), it allows itself to pick less likely options: more **varied, creative, and unpredictable** responses… with a higher risk of error.',
        'Think of temperature as the dial between **"be precise"** and **"surprise me"**. It does not make the model smarter or dumber: it changes its personality.',
      ],
    },
    {
      kind: 'text',
      heading: 'Max tokens and top-p, in plain language',
      paragraphs: [
        '**Max tokens** is the response length limit: how many tokens at most the model can generate before stopping. It does not limit how "smart" it is, but **how long it can talk**. If you set it too low, responses come out cut off mid-sentence; if you set it too high, you pay for tokens you may not need.',
        '**Top-p** (also called *nucleus sampling*) is another variability dial, a cousin of temperature: instead of adjusting the overall risk, it trims the menu of candidate words to the most likely ones adding up to probability `p`. With a low `top-p` (e.g. 0.1), the model only chooses among the safest options; with a high `top-p` (e.g. 0.9), the menu is broad and varied.',
        'In practice, tune **one of the two** (temperature or top-p), not both at once: they are two ways of moving the same needle between precision and creativity.',
      ],
    },
    {
      kind: 'table',
      heading: 'Temperature in practice',
      headers: ['Value', 'Behavior', 'Use it when…'],
      rows: [
        ['0 – 0.2', 'Deterministic: same answer every time. Precise and conservative.', 'Classifying data, extracting information, code, answers that must be reliable.'],
        ['0.3 – 0.6', 'Balanced: some variety without losing the plot.', 'Professional writing, summaries, explanations.'],
        ['0.7 – 1', 'Creative: diverse and unpredictable responses.', 'Business ideas, names, stories, brainstorming.'],
        ['> 1', 'Chaotic: very original but prone to incoherence.', 'Experimentation; rarely in production.'],
      ],
    },
    {
      kind: 'compare',
      heading: 'Fast models vs. reasoning models',
      left: {
        title: 'Fast models',
        tone: 'a',
        items: [
          'They respond directly, almost instantly.',
          'Ideal for simple tasks: classifying, summarizing, translating, writing.',
          'Cheaper per token and with lower latency.',
          'They can fail at problems that demand several steps of logic.',
          'Example: "summarize this email in two lines".',
        ],
      },
      right: {
        title: 'Reasoning models',
        tone: 'b',
        items: [
          'They think before responding: they generate an internal step-by-step reasoning.',
          'Ideal for complex problems: math, hard code, analysis.',
          'Slower and more expensive (they generate many "thinking" tokens).',
          'Overkill for trivial tasks: you would overpay and wait longer.',
          'Example: "design the tax strategy for this transaction".',
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
      title: 'The golden rule',
      body: '**Low temperature for data, high temperature for ideas.** If you need the model to classify, extract, or compute → 0–0.2. If you need it to invent, propose, or narrate → 0.7–1. And remember: temperature 0 does not mean "no errors", it means "the same error every time" if the model gets it wrong. Precision also depends on the prompt and the chosen model.',
    },
    {
      kind: 'exercise',
      heading: 'Check your understanding',
      prompt: 'You have two tasks: (A) extract the amounts from 200 invoices in JSON format; (B) propose 10 names for a new coffee brand.',
      question: 'Which configuration makes the most sense?',
      options: [
        'Temperature 0.9 for both: that way the model performs at its best.',
        'Temperature 0–0.2 for (A) and 0.7–1 for (B): precision for data, creativity for ideas.',
        'Temperature 0–0.2 for (B) and 0.7–1 for (A): the other way around.',
        'It does not matter: temperature does not affect the result.',
      ],
      correctIndex: 1,
      explanation: 'Extracting amounts demands determinism and reliability → low temperature. Inventing names calls for variety and originality → high temperature. Tuning temperature (or top-p) to the task is one of the most profitable decisions when using AI APIs.',
    },
  ],
  keyConcepts: [
    { term: 'Temperature', def: 'Parameter (0 to 1+) that controls response variability: 0 = deterministic and precise; 1 = creative and unpredictable.' },
    { term: 'Top-p', def: 'Parameter that limits candidate words to the most likely ones adding up to probability p; another way to regulate creativity.' },
    { term: 'Max tokens', def: 'Maximum number of tokens the model can generate in a response; it controls length, not quality.' },
    { term: 'Determinism', def: 'Property of always giving the same response to the same input; achieved with temperature 0.' },
    { term: 'Fast model', def: 'Model optimized to respond directly, cheaply, and with low latency; ideal for simple tasks.' },
    { term: 'Reasoning model', def: 'Model that generates internal step-by-step reasoning before responding; better at complex problems, but slower and more expensive.' },
    { term: 'Hallucination', def: 'Error in which the model generates false information with total confidence; the risk increases with high temperature.' },
  ],
  mistakes: [
    { wrong: 'High temperature = smarter model.', right: 'It does not change intelligence: it changes variability. High = more diverse and unpredictable responses, with a higher risk of error.' },
    { wrong: 'With temperature 0 the model never makes mistakes.', right: 'It will be deterministic (same answer every time), but it can repeat the same mistake with total confidence.' },
    { wrong: 'Max tokens limits how smart the model is.', right: 'It limits response length, not quality; if it runs short, the response comes out cut off mid-sentence.' },
    { wrong: 'Reasoning models are good for everything.', right: 'They shine at complex problems, but they are slower and more expensive; a fast model is enough for simple tasks.' },
  ],
};

export default { es, en };
