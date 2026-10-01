const es = {
  id: 'm14',
  title: 'Frontend y backend',
  short: 'Front & Back',
  description: 'Toda aplicación moderna tiene dos mitades: el frontend, lo que ves y tocas en el navegador, y el backend, la lógica que vive en servidores. Aprende qué hace cada uno, cómo se comunican y el vocabulario esencial.',
  icon: 'Layers',
  stage: 'Arquitectura',
  sections: [
    {
      kind: 'text',
      heading: 'Dos mitades de toda aplicación',
      paragraphs: [
        'Cuando usas una tienda online, ves botones, fotos y precios. Eso es el **frontend**: todo lo que se ejecuta en tu navegador y con lo que interactúas directamente. Pero cuando pulsas "Comprar", algo tiene que comprobar el stock, calcular el total, cobrar tu tarjeta y guardar el pedido. Eso es el **backend**: los servicios que viven en servidores y que nunca ves.',
        'La regla de oro: el **frontend es lo que se ejecuta en el navegador** (React, HTML, CSS, JavaScript) y el **backend son servicios que se ejecutan en servidores** (Node.js, Python, Java, .NET). Ninguno puede hacer el trabajo del otro: el frontend no puede guardar datos de forma segura y el backend no puede dibujar un botón en tu pantalla.',
        'Entender esta división es esencial para trabajar con IA: cuando le pidas a un coding agent que modifique "la parte visual", está tocando el frontend; cuando le pidas "la lógica de usuarios", está tocando el backend.',
      ],
    },
    {
      kind: 'flow',
      heading: 'El viaje de un clic',
      caption: 'Sigue el recorrido completo desde que el usuario hace clic hasta que ve el resultado.',
      direction: 'right',
      nodes: [
        { label: 'USUARIO', desc: 'Hace clic en "Ver productos".' },
        { label: 'NAVEGADOR', desc: 'Ejecuta el frontend: código React/JavaScript en tu ordenador.' },
        { label: 'FRONTEND', desc: 'Pide los datos al backend con una petición HTTP: `GET /products`.' },
        { label: 'BACKEND', desc: 'Recibe la petición, aplica la lógica y consulta la base de datos (Node.js, Python…).' },
        { label: 'BASE DE DATOS', desc: 'Devuelve la lista de productos al backend.' },
        { label: 'RESPUESTA', desc: 'El backend envía los datos (JSON) y el frontend los dibuja en pantalla.' },
      ],
      highlight: [2, 3],
    },
    {
      kind: 'compare',
      heading: 'Frontend vs. backend, cara a cara',
      left: {
        title: 'Frontend',
        tone: 'a',
        items: [
          'Se ejecuta en el navegador del usuario.',
          'Lo que ves y tocas: pantallas, botones, formularios.',
          'Tecnologías: HTML, CSS, JavaScript, React.',
          'Pide datos al backend; nunca habla con la base de datos.',
          'Su código es visible para cualquiera (botón derecho → ver código).',
        ],
      },
      right: {
        title: 'Backend',
        tone: 'b',
        items: [
          'Se ejecuta en servidores remotos.',
          'Lo invisible: lógica, cálculos, seguridad, permisos.',
          'Tecnologías: Node.js, Python, Java, .NET.',
          'Habla con la base de datos y decide qué datos entregar.',
          'Su código está protegido en el servidor; nadie lo ve.',
        ],
      },
    },
    {
      kind: 'table',
      heading: 'Tecnologías típicas de cada lado',
      headers: ['Lado', 'Lenguajes y frameworks', 'Para qué sirven'],
      rows: [
        ['Frontend', 'HTML, CSS, JavaScript, React, Vue, Angular', 'Estructura, estilo e interactividad de lo que ves en el navegador.'],
        ['Backend', 'Node.js, Python (Django/Flask), Java (Spring), .NET', 'Lógica de negocio, APIs, autenticación y conexión con datos.'],
        ['Base de datos', 'PostgreSQL, MySQL, MongoDB', 'Guardar los datos de forma persistente y consultarlos.'],
      ],
    },
    {
      kind: 'text',
      heading: 'El vocabulario: cliente, servidor, request, response, endpoint',
      paragraphs: [
        'Cinco palabras que verás en todas partes. El **cliente** es quien pide (normalmente tu navegador o tu app). El **servidor** es quien responde (el backend). La **request** (petición) es el mensaje que viaja del cliente al servidor: "dame la lista de productos". La **response** (respuesta) es el mensaje de vuelta, normalmente con los datos pedidos.',
        'El **endpoint** es la "dirección" concreta a la que el cliente llama dentro del servidor, como `GET /products` o `POST /login`. Piensa en el backend como un edificio y en los endpoints como las ventanillas: cada una atiende un tipo de petición distinto.',
        'Con estas cinco palabras ya puedes leer la documentación de casi cualquier API y entender qué está pasando cuando una app "carga datos".',
      ],
    },
    {
      kind: 'analogy',
      heading: 'El restaurante',
      body: 'El frontend es el **comedor**: las mesas, la carta, los camareros que ves. El backend es la **cocina**: no la ves, pero ahí se decide qué se puede servir, se prepara cada plato y se controla el almacén. Tú (el cliente) pides al camarero (request a un endpoint); la cocina prepara el plato (lógica + base de datos) y el camarero te lo trae a la mesa (response que el frontend muestra). Nunca entras tú mismo a la cocina a por la comida: igual que el frontend nunca accede directamente a la base de datos.',
    },
    {
      kind: 'exercise',
      heading: 'Comprueba que lo has entendido',
      prompt: 'Una tienda online muestra mal el precio de un producto: en pantalla aparece 19,99 € pero al pagar se cobran 29,99 €.',
      question: '¿Dónde está el problema, en el frontend o en el backend?',
      options: [
        'En el frontend, porque es lo que muestra el precio.',
        'En el backend, porque es quien calcula y valida el precio real que se cobra.',
        'En la base de datos, porque los precios solo viven ahí.',
        'En el navegador del usuario, porque muestra mal los números.',
      ],
      correctIndex: 1,
      explanation: 'El precio que se cobra lo decide el backend (lógica + datos). Que el frontend muestre 19,99 € puede ser un dato desactualizado en pantalla, pero lo grave —cobrar 29,99 €— lo determina el servidor. Por eso la lógica crítica (precios, pagos, permisos) vive siempre en el backend, nunca en el frontend.',
    },
  ],
  keyConcepts: [
    { term: 'Frontend', def: 'Parte de la aplicación que se ejecuta en el navegador: lo que el usuario ve y con lo que interactúa (HTML, CSS, JavaScript, React).' },
    { term: 'Backend', def: 'Servicios que se ejecutan en servidores: lógica de negocio, seguridad y conexión con la base de datos (Node.js, Python, Java, .NET).' },
    { term: 'Cliente', def: 'Quien inicia la petición de datos o servicios; normalmente el navegador o la app del usuario.' },
    { term: 'Servidor', def: 'Equipo remoto que recibe peticiones, ejecuta la lógica del backend y devuelve respuestas.' },
    { term: 'Request', def: 'Petición: mensaje que el cliente envía al servidor pidiendo datos o acciones.' },
    { term: 'Response', def: 'Respuesta: mensaje que el servidor devuelve al cliente, normalmente con los datos solicitados.' },
    { term: 'Endpoint', def: 'Dirección concreta dentro del backend que atiende un tipo de petición, como `GET /products`.' },
  ],
  mistakes: [
    { wrong: 'Frontend es diseño y backend es programación.', right: 'Ambos son programación: el frontend es código que se ejecuta en el navegador; el backend, código que se ejecuta en servidores.' },
    { wrong: 'El frontend habla directamente con la base de datos.', right: 'Nunca: el frontend pide datos al backend por HTTP y es el backend quien habla con la base de datos.' },
    { wrong: 'Backend y base de datos son lo mismo.', right: 'La base de datos guarda datos; el backend es la lógica que decide qué datos entregar, a quién y cómo.' },
    { wrong: 'Si algo se ve mal en pantalla, el fallo es del backend.', right: 'Lo visual es responsabilidad del frontend; el backend solo entrega los datos. Hay que diagnosticar en qué mitad está el problema.' },
  ],
};

