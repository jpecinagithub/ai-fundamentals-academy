const es = {
  id: 'm26',
  title: 'Variables de entorno: los secretos, aparte',
  short: 'Variables de entorno',
  description: 'Qué son el .env y las variables de entorno, por qué las API keys nunca van en el código, y cómo se gestionan con GitHub (.gitignore) y Vercel (dashboard).',
  icon: 'KeyRound',
  stage: 'Vercel',
  sections: [
    {
      kind: 'text',
      heading: 'Tu código viaja; tus secretos no deberían',
      paragraphs: [
        'Toda app de IA necesita **datos de configuración**: a qué URL llamar (`API_URL`), con qué clave identificarse (`API_KEY`), qué base de datos usar... Estos valores **cambian según el entorno** (tu ordenador, el servidor de pruebas, producción) y muchos son **secretos**.',
        'Las **variables de entorno** son la solución estándar: valores que viven *fuera* del código, en el entorno donde se ejecuta la app, y que el código lee al arrancar.',
        'El archivo **`.env`** es donde los guardas en tu ordenador: un simple archivo de texto con parejas `NOMBRE=valor`, una por línea.',
      ],
    },
    {
      kind: 'example',
      heading: 'Un `.env` típico y cómo se lee',
      label: '.env (en tu ordenador, nunca en GitHub)',
      body: '`API_URL=https://api.openai.com/v1`\\n`API_KEY=sk-proj-abc123...`\\n`DATABASE_URL=postgres://usuario:contraseña@host:5432/miapp`\\n\\nEn el servidor (Node.js), el código los lee así: `const apiKey = process.env.API_KEY;` — el secreto **nunca aparece escrito en el código**, solo se lee del entorno en tiempo de ejecución.',
      result: 'El código es público y compartible; los secretos viven aparte, en el entorno.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'NUNCA pongas secretos en el código',
      body: 'Las API keys, contraseñas y tokens **no deben escribirse jamás en el código fuente**. ¿Por qué? Porque ese código acaba en un repositorio de GitHub (visible para otros) y en el **bundle del navegador** (cualquiera puede abrir las herramientas de desarrollo y leerlo). Una API key expuesta puede ser usada por cualquiera... y la factura la pagas tú. Los secretos van en variables de entorno, siempre.',
    },
    {
      kind: 'text',
      heading: 'GitHub: el `.gitignore` te protege',
      paragraphs: [
        'El archivo **`.gitignore`** le dice a Git qué archivos **no debe subir** a GitHub. La primera línea de casi todo proyecto serio es `.env`.',
        'Así, tu `.env` con los secretos se queda solo en tu ordenador, mientras el resto del código viaja tranquilo a GitHub. Para que tu equipo (o tu yo del futuro) sepa qué variables necesita el proyecto, se comparte un archivo **`.env.example`** con los nombres pero **sin los valores reales**.',
      ],
    },
    {
      kind: 'text',
      heading: 'Vercel: las variables viven en el dashboard',
      paragraphs: [
        'Pero si el `.env` no se sube a GitHub... ¿cómo conoce Vercel tus secretos al publicar la app? Respuesta: **los configuras en el dashboard del proyecto** en Vercel (Settings → Environment Variables).',
        'Vercel los inyecta en el entorno cuando construye y ejecuta tu app, igual que tu `.env` local. Así, el mismo código funciona en tu ordenador y en producción, cada uno con sus propios valores, y **los secretos nunca pasan por GitHub**.',
      ],
    },
    {
      kind: 'flow',
      heading: 'El viaje (seguro) de un secreto',
      caption: 'El secreto nunca viaja con el código.',
      direction: 'down',
      nodes: [
        { label: 'Tu ordenador (.env)', desc: 'El secreto vive aquí' },
        { label: '.gitignore', desc: 'Git ignora el .env' },
        { label: 'GitHub', desc: 'Solo código, sin secretos' },
        { label: 'Dashboard de Vercel', desc: 'Configuras las variables' },
        { label: 'App en producción', desc: 'Lee los secretos del entorno' },
      ],
    },
    {
      kind: 'checklist',
      heading: 'Buenas prácticas con variables de entorno',
      items: [
        'Nombra las variables en **MAYÚSCULAS_CON_GUIONES_BAJOS** (`API_KEY`, no `apikey`).',
        'Añade **`.env` al `.gitignore`** desde el primer día del proyecto.',
        'Comparte un **`.env.example`** con los nombres (sin valores) para documentar qué necesita el proyecto.',
        'Usa valores **distintos** para desarrollo y producción (claves de prueba vs. claves reales).',
        'Si una clave se expone por accidente, **revócala y genera una nueva** inmediatamente.',
      ],
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Tu app necesita una API key de OpenAI para funcionar tanto en tu ordenador como publicada en Vercel.',
      question: '¿Cuál es la forma correcta de gestionarla?',
      options: [
        'Escribirla directamente en el código, que es más rápido.',
        'Guardarla en el `.env` local (ignorado por Git) y configurarla también en las Environment Variables del dashboard de Vercel.',
        'Subir el `.env` a GitHub para que Vercel lo lea de ahí.',
        'Ponerla en el README para no olvidarla.',
      ],
      correctIndex: 1,
      explanation: 'El `.env` local (protegido por `.gitignore`) alimenta tu desarrollo y el dashboard de Vercel alimenta producción. La clave nunca viaja en el código ni en el repositorio.',
    },
  ],
  keyConcepts: [
    { term: 'Variable de entorno', def: 'Valor de configuración que vive fuera del código, en el entorno de ejecución, y que el programa lee al arrancar.' },
    { term: '.env', def: 'Archivo local donde se guardan las variables de entorno en desarrollo; nunca debe subirse a GitHub.' },
    { term: '.gitignore', def: 'Archivo que indica a Git qué archivos no debe subir al repositorio (el .env, el primero de la lista).' },
    { term: '.env.example', def: 'Plantilla con los nombres de las variables (sin valores reales) para documentar la configuración necesaria.' },
    { term: 'API_KEY', def: 'Clave secreta que identifica tu app ante un servicio externo; si se expone, cualquiera puede usarla (y gastar tu saldo).' },
    { term: 'process.env', def: 'Objeto en Node.js desde el que el código lee las variables de entorno en tiempo de ejecución.' },
  ],
  mistakes: [
    { wrong: 'Puedo poner la API key directamente en el código si el repo es privado.', right: 'El código también acaba en el bundle del navegador, visible para cualquiera con las herramientas de desarrollo. Los secretos nunca van en el código, sea el repo público o privado.' },
    { wrong: 'Subo el .env a GitHub para no perderlo.', right: 'El .env va en el .gitignore: si se sube, los secretos quedan expuestos en el historial del repositorio para siempre.' },
    { wrong: 'Las variables de entorno solo sirven para secretos.', right: 'Sirven para cualquier configuración que cambie por entorno: URLs, puertos, modos de depuración... los secretos son solo el caso más crítico.' },
  ],
};
const en = {"description":"What .env and environment variables are, why API keys never go in code, and how they're managed with GitHub (.gitignore) and Vercel (dashboard).","icon":"KeyRound","id":"m26","keyConcepts":[{"def":"Configuration value that lives outside the code, in the execution environment, and that the program reads at startup.","term":"Environment variable"},{"def":"Local file where environment variables are stored in development; it must never be uploaded to GitHub.","term":".env"},{"def":"File that tells Git which files not to upload to the repository (.env, first on the list).","term":".gitignore"},{"def":"Template with variable names (no real values) to document the required configuration.","term":".env.example"},{"def":"Secret key that identifies your app to an external service; if exposed, anyone can use it (and spend your balance).","term":"API_KEY"},{"def":"Object in Node.js from which code reads environment variables at runtime.","term":"process.env"}],"mistakes":[{"right":"Code also ends up in the browser bundle, visible to anyone with developer tools. Secrets never go in code, whether the repo is public or private.","wrong":"I can put the API key directly in the code if the repo is private."},{"right":".env goes in .gitignore: if uploaded, secrets stay exposed in the repository history forever.","wrong":"I'll upload .env to GitHub so I don't lose it."},{"right":"They work for any configuration that changes per environment: URLs, ports, debug modes... secrets are just the most critical case.","wrong":"Environment variables are only for secrets."}],"sections":[{"heading":"Your code travels; your secrets shouldn't","kind":"text","paragraphs":["Every AI app needs **configuration data**: which URL to call (`API_URL`), which key to identify itself with (`API_KEY`), which database to use... These values **change per environment** (your computer, the test server, production) and many are **secrets**.","**Environment variables** are the standard solution: values that live *outside* the code, in the environment where the app runs, and that the code reads at startup.","The **`.env`** file is where you store them on your computer: a simple text file with `NAME=value` pairs, one per line."]},{"body":"`API_URL=https://api.openai.com/v1`\\n`API_KEY=sk-proj-abc123...`\\n`DATABASE_URL=postgres://user:password@host:5432/myapp`\\n\\nOn the server (Node.js), the code reads them like this: `const apiKey = process.env.API_KEY;` — the secret **never appears written in the code**, it's only read from the environment at runtime.","heading":"A typical `.env` and how it's read","kind":"example","label":".env (on your computer, never on GitHub)","result":"The code is public and shareable; secrets live apart, in the environment."},{"body":"API keys, passwords, and tokens must **never be written in source code**. Why? Because that code ends up in a GitHub repository (visible to others) and in the **browser bundle** (anyone can open developer tools and read it). An exposed API key can be used by anyone... and you pay the bill. Secrets go in environment variables, always.","kind":"callout","title":"NEVER put secrets in code","tone":"warn"},{"heading":"GitHub: `.gitignore` protects you","kind":"text","paragraphs":["The **`.gitignore`** file tells Git which files it **must not upload** to GitHub. The first line of almost every serious project is `.env`.","That way, your `.env` with the secrets stays only on your computer, while the rest of the code travels safely to GitHub. So your team (or your future self) knows which variables the project needs, you share a **`.env.example`** file with the names but **without the real values**."]},{"heading":"Vercel: variables live in the dashboard","kind":"text","paragraphs":["But if `.env` isn't uploaded to GitHub... how does Vercel know your secrets when publishing the app? Answer: **you configure them in the project's dashboard** on Vercel (Settings → Environment Variables).","Vercel injects them into the environment when it builds and runs your app, just like your local `.env`. That way, the same code works on your computer and in production, each with its own values, and **secrets never pass through GitHub**."]},{"caption":"The secret never travels with the code.","direction":"down","heading":"The (safe) journey of a secret","kind":"flow","nodes":[{"desc":"The secret lives here","label":"Your computer (.env)"},{"desc":"Git ignores the .env","label":".gitignore"},{"desc":"Code only, no secrets","label":"GitHub"},{"desc":"You configure the variables","label":"Vercel dashboard"},{"desc":"Reads secrets from the environment","label":"Production app"}]},{"heading":"Good practices with environment variables","items":["Name variables in **UPPER_CASE_WITH_UNDERSCORES** (`API_KEY`, not `apikey`).","Add **`.env` to `.gitignore`** from day one of the project.","Share a **`.env.example`** with the names (no values) to document what the project needs.","Use **different** values for development and production (test keys vs. real keys).","If a key is accidentally exposed, **revoke it and generate a new one** immediately."],"kind":"checklist"},{"correctIndex":1,"explanation":"The local `.env` (protected by `.gitignore`) feeds your development and the Vercel dashboard feeds production. The key never travels in the code or the repository.","heading":"Check your understanding","kind":"exercise","options":["Write it directly in the code, which is faster.","Store it in the local `.env` (ignored by Git) and also configure it in the Environment Variables of the Vercel dashboard.","Upload the `.env` to GitHub so Vercel can read it from there.","Put it in the README so I don't forget it."],"prompt":"Your app needs an OpenAI API key to work both on your computer and published on Vercel.","question":"What's the correct way to manage it?"}],"short":"Environment variables","stage":"Vercel","title":"Environment variables: secrets stay apart"};
export default { es, en };
