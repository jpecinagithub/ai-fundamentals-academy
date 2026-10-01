/**
 * AgentSimulator strings. Namespaced with the "agentsimulator." prefix.
 */
export const dict = {
  es: {
    'agentsimulator.title': 'Simulador de agente',
    'agentsimulator.fixed_objective': 'Objetivo fijo:',
    'agentsimulator.loop_desc':
      'Pulsa «Iniciar simulación» para ver el bucle razonar → actuar → observar de un agente con herramientas.',
    'agentsimulator.start': 'Iniciar simulación',
    'agentsimulator.repeat': 'Repetir simulación',
    'agentsimulator.reset': 'Reiniciar',
    'agentsimulator.empty_hint': '// pulsa «Iniciar simulación» para ver al agente trabajar…',
    'agentsimulator.objective': 'Busca el tiempo de Madrid y prepara un resumen.',
    'agentsimulator.step_analyzing': 'Analizando objetivo...',
    'agentsimulator.step_need_tool': 'Necesito información actualizada → buscaré una herramienta.',
    'agentsimulator.step_selecting': 'Seleccionando Weather Tool.',
    'agentsimulator.step_executing': "Ejecutando Tool: get_weather(city='Madrid')...",
    'agentsimulator.step_result': 'Resultado recibido: 24 °C, despejado.',
    'agentsimulator.step_preparing': 'Preparando respuesta con el LLM...',
    'agentsimulator.step_done': 'Objetivo completado.',
  },
  en: {
    'agentsimulator.title': 'Agent simulator',
    'agentsimulator.fixed_objective': 'Fixed objective:',
    'agentsimulator.loop_desc':
      'Press "Start simulation" to watch the reason → act → observe loop of an agent with tools.',
    'agentsimulator.start': 'Start simulation',
    'agentsimulator.repeat': 'Repeat simulation',
    'agentsimulator.reset': 'Reset',
    'agentsimulator.empty_hint': '// press "Start simulation" to watch the agent work…',
    'agentsimulator.objective': 'Look up the weather in Madrid and prepare a summary.',
    'agentsimulator.step_analyzing': 'Analyzing objective...',
    'agentsimulator.step_need_tool': 'I need up-to-date information → I will look for a tool.',
    'agentsimulator.step_selecting': 'Selecting Weather Tool.',
    'agentsimulator.step_executing': "Executing tool: get_weather(city='Madrid')...",
    'agentsimulator.step_result': 'Result received: 24 °C, clear skies.',
    'agentsimulator.step_preparing': 'Preparing response with the LLM...',
    'agentsimulator.step_done': 'Objective completed.',
  },
};