const en = {
  id: 'm14',
  title: 'Frontend and backend',
  short: 'Front & Back',
  description: 'Every modern application has two halves: the frontend, what you see and touch in the browser, and the backend, the logic that lives on servers. Learn what each one does, how they communicate and the essential vocabulary.',
  icon: 'Layers',
  stage: 'Architecture',
  sections: [
    {
      kind: 'text',
      heading: 'Two halves of every application',
      paragraphs: [
        'When you use an online store, you see buttons, photos and prices. That is the **frontend**: everything that runs in your browser and that you interact with directly. But when you press “Buy”, something has to check the stock, calculate the total, charge your card and save the order. That is the **backend**: the services that live on servers and that you never see.',
        'The golden rule: the **frontend is what runs in the browser** (React, HTML, CSS, JavaScript) and the **backend is services that run on servers** (Node.js, Python, Java, .NET). Neither can do the other’s job: the frontend cannot store data securely and the backend cannot draw a button on your screen.',
        'Understanding this division is essential for working with AI: when you ask a coding agent to modify “the visual part”, it is touching the frontend; when you ask for “the user logic”, it is touching the backend.',
      ],
    },
    {
      kind: 'flow',
      heading: 'The journey of a click',
      caption: 'Follow the complete journey from the moment the user clicks to the moment they see the result.',
      direction: 'right',
      nodes: [
        { label: 'USER', desc: 'Clicks “View products”.' },
        { label: 'BROWSER', desc: 'Runs the frontend: React/JavaScript code on your computer.' },
        { label: 'FRONTEND', desc: 'Asks the backend for data with an HTTP request: `GET /products`.' },
        { label: 'BACKEND', desc: 'Receives the request, applies the logic and queries the database (Node.js, Python…).' },
        { label: 'DATABASE', desc: 'Returns the product list to the backend.' },
        { label: 'RESPONSE', desc: 'The backend sends the data (JSON) and the frontend draws it on screen.' },
      ],
      highlight: [2, 3],
    },
    {
      kind: 'compare',
      heading: 'Frontend vs. backend, face to face',
      left: {
        title: 'Frontend',
        tone: 'a',
        items: [
          'It runs in the user’s browser.',
          'What you see and touch: screens, buttons, forms.',
          'Technologies: HTML, CSS, JavaScript, React.',
          'It asks the backend for data; it never talks to the database.',
          'Its code is visible to anyone (right-click → view source).',
        ],
      },
      right: {
        title: 'Backend',
        tone: 'b',
        items: [
          'It runs on remote servers.',
          'The invisible part: logic, calculations, security, permissions.',
          'Technologies: Node.js, Python, Java, .NET.',
          'It talks to the database and decides which data to deliver.',
          'Its code is protected on the server; nobody sees it.',
        ],
      },
    },
    {
      kind: 'table',
      heading: 'Typical technologies on each side',
      headers: ['Side', 'Languages and frameworks', 'What they are for'],
      rows: [
        ['Frontend', 'HTML, CSS, JavaScript, React, Vue, Angular', 'Structure, style and interactivity of what you see in the browser.'],
        ['Backend', 'Node.js, Python (Django/Flask), Java (Spring), .NET', 'Business logic, APIs, authentication and data connection.'],
        ['Database', 'PostgreSQL, MySQL, MongoDB', 'Storing data persistently and querying it.'],
      ],
    },
    {
      kind: 'text',
      heading: 'The vocabulary: client, server, request, response, endpoint',
      paragraphs: [
        'Five words you will see everywhere. The **client** is the one asking (normally your browser or your app). The **server** is the one answering (the backend). The **request** is the message traveling from client to server: “give me the product list”. The **response** is the message back, normally with the requested data.',
        'The **endpoint** is the specific “address” the client calls inside the server, like `GET /products` or `POST /login`. Think of the backend as a building and the endpoints as the service windows: each one handles a different type of request.',
        'With these five words you can already read the documentation of almost any API and understand what is happening when an app “loads data”.',
      ],
    },
    {
      kind: 'analogy',
      heading: 'The restaurant',
      body: 'The frontend is the **dining room**: the tables, the menu, the waiters you see. The backend is the **kitchen**: you do not see it, but that is where they decide what can be served, each dish is prepared and the stockroom is controlled. You (the client) ask the waiter (request to an endpoint); the kitchen prepares the dish (logic + database) and the waiter brings it to your table (response the frontend displays). You never walk into the kitchen to get the food yourself: just like the frontend never accesses the database directly.',
    },
    {
      kind: 'exercise',
      heading: 'Check your understanding',
      prompt: 'An online store shows the wrong price for a product: the screen shows €19.99 but checkout charges €29.99.',
      question: 'Where is the problem, in the frontend or the backend?',
      options: [
        'In the frontend, because it is what displays the price.',
        'In the backend, because it is what calculates and validates the real price being charged.',
        'In the database, because prices only live there.',
        'In the user’s browser, because it displays numbers wrong.',
      ],
      correctIndex: 1,
      explanation: 'The price being charged is decided by the backend (logic + data). The frontend showing €19.99 may be stale data on screen, but the serious part — charging €29.99 — is determined by the server. That is why critical logic (prices, payments, permissions) always lives in the backend, never in the frontend.',
    },
  ],
  keyConcepts: [
    { term: 'Frontend', def: 'Part of the application that runs in the browser: what the user sees and interacts with (HTML, CSS, JavaScript, React).' },
    { term: 'Backend', def: 'Services that run on servers: business logic, security and database connection (Node.js, Python, Java, .NET).' },
    { term: 'Client', def: 'Who initiates the request for data or services; normally the user’s browser or app.' },
    { term: 'Server', def: 'Remote machine that receives requests, runs the backend logic and returns responses.' },
    { term: 'Request', def: 'Message the client sends to the server asking for data or actions.' },
    { term: 'Response', def: 'Message the server returns to the client, normally with the requested data.' },
    { term: 'Endpoint', def: 'Specific address inside the backend that handles one type of request, like `GET /products`.' },
  ],
  mistakes: [
    { wrong: 'Frontend is design and backend is programming.', right: 'Both are programming: the frontend is code that runs in the browser; the backend, code that runs on servers.' },
    { wrong: 'The frontend talks directly to the database.', right: 'Never: the frontend asks the backend for data over HTTP, and the backend is what talks to the database.' },
    { wrong: 'Backend and database are the same thing.', right: 'The database stores data; the backend is the logic that decides which data to deliver, to whom and how.' },
    { wrong: 'If something looks wrong on screen, the bug is in the backend.', right: 'Visuals are the frontend’s responsibility; the backend only delivers the data. You have to diagnose which half holds the problem.' },
  ],
};

export default { es, en };
