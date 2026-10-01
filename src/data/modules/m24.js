const es = {
  id: 'm24',
  title: 'Sacar partido a GitHub',
  short: 'GitHub en la práctica',
  description: 'Diez formas reales de usar GitHub en tu día a día: historial, volver atrás, colaborar con agentes de IA, portfolio y el circuito completo hasta publicar en internet.',
  icon: 'FolderGit2',
  stage: 'GitHub',
  sections: [
    {
      kind: 'text',
      heading: 'GitHub es mucho más que un almacén de código',
      paragraphs: [
        'En el módulo 23 aprendiste qué es GitHub. Ahora viene lo interesante: **qué puedes hacer con él** en tu día a día como creador de aplicaciones de IA.',
        'Piensa en GitHub como tu **cuartel general**: ahí vive tu código, tu historial, tus ideas, tu portfolio y la puerta de salida hacia internet.',
      ],
    },
    {
      kind: 'checklist',
      heading: '10 formas de sacarle partido (una línea cada una)',
      items: [
        '**Guardar tus proyectos**: cada proyecto en su repositorio, a salvo en la nube aunque se rompa tu ordenador.',
        '**Historial de cambios**: cada commit explica qué cambió y por qué; el pasado de tu proyecto, documentado solo.',
        '**Volver atrás**: ¿algo se rompió? Vuelve al commit donde funcionaba, sin dramas.',
        '**Compartir código**: pasa un enlace y cualquiera puede ver (o copiar) tu proyecto.',
        '**Trabajar con agentes de programación**: los coding agents leen y modifican directamente tu repositorio.',
        '**Revisar cambios**: las pull requests muestran exactamente qué líneas cambiaron antes de aceptarlas.',
        '**Issues**: apunta errores, ideas y tareas pendientes en el tablón del proyecto.',
        '**README**: la portada de tu proyecto; un buen README es la diferencia entre que lo usen o lo ignoren.',
        '**Portfolio**: tu perfil de GitHub con proyectos reales vale más que cualquier currículum para demostrar lo que sabes hacer.',
        '**Desplegar proyectos**: conecta el repositorio a Vercel y cada push se publica automáticamente en internet.',
      ],
    },
    {
      kind: 'flow',
      heading: 'Del portátil a internet',
      caption: 'Este es el circuito completo que usarás una y otra vez.',
      direction: 'right',
      nodes: [
        { label: 'Proyecto local', desc: 'Tu código' },
        { label: 'Git', desc: 'Versiones (commits)' },
        { label: 'GitHub', desc: 'Repositorio en la nube' },
        { label: 'Vercel', desc: 'Publicado en la web' },
      ],
    },
    {
      kind: 'example',
      heading: 'Cómo un coding agent trabaja sobre tu repositorio',
      label: 'Ejemplo real',
      body: 'Le pides a un agente de IA: «añade un modo oscuro a mi web». El agente **clona tu repositorio**, lee el código, crea una **rama** nueva, modifica los archivos, hace **commit** de los cambios y abre una **pull request**. Tú revisas exactamente qué líneas cambió y, si te gusta, haces **merge**: el modo oscuro entra en la versión oficial. Todo el trabajo del agente queda registrado en tu historial de GitHub.',
      result: 'El repositorio es el terreno de juego compartido entre tú y los agentes de IA.',
    },
    {
      kind: 'text',
      heading: 'Tu perfil es tu escaparate',
      paragraphs: [
        'Cuando alguien quiera saber qué sabes hacer con IA, no le enseñes un certificado: **enséñale tu GitHub**. Un perfil con proyectos reales, READMEs cuidados y commits constantes dice más que mil palabras.',
        'Consejo práctico: fija (*pin*) tus 3-4 mejores proyectos en tu perfil y escribe un README para cada uno explicando **qué hace, cómo se usa y qué aprendiste**.',
      ],
    },
    {
      kind: 'callout',
      tone: 'tip',
      title: 'Empieza hoy',
      body: 'Crea hoy mismo tu primer repositorio con un proyecto pequeño y haz tu primer push. GitHub se aprende usándolo, no leyéndolo.',
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Pides a un agente de IA que añada una nueva función a tu app. El agente termina y quieres revisar su trabajo antes de aceptarlo.',
      question: '¿Qué mecanismo de GitHub usarás?',
      options: [
        'Un Issue, para apuntar la idea.',
        'Una pull request, para revisar los cambios línea a línea antes de fusionarlos.',
        'Un clone, para descargar el proyecto de nuevo.',
        'El README, para documentar la función.',
      ],
      correctIndex: 1,
      explanation: 'La pull request muestra exactamente qué líneas añadió o cambió el agente; tú las revisas y solo entonces haces merge a la rama principal.',
    },
  ],
  keyConcepts: [
    { term: 'Portfolio en GitHub', def: 'Tu perfil público con proyectos reales: la mejor carta de presentación de lo que sabes hacer.' },
    { term: 'Integración con Vercel', def: 'Conexión que publica automáticamente en internet cada cambio que subes a GitHub.' },
    { term: 'Revisión de cambios', def: 'Inspeccionar línea por línea lo que cambió en una pull request antes de aceptarlo.' },
    { term: 'Coding agent', def: 'Agente de IA que lee, modifica y propone cambios directamente sobre tu repositorio.' },
    { term: 'Pin (fijar)', def: 'Destacar tus mejores repositorios en la parte superior de tu perfil de GitHub.' },
  ],
  mistakes: [
    { wrong: 'GitHub solo sirve para programadores profesionales.', right: 'Sirve para cualquiera que cree con código, incluidos proyectos hechos con ayuda de IA: guardar, versionar y publicar.' },
    { wrong: 'Mi código en GitHub lo puede robar cualquiera.', right: 'Puedes crear repositorios privados (gratis) visibles solo para ti; hacerlos públicos es una decisión, no una obligación.' },
    { wrong: 'Los agentes de IA no necesitan GitHub.', right: 'Los coding agents trabajan sobre repositorios: clonan, crean ramas y abren pull requests como un colaborador más.' },
  ],
};
const en = {"description":"Ten real ways to use GitHub in your day to day: history, going back, collaborating with AI agents, portfolio, and the full circuit to publishing on the internet.","icon":"FolderGit2","id":"m24","keyConcepts":[{"def":"Your public profile with real projects: the best cover letter for what you can do.","term":"GitHub portfolio"},{"def":"Connection that automatically publishes every change you upload to GitHub on the internet.","term":"Vercel integration"},{"def":"Inspecting line by line what changed in a pull request before accepting it.","term":"Change review"},{"def":"AI agent that reads, modifies, and proposes changes directly on your repository.","term":"Coding agent"},{"def":"Highlighting your best repositories at the top of your GitHub profile.","term":"Pin"}],"mistakes":[{"right":"It works for anyone who builds with code, including projects made with AI help: saving, versioning, and publishing.","wrong":"GitHub is only for professional programmers."},{"right":"You can create private repositories (free) visible only to you; making them public is a decision, not an obligation.","wrong":"Anyone can steal my code on GitHub."},{"right":"Coding agents work on repositories: they clone, create branches, and open pull requests like any other collaborator.","wrong":"AI agents don't need GitHub."}],"sections":[{"heading":"GitHub is much more than a code warehouse","kind":"text","paragraphs":["In module 23 you learned what GitHub is. Now comes the interesting part: **what you can do with it** in your day to day as an AI application builder.","Think of GitHub as your **headquarters**: that's where your code, your history, your ideas, your portfolio, and the exit door to the internet all live."]},{"heading":"10 ways to get the most out of it (one line each)","items":["**Save your projects**: each project in its own repository, safe in the cloud even if your computer breaks.","**Change history**: each commit explains what changed and why; your project's past, documented by itself.","**Go back**: did something break? Return to the commit where it worked, no drama.","**Share code**: send a link and anyone can view (or copy) your project.","**Work with coding agents**: coding agents read and modify your repository directly.","**Review changes**: pull requests show exactly which lines changed before you accept them.","**Issues**: note bugs, ideas, and pending tasks on the project's board.","**README**: your project's cover; a good README is the difference between being used and being ignored.","**Portfolio**: your GitHub profile with real projects is worth more than any resume to prove what you can do.","**Deploy projects**: connect the repository to Vercel and every push publishes automatically on the internet."],"kind":"checklist"},{"caption":"This is the full circuit you'll use over and over.","direction":"right","heading":"From laptop to internet","kind":"flow","nodes":[{"desc":"Your code","label":"Local project"},{"desc":"Versions (commits)","label":"Git"},{"desc":"Repository in the cloud","label":"GitHub"},{"desc":"Published on the web","label":"Vercel"}]},{"body":"You ask an AI agent: \"add a dark mode to my website\". The agent **clones your repository**, reads the code, creates a new **branch**, modifies the files, **commits** the changes, and opens a **pull request**. You review exactly which lines it changed and, if you like it, you **merge**: dark mode enters the official version. All the agent's work stays recorded in your GitHub history.","heading":"How a coding agent works on your repository","kind":"example","label":"Real example","result":"The repository is the shared playground between you and AI agents."},{"heading":"Your profile is your shop window","kind":"text","paragraphs":["When someone wants to know what you can do with AI, don't show them a certificate: **show them your GitHub**. A profile with real projects, polished READMEs, and steady commits says more than a thousand words.","Practical tip: pin your 3–4 best projects on your profile and write a README for each explaining **what it does, how it's used, and what you learned**."]},{"body":"Create your first repository today with a small project and make your first push. GitHub is learned by using it, not by reading about it.","kind":"callout","title":"Start today","tone":"tip"},{"correctIndex":1,"explanation":"The pull request shows exactly which lines the agent added or changed; you review them and only then merge into the main branch.","heading":"Check your understanding","kind":"exercise","options":["An Issue, to note down the idea.","A pull request, to review the changes line by line before merging them.","A clone, to download the project again.","The README, to document the feature."],"prompt":"You ask an AI agent to add a new feature to your app. The agent finishes and you want to review its work before accepting it.","question":"Which GitHub mechanism will you use?"}],"short":"GitHub in practice","stage":"GitHub","title":"Getting the most out of GitHub"};
export default { es, en };
