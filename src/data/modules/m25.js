const es = {
  id: 'm25',
  title: 'Vercel: tu app en internet',
  short: 'Vercel',
  description: 'Qué es Vercel, el vocabulario del despliegue (hosting, build, preview vs production) y qué ocurre exactamente cuando haces git push con Vercel conectado.',
  icon: 'Rocket',
  stage: 'Vercel',
  sections: [
    {
      kind: 'text',
      heading: 'Qué es Vercel: tu web en internet en minutos',
      paragraphs: [
        '**Vercel** es una plataforma de **hosting** (alojamiento web) especializada en aplicaciones frontend modernas como las que construirás con React.',
        'La idea es radicalmente simple: **tú subes código a GitHub, Vercel lo convierte en una web pública**. Sin configurar servidores, sin pelearte con sistemas operativos, sin manuales de 200 páginas.',
        'Fue creada por el equipo detrás de Next.js y es la forma estándar de publicar proyectos React y Vite.',
      ],
    },
    {
      kind: 'table',
      heading: 'El vocabulario del despliegue',
      headers: ['Término', 'Qué significa'],
      rows: [
        ['Hosting', 'Alojar tu web en servidores de internet para que cualquiera pueda visitarla.'],
        ['Deployment', 'Cada publicación de tu código en internet; cada push puede generar uno.'],
        ['Production deployment', 'La versión oficial y estable: lo que ve el público en tu dominio.'],
        ['Preview deployment', 'Una copia temporal de cada cambio (p. ej., de una pull request) para probarlo antes de publicar.'],
        ['Dominio', 'La dirección de tu web (tudominio.com); Vercel te da uno gratis (tu-proyecto.vercel.app).'],
        ['Integración con GitHub', 'La conexión que hace que cada push despliegue automáticamente.'],
      ],
    },
    {
      kind: 'flow',
      heading: 'De tu código a la web',
      caption: 'Todo automático: tú solo haces push.',
      direction: 'right',
      nodes: [
        { label: 'CÓDIGO', desc: 'Tu proyecto React' },
        { label: 'GITHUB', desc: 'Push al repositorio' },
        { label: 'VERCEL', desc: 'Detecta el cambio' },
        { label: 'BUILD', desc: 'Construye la app' },
        { label: 'DEPLOY', desc: 'La publica' },
        { label: 'WEB', desc: 'Visible en internet' },
      ],
    },
    {
      kind: 'example',
      heading: 'Qué ocurre cuando haces `git push` (paso a paso)',
      label: 'Con Vercel conectado',
      body: '1. Haces **push** de tus cambios a GitHub. 2. **Vercel lo detecta** al instante gracias a la integración. 3. Vercel descarga tu código y ejecuta el **build** (convierte tu React en archivos web optimizados). 4. Si el build funciona, Vercel hace el **deploy**: sustituye la versión anterior por la nueva. 5. Tu web ya muestra los cambios, normalmente en **menos de un minuto**. Si algo falla en el build, la versión anterior sigue online: tu web nunca se rompe.',
      result: 'Push → build → deploy automático. Publicar una web se convierte en un gesto tan simple como guardar.',
    },
    {
      kind: 'compare',
      heading: 'Preview vs. Production',
      caption: 'Dos tipos de deployment para dos momentos distintos.',
      left: {
        title: 'Preview deployment',
        tone: 'a',
        items: [
          'Copia temporal de una rama o pull request',
          'URL única para compartir y probar',
          'Perfecta para revisar antes de publicar',
          'Desaparece cuando se fusiona el cambio',
        ],
      },
      right: {
        title: 'Production deployment',
        tone: 'b',
        items: [
          'La versión oficial en tu dominio',
          'Lo que ve todo el mundo',
          'Siempre la última versión estable aceptada',
          'Si un build falla, la anterior sigue online',
        ],
      },
    },
    {
      kind: 'text',
      heading: 'GitHub ≠ Vercel: no los confundas',
      paragraphs: [
        '**GitHub guarda tu código; Vercel publica tu web.** Son dos servicios distintos que trabajan en equipo: GitHub es el almacén y el historial; Vercel es la imprenta que convierte ese código en una página visitable.',
        'Puedes tener un repositorio en GitHub sin publicarlo nunca en Vercel. Pero el flujo natural es **GitHub → Vercel**, y es el que usarás en este curso.',
      ],
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Conectas tu repositorio de GitHub a Vercel y haces push de un cambio en el diseño.',
      question: '¿Qué ocurre?',
      options: [
        'Nada: tienes que copiar los archivos a mano al servidor.',
        'Vercel detecta el push, construye la app (build) y la publica automáticamente como nuevo deployment.',
        'GitHub publica la web por sí solo, sin necesidad de Vercel.',
        'Tienes que reinstalar Vercel en tu ordenador.',
      ],
      correctIndex: 1,
      explanation: 'La integración GitHub → Vercel automatiza todo el pipeline: detecta el push, ejecuta el build y despliega. Tu web se actualiza en menos de un minuto sin que toques nada más.',
    },
  ],
  keyConcepts: [
    { term: 'Vercel', def: 'Plataforma de hosting especializada en frontend: convierte tu código en una web pública automáticamente.' },
    { term: 'Hosting', def: 'Servicio que aloja tu web en servidores de internet para que cualquiera pueda visitarla.' },
    { term: 'Deployment', def: 'Cada publicación de tu código como web funcional.' },
    { term: 'Production deployment', def: 'La versión oficial y pública de tu web.' },
    { term: 'Preview deployment', def: 'Copia temporal de un cambio para probarlo antes de publicarlo.' },
    { term: 'Build', def: 'Proceso que convierte tu código fuente (React) en archivos web optimizados listos para servirse.' },
    { term: 'Dominio', def: 'La dirección pública de tu web (p. ej., mi-app.vercel.app).' },
  ],
  mistakes: [
    { wrong: 'Vercel y GitHub hacen lo mismo.', right: 'GitHub guarda y versiona tu código; Vercel lo convierte en una web pública. Distintos servicios, equipo perfecto.' },
    { wrong: 'Para publicar una web necesito configurar un servidor.', right: 'Con Vercel no tocas ningún servidor: conectas el repositorio y cada push se publica solo.' },
    { wrong: 'Si el build falla, mi web se cae.', right: 'Vercel mantiene online la última versión que funcionó hasta que el nuevo build tenga éxito.' },
  ],
};
const en = {"description":"What Vercel is, the deployment vocabulary (hosting, build, preview vs production), and exactly what happens when you git push with Vercel connected.","icon":"Rocket","id":"m25","keyConcepts":[{"def":"Hosting platform specialized in frontend: it turns your code into a public website automatically.","term":"Vercel"},{"def":"Service that hosts your website on internet servers so anyone can visit it.","term":"Hosting"},{"def":"Each publication of your code as a working website.","term":"Deployment"},{"def":"The official, public version of your website.","term":"Production deployment"},{"def":"Temporary copy of a change to test it before publishing.","term":"Preview deployment"},{"def":"Process that turns your source code (React) into optimized web files ready to serve.","term":"Build"},{"def":"The public address of your website (e.g., my-app.vercel.app).","term":"Domain"}],"mistakes":[{"right":"GitHub saves and versions your code; Vercel turns it into a public website. Different services, perfect team.","wrong":"Vercel and GitHub do the same thing."},{"right":"With Vercel you don't touch any server: you connect the repository and every push publishes itself.","wrong":"To publish a website I need to configure a server."},{"right":"Vercel keeps the last working version online until the new build succeeds.","wrong":"If the build fails, my website goes down."}],"sections":[{"heading":"What Vercel is: your website on the internet in minutes","kind":"text","paragraphs":["**Vercel** is a **hosting** (web hosting) platform specialized in modern frontend applications like the ones you'll build with React.","The idea is radically simple: **you upload code to GitHub, Vercel turns it into a public website**. No configuring servers, no fighting operating systems, no 200-page manuals.","It was created by the team behind Next.js and is the standard way to publish React and Vite projects."]},{"headers":["Term","What it means"],"heading":"The deployment vocabulary","kind":"table","rows":[["Hosting","Hosting your website on internet servers so anyone can visit it."],["Deployment","Each publication of your code on the internet; each push can generate one."],["Production deployment","The official, stable version: what the public sees on your domain."],["Preview deployment","A temporary copy of each change (e.g., from a pull request) to test it before publishing."],["Domain","Your website's address (yourdomain.com); Vercel gives you one for free (your-project.vercel.app)."],["GitHub integration","The connection that makes every push deploy automatically."]]},{"caption":"Fully automatic: you just push.","direction":"right","heading":"From your code to the web","kind":"flow","nodes":[{"desc":"Your React project","label":"CODE"},{"desc":"Push to the repository","label":"GITHUB"},{"desc":"Detects the change","label":"VERCEL"},{"desc":"Builds the app","label":"BUILD"},{"desc":"Publishes it","label":"DEPLOY"},{"desc":"Visible on the internet","label":"WEB"}]},{"body":"1. You **push** your changes to GitHub. 2. **Vercel detects it** instantly thanks to the integration. 3. Vercel downloads your code and runs the **build** (it turns your React into optimized web files). 4. If the build works, Vercel **deploys**: it replaces the old version with the new one. 5. Your website already shows the changes, usually in **under a minute**. If something fails in the build, the previous version stays online: your website never breaks.","heading":"What happens when you `git push` (step by step)","kind":"example","label":"With Vercel connected","result":"Push → build → automatic deploy. Publishing a website becomes a gesture as simple as saving."},{"caption":"Two deployment types for two different moments.","heading":"Preview vs. Production","kind":"compare","left":{"items":["Temporary copy of a branch or pull request","Unique URL to share and test","Perfect for reviewing before publishing","Disappears when the change is merged"],"title":"Preview deployment","tone":"a"},"right":{"items":["The official version on your domain","What everyone sees","Always the last accepted stable version","If a build fails, the previous one stays online"],"title":"Production deployment","tone":"b"}},{"heading":"GitHub ≠ Vercel: don't confuse them","kind":"text","paragraphs":["**GitHub stores your code; Vercel publishes your website.** They are two different services that work as a team: GitHub is the warehouse and the history; Vercel is the printing press that turns that code into a visitable page.","You can have a GitHub repository without ever publishing it on Vercel. But the natural flow is **GitHub → Vercel**, and it's the one you'll use in this course."]},{"correctIndex":1,"explanation":"The GitHub → Vercel integration automates the whole pipeline: it detects the push, runs the build, and deploys. Your website updates in under a minute without you touching anything else.","heading":"Check your understanding","kind":"exercise","options":["Nothing: you have to copy the files to the server by hand.","Vercel detects the push, builds the app (build), and automatically publishes it as a new deployment.","GitHub publishes the website by itself, with no need for Vercel.","You have to reinstall Vercel on your computer."],"prompt":"You connect your GitHub repository to Vercel and push a design change.","question":"What happens?"}],"short":"Vercel","stage":"Vercel","title":"Vercel: your app on the internet"};
export default { es, en };
