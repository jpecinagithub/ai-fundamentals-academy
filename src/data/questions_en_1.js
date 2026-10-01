export default [
  // ==================== MODULE 1: AI / ML / DL, generative AI ====================
  {
    id: 'm1-q01',
    moduleId: 'm1',
    question: 'What is generative AI?',
    options: [
      'A type of AI that classifies images into fixed categories',
      'A type of AI that generates new content from learned patterns',
      'A program that only executes hand-written rules',
      'A programming language for robots'
    ],
    correctIndex: 1,
    explanation: 'Generative AI does not classify or follow fixed rules: it learns patterns from large amounts of data and creates new content (text, images, code) from them.',
    difficulty: 'basic',
    concept: 'Generative AI'
  },
  {
    id: 'm1-q02',
    moduleId: 'm1',
    question: 'What distinguishes traditional AI from generative AI?',
    options: [
      'Traditional AI is more modern than generative AI',
      'They are synonyms: there is no real difference',
      'Traditional AI predicts or classifies based on learned patterns; generative AI creates new content',
      'Generative AI does not need data to work'
    ],
    correctIndex: 2,
    explanation: 'Traditional AI solves closed tasks (classifying spam, predicting sales), while generative AI produces new content. The difference lies in the type of output, not in modernity.',
    difficulty: 'basic',
    concept: 'Traditional vs generative AI'
  },
  {
    id: 'm1-q03',
    moduleId: 'm1',
    question: 'What does it mean for a model to be "multimodal"?',
    options: [
      'That it can process several types of data: text, image, audio, etc.',
      'That it works on several devices at once',
      'That it speaks several languages at the same time',
      'That it trains faster than the others'
    ],
    correctIndex: 0,
    explanation: 'Multimodal refers to the input and output modalities: a single model understands and combines text, images, audio or video.',
    difficulty: 'basic',
    concept: 'Multimodal model'
  },
  {
    id: 'm1-q04',
    moduleId: 'm1',
    question: 'What are foundation models?',
    options: [
      'Small models trained for a single specific task',
      'Models that only serve for chatting',
      'Models with no adjustable parameters',
      'Large models trained on massive data that serve as a base for many applications'
    ],
    correctIndex: 3,
    explanation: 'Foundation models learn general representations of language and the world during massive training, and are then adapted to specific tasks. They are the "foundation" on which many apps are built.',
    difficulty: 'intermediate',
    concept: 'Foundation models'
  },
  {
    id: 'm1-q05',
    moduleId: 'm1',
    question: 'How do AI, machine learning and deep learning relate to each other?',
    options: [
      'They are three completely independent technologies',
      'Deep learning is a subset of machine learning, which in turn is a subset of AI',
      'Machine learning is broader than AI',
      'Deep learning does not use data to learn'
    ],
    correctIndex: 1,
    explanation: 'It is a hierarchy of sets: every deep learning technique is machine learning, and all machine learning is AI, but not the other way around. AI also includes rule-based systems that do not learn.',
    difficulty: 'intermediate',
    concept: 'AI / ML / DL'
  },
  {
    id: 'm1-q06',
    moduleId: 'm1',
    question: 'A company wants to automatically classify invoices as "paid" or "pending", without generating any new text. Which type of AI fits best?',
    options: [
      'A generative AI chatbot',
      'A video multimodal model',
      'None: it is impossible to automate',
      'Traditional AI classification (classic machine learning)'
    ],
    correctIndex: 3,
    explanation: 'This is a closed classification task between fixed categories: the classic use case for traditional AI. Using generative AI would be more expensive and unnecessary.',
    difficulty: 'intermediate',
    concept: 'Traditional AI: classification'
  },
  {
    id: 'm1-q07',
    moduleId: 'm1',
    question: 'Why can an LLM write a poem but a traditional spam filter cannot?',
    options: [
      'The LLM is generative: it models language and produces new text; the filter only classifies into fixed categories',
      'Because the LLM is more expensive to use',
      'Because the spam filter does not use data',
      'Because a poem needs no training data'
    ],
    correctIndex: 0,
    explanation: 'The spam filter decides between "spam" or "not spam" (classification); the LLM generates new sequences of text. They are different architectures and objectives.',
    difficulty: 'intermediate',
    concept: 'Generative vs classifier'
  },
  {
    id: 'm1-q08',
    moduleId: 'm1',
    question: 'Why do foundation models allow building many different applications with little additional training?',
    options: [
      'Because they memorize the entire Internet word by word',
      'Because they are always free and open source',
      'Because they need no data to adapt',
      'Because they learned general representations of language and the world that adapt to specific tasks'
    ],
    correctIndex: 3,
    explanation: 'During their massive training they capture grammar, facts, reasoning and general patterns. Adapting them to a new task requires few examples because they already "understand" the basics.',
    difficulty: 'advanced',
    concept: 'Knowledge transfer'
  },
  {
    id: 'm1-q09',
    moduleId: 'm1',
    question: 'A model accepts an image and answers questions about it in text. What type of model is it?',
    options: [
      'A unimodal text model',
      'An image database',
      'A multimodal model, because it combines vision and language',
      'A traditional classification model'
    ],
    correctIndex: 2,
    explanation: 'It processes two modalities (image input, text output) within the same model: that is exactly multimodality in practice.',
    difficulty: 'advanced',
    concept: 'Multimodality in practice'
  },
  // ==================== MODULE 2: model, training, inference ====================
  {
    id: 'm2-q01',
    moduleId: 'm2',
    question: 'What is an AI model?',
    options: [
      'A database with all the answers stored',
      'A program that executes rules written by programmers',
      'A program with parameters learned during training that transforms inputs into outputs',
      'A server that stores web pages'
    ],
    correctIndex: 2,
    explanation: 'A model does not store answers or follow manual rules: its parameters (numbers adjusted during training) define how it converts an input into an output.',
    difficulty: 'basic',
    concept: 'Model definition'
  },
  {
    id: 'm2-q02',
    moduleId: 'm2',
    question: 'What is the difference between ChatGPT and an LLM?',
    options: [
      'ChatGPT is an application built on top of an LLM; the LLM is the underlying model',
      'They are exactly the same thing',
      'The LLM is the application and ChatGPT is the model',
      'ChatGPT does not use any AI model'
    ],
    correctIndex: 0,
    explanation: 'The LLM is the "engine" (the language model); ChatGPT is the product with interface, memory, tools and rules built on top of that engine.',
    difficulty: 'basic',
    concept: 'LLM ≠ ChatGPT'
  },
  {
    id: 'm2-q03',
    moduleId: 'm2',
    question: 'What happens during model training?',
    options: [
      'The model memorizes the entire Internet word by word',
      'A human hand-writes all of its future answers',
      'The model downloads more RAM',
      'The model adjusts its parameters to reduce the error of its predictions on the data'
    ],
    correctIndex: 3,
    explanation: 'Training is optimization: the model makes predictions on the data, measures the error, and adjusts its parameters to make fewer mistakes. It does not memorize, it generalizes patterns.',
    difficulty: 'intermediate',
    concept: 'Training'
  },
  {
    id: 'm2-q04',
    moduleId: 'm2',
    question: 'What is inference?',
    options: [
      'The phase in which the model is trained on data',
      'Using an already trained model to generate an answer for a new input',
      'The process of programming the model by hand',
      'The Internet speed of the server'
    ],
    correctIndex: 1,
    explanation: 'Training is learning (once, expensive); inference is applying what was learned (every time you ask, fast). When you chat with an AI, you are in inference.',
    difficulty: 'intermediate',
    concept: 'Inference'
  },
  {
    id: 'm2-q05',
    moduleId: 'm2',
    question: 'How does an LLM generate text?',
    options: [
      'By searching for the exact sentence in its database',
      'By copying paragraphs from Wikipedia',
      'By predicting the next token, over and over, according to learned probabilities',
      'By translating each word from English'
    ],
    correctIndex: 2,
    explanation: 'An LLM is a next-token predictor: it chooses which text fragment comes next, adds it, and repeats the process until the answer is complete.',
    difficulty: 'intermediate',
    concept: 'Next-token prediction'
  },
  {
    id: 'm2-q06',
    moduleId: 'm2',
    question: 'Why is an LLM not a database?',
    options: [
      'Because it is slower than a database',
      'Because it does not use electricity',
      'Because it only works in English',
      'Because it does not store or retrieve exact texts: it generates new answers from statistical patterns'
    ],
    correctIndex: 3,
    explanation: 'A database returns stored records as-is; an LLM builds each answer token by token. That is why it can invent data: it is not "looking up" anything.',
    difficulty: 'intermediate',
    concept: 'It is not a database'
  },
  {
    id: 'm2-q07',
    moduleId: 'm2',
    question: 'An LLM states a false historical fact with total confidence. What happened?',
    options: [
      'It is a hallucination: the model generates plausible text according to probabilities, it does not verify facts',
      'It is an error in your Internet connection',
      'The model is deliberately lying to you',
      'It is a failure of the user\'s keyboard'
    ],
    correctIndex: 0,
    explanation: 'Since it generates what is most probable and does not consult sources, it sometimes produces false but plausible claims. There is no intent to deceive: it is a design limitation.',
    difficulty: 'advanced',
    concept: 'Hallucinations'
  },
  {
    id: 'm2-q08',
    moduleId: 'm2',
    question: 'What are a model\'s parameters?',
    options: [
      'The questions the user asks it',
      'The adjustable numeric values that the model learns in training and define its behavior',
      'The servers where it is hosted',
      'The languages it speaks'
    ],
    correctIndex: 1,
    explanation: 'Parameters are the model\'s "weights": billions of numbers that, after training, encode everything the model can do.',
    difficulty: 'advanced',
    concept: 'Parameters'
  },
  {
    id: 'm2-q09',
    moduleId: 'm2',
    question: 'A manager asks whether the LLM literally "remembers" the documents it was trained on. What do you answer?',
    options: [
      'Yes, it has them stored like a library',
      'Yes, but only the documents in English',
      'No one remembers anything, training is useless',
      'No: it is not a database; it may reproduce memorized fragments, but its job is to generate, not to retrieve'
    ],
    correctIndex: 3,
    explanation: 'The model compresses patterns into its parameters; there is no file with the original documents. It may "remember" frequent fragments, but it is not reliable retrieval.',
    difficulty: 'advanced',
    concept: 'Memorization vs generation'
  },
  // ==================== MODULE 3: tokens and tokenization ====================
  {
    id: 'm3-q01',
    moduleId: 'm3',
    question: 'What is a token?',
    options: [
      'The smallest unit of text a model processes: it can be a word, part of a word, or a punctuation mark',
      'A digital coin for paying the AI',
      'A type of access password',
      'A mistake the model makes when writing'
    ],
    correctIndex: 0,
    explanation: 'The model does not see letters or words like we do: it sees tokens, the fragments into which tokenization divides text. Everything (limits, cost) is measured in tokens.',
    difficulty: 'basic',
    concept: 'Token'
  },
  {
    id: 'm3-q02',
    moduleId: 'm3',
    question: 'Why is tokenization important?',
    options: [
      'Because it makes the model write faster',
      'Because it translates the text into other languages',
      'Because it password-protects your messages',
      'Because it converts text into the numeric tokens the model actually understands and processes'
    ],
    correctIndex: 3,
    explanation: 'Models work with numbers, not letters. Tokenization is the mandatory bridge between human text and the model\'s internal representation.',
    difficulty: 'basic',
    concept: 'Tokenization'
  },
  {
    id: 'm3-q03',
    moduleId: 'm3',
    question: 'Is it true that one word always equals one token?',
    options: [
      'Yes, it is an exact equivalence in every language',
      'No: rare or long words are split into several tokens; common ones are usually a single token',
      'Yes, except for punctuation marks',
      'No, each word is always exactly two tokens'
    ],
    correctIndex: 1,
    explanation: 'The tokenizer uses a fixed vocabulary learned from frequency: "house" may be 1 token, but "electroencephalogram" is split into several.',
    difficulty: 'intermediate',
    concept: 'Word vs token'
  },
  {
    id: 'm3-q04',
    moduleId: 'm3',
    question: 'A provider charges for input and output tokens. What determines what you pay per call?',
    options: [
      'Only the number of words in your question',
      'Only the length of the answer',
      'The total tokens processed: what you send plus what the model generates',
      'The number of users of the application'
    ],
    correctIndex: 2,
    explanation: 'The model "reads" your input tokens and "writes" output tokens; the provider bills both. A long prompt with a long answer is the most expensive combination.',
    difficulty: 'intermediate',
    concept: 'Tokens and cost'
  },
  {
    id: 'm3-q05',
    moduleId: 'm3',
    question: 'What do "output tokens" mean?',
    options: [
      'The tokens the model generates as its answer',
      'The tokens the user writes in the prompt',
      'The tokens discarded by mistake',
      'The tokens of other languages'
    ],
    correctIndex: 0,
    explanation: 'Input = what you send; output = what the model produces. Both count toward cost and the context window.',
    difficulty: 'intermediate',
    concept: 'Output tokens'
  },
  {
    id: 'm3-q06',
    moduleId: 'm3',
    question: 'Why can a text in Spanish consume more tokens than its English equivalent?',
    options: [
      'Because Spanish has more letters in the alphabet',
      'Because tokenization was optimized for English and other languages get fragmented into more tokens',
      'Because models charge a language surcharge',
      'Because Spanish is not supported by tokenizers'
    ],
    correctIndex: 1,
    explanation: 'Token vocabularies were built with English predominance: its common words take 1 token, while in Spanish many are split into several. More tokens = more cost.',
    difficulty: 'advanced',
    concept: 'Multilingual tokenization'
  },
  {
    id: 'm3-q07',
    moduleId: 'm3',
    question: 'You send a very long prompt and ask for a very long answer. What are the token implications?',
    options: [
      'None: long prompts are free',
      'It only increases time, not cost',
      'Only the answer counts, the prompt is not billed',
      'Both add to the cost and to context window usage'
    ],
    correctIndex: 3,
    explanation: 'Every token that comes in and every token that goes out is billed and takes up context window. Huge prompts with huge answers are the most expensive scenario.',
    difficulty: 'advanced',
    concept: 'Total token cost'
  },
  {
    id: 'm3-q08',
    moduleId: 'm3',
    question: 'What is the difference between a token and a word?',
    options: [
      'There is no difference, they are synonyms',
      'The token is the model\'s unit; the word is the unit of human language. They do not always match',
      'The word is smaller than the token',
      'Tokens only exist in English'
    ],
    correctIndex: 1,
    explanation: 'We think in words; the model processes tokens. One word can be 1 token or several, and a token can be a fragment or a punctuation mark.',
    difficulty: 'intermediate',
    concept: 'Token vs word'
  },
  {
    id: 'm3-q09',
    moduleId: 'm3',
    question: 'If you set a limit of 500 output tokens and the natural answer would need 800, what will happen?',
    options: [
      'The model will stop generating when it reaches the limit, even if the answer is left incomplete',
      'The model will ask for permission to continue',
      'The model will automatically summarize to fit',
      'The limit only affects input, not output'
    ],
    correctIndex: 0,
    explanation: 'max tokens cuts generation dry when the cap is reached. That is why a limit that is too low produces answers truncated mid-sentence.',
    difficulty: 'basic',
    concept: 'Output token limit'
  },
  // ==================== MODULE 4: context window ====================
  {
    id: 'm4-q01',
    moduleId: 'm4',
    question: 'What is the context window?',
    options: [
      'The browser window where you chat',
      'The size of the phone screen',
      'The number of conversations you can save',
      'The maximum number of tokens the model can consider at once'
    ],
    correctIndex: 3,
    explanation: 'It is the model\'s "attention cap": the sum of input tokens (prompt + history) and output it can handle in a single request.',
    difficulty: 'basic',
    concept: 'Context window'
  },
  {
    id: 'm4-q02',
    moduleId: 'm4',
    question: 'What goes into the context of a conversation with a model?',
    options: [
      'Only the user\'s last question',
      'The system prompt, the message history, and the answer being generated',
      'The entire Internet',
      'Only the account settings'
    ],
    correctIndex: 1,
    explanation: 'On each call everything is resent: system instructions, previous messages, and what has been generated so far. That is why long conversations consume more and more tokens.',
    difficulty: 'basic',
    concept: 'What goes into the context'
  },
  {
    id: 'm4-q03',
    moduleId: 'm4',
    question: 'You talk with an assistant for a long time and suddenly it "forgets" what you said at the beginning. Why?',
    options: [
      'Because the model has been turned off',
      'Because you changed language without noticing',
      'The conversation exceeded the context window and the oldest messages were lost',
      'Because the model erases memories every hour'
    ],
    correctIndex: 2,
    explanation: 'When the limit is exceeded, systems trim (usually from the start) to fit the window. The model does not "remember": it only sees what fits in the current context.',
    difficulty: 'intermediate',
    concept: 'Window limit'
  },
  {
    id: 'm4-q04',
    moduleId: 'm4',
    question: 'What is the difference between context and the model\'s knowledge?',
    options: [
      'Knowledge is in its parameters (from training); context is the active information of this conversation',
      'They are the same thing under a different name',
      'Context is permanent and knowledge is temporary',
      'Knowledge is erased with each message'
    ],
    correctIndex: 0,
    explanation: 'Knowledge (parameters) is stable and comes from training; context is what you give it now and disappears when the session closes. Confusing them leads to expecting it to "remember" what it only saw once.',
    difficulty: 'intermediate',
    concept: 'Context vs knowledge'
  },
  {
    id: 'm4-q05',
    moduleId: 'm4',
    question: 'How do context and memory differ?',
    options: [
      'Memory is faster than context',
      'They are identical: two names for the same thing',
      'Context is temporary and limited to the session; memory persists information across sessions',
      'The user writes the context and the model writes the memory'
    ],
    correctIndex: 2,
    explanation: 'Context dies with the conversation; memory (profile, saved memories) survives and is recovered in future sessions. They are complementary mechanisms.',
    difficulty: 'intermediate',
    concept: 'Context vs memory'
  },
  {
    id: 'm4-q06',
    moduleId: 'm4',
    question: 'Why does summarizing the conversation help when you approach the window limit?',
    options: [
      'Because the model likes summaries',
      'Because the summary is saved forever for free',
      'The summary condenses old messages into few tokens, freeing window space without losing the essentials',
      'Because then the model always answers faster'
    ],
    correctIndex: 2,
    explanation: 'Replacing 50 messages with a 200-token summary recovers almost the entire window while keeping the thread. It is the standard technique for long conversations.',
    difficulty: 'advanced',
    concept: 'Summarizing to free context'
  },
  {
    id: 'm4-q07',
    moduleId: 'm4',
    question: 'What happens if your prompt plus the expected answer exceed the model\'s context window?',
    options: [
      'The model processes it anyway, it just takes longer',
      'The model truncates the input or rejects the request: it cannot process more tokens than it supports',
      'The model automatically requests more RAM',
      'The window expands itself without limit'
    ],
    correctIndex: 1,
    explanation: 'The window is a fixed architectural limit per model. If you exceed it, you must trim the prompt, summarize, or use a model with a larger window.',
    difficulty: 'advanced',
    concept: 'Exceeding the window'
  },
  {
    id: 'm4-q08',
    moduleId: 'm4',
    question: 'Is the context window measured in words?',
    options: [
      'No, it is measured in tokens, which is the real unit the model processes',
      'Yes, always in exact words',
      'It is measured in characters',
      'It is measured in minutes of conversation'
    ],
    correctIndex: 0,
    explanation: '"128k of context" means 128,000 tokens, not words. Since words can be several tokens, the real text capacity is smaller than the number suggests.',
    difficulty: 'intermediate',
    concept: 'Measured in tokens'
  },
  {
    id: 'm4-q09',
    moduleId: 'm4',
    question: 'An assistant must remember the user\'s preferences across different days. What does it need?',
    options: [
      'An infinite context window',
      'The user repeating everything every day',
      'A more expensive model',
      'Persistent memory: a conversation\'s context does not survive across sessions'
    ],
    correctIndex: 3,
    explanation: 'Context is emptied when the chat closes. Remembering across days requires storing data (profile, memories) in persistent memory and recovering it each session.',
    difficulty: 'advanced',
    concept: 'Persistence across sessions'
  },
  // ==================== MODULE 5: prompts ====================
  {
    id: 'm5-q01',
    moduleId: 'm5',
    question: 'What is a prompt?',
    options: [
      'A type of AI model',
      'The instruction or message sent to the model to obtain an answer',
      'The API access password',
      'A programming error'
    ],
    correctIndex: 1,
    explanation: 'The prompt is your input: the request, question or instruction the model processes to generate its answer. Prompt quality determines result quality.',
    difficulty: 'basic',
    concept: 'Prompt definition'
  },
  {
    id: 'm5-q02',
    moduleId: 'm5',
    question: 'What is the difference between the system prompt and the user prompt?',
    options: [
      'The system prompt defines the assistant\'s role and rules; the user prompt is what the user asks in each turn',
      'There is no difference, they are the same',
      'The user prompt is written by the system and the system prompt by the user',
      'The system prompt only exists in English'
    ],
    correctIndex: 0,
    explanation: 'The system prompt is the persistent configuration ("you are a patient tutor...") set by the developer; the user prompt is each message from the user. The model combines both.',
    difficulty: 'basic',
    concept: 'System vs user prompt'
  },
  {
    id: 'm5-q03',
    moduleId: 'm5',
    question: 'In the ROLE + GOAL + CONTEXT + CONSTRAINTS + FORMAT structure, what does defining a ROLE add?',
    options: [
      'It makes the model answer faster',
      'It cuts the token cost in half',
      'It guides the tone, vocabulary and focus of the answer ("act as a physics teacher...")',
      'It prevents the model from hallucinating completely'
    ],
    correctIndex: 2,
    explanation: 'The role places the model in an expert perspective: it changes the register, depth and examples it will use, without changing its knowledge.',
    difficulty: 'intermediate',
    concept: 'ROLE in the prompt'
  },
  {
    id: 'm5-q04',
    moduleId: 'm5',
    question: 'What are CONSTRAINTS for in a prompt?',
    options: [
      'To prevent the user from asking more questions',
      'To raise the temperature automatically',
      'To make the model write longer texts',
      'To delimit what the model should and should not do: length, topics, tone, format'
    ],
    correctIndex: 3,
    explanation: 'Constraints narrow the space of possible answers ("maximum 100 words", "no jargon"), which reduces useless or off-topic responses.',
    difficulty: 'intermediate',
    concept: 'CONSTRAINTS in the prompt'
  },
  {
    id: 'm5-q05',
    moduleId: 'm5',
    question: 'You need the AI to return a report with fixed sections: Summary, Data and Conclusions. Which part of the prompt structure should you take special care of?',
    options: [
      'The ROLE, so it sounds professional',
      'The expected output FORMAT: headings, section order and length of each one',
      'The CONTEXT, even if you have no data',
      'Nothing: the model will guess the structure'
    ],
    correctIndex: 1,
    explanation: 'If you do not specify the format, the model will improvise a different one each time. Asking for the exact structure guarantees a consistent, reusable report.',
    difficulty: 'intermediate',
    concept: 'Output FORMAT'
  },
  {
    id: 'm5-q06',
    moduleId: 'm5',
    question: 'Why does adding relevant CONTEXT improve the model\'s answer so much?',
    options: [
      'Because context makes the prompt longer and that impresses the model',
      'Because it raises the temperature without configuring it',
      'Because it gives the model the task-specific information and reduces its need to guess',
      'Because the model only answers if there is context'
    ],
    correctIndex: 2,
    explanation: 'Without context, the model fills gaps with what is most probable (and sometimes hallucinates). With concrete data, it anchors its answer in real facts.',
    difficulty: 'advanced',
    concept: 'CONTEXT in the prompt'
  },
  {
    id: 'm5-q07',
    moduleId: 'm5',
    question: 'You write "do something interesting with this data" and the result is useless. What is the problem?',
    options: [
      'Without a clear goal or context, the model must guess your intent and usually fails',
      'The model is broken',
      'The data is too interesting',
      'You must always write the prompt in English'
    ],
    correctIndex: 0,
    explanation: '"Something interesting" is not a goal: the model does not know whether you want a summary, a chart or a poem. Vague prompts produce vague results.',
    difficulty: 'advanced',
    concept: 'Clear GOAL'
  },
  {
    id: 'm5-q08',
    moduleId: 'm5',
    question: 'What is the difference between the prompt and the context?',
    options: [
      'They are exactly the same thing',
      'The context is the instruction and the prompt is the data',
      'The prompt is always longer than the context',
      'The prompt is the instruction (what to do); the context is the supporting information (with what data)'
    ],
    correctIndex: 3,
    explanation: '"Summarize this report in 3 points" is the prompt; the report pasted below is the context. One directs, the other informs.',
    difficulty: 'intermediate',
    concept: 'Prompt vs context'
  },
  {
    id: 'm5-q09',
    moduleId: 'm5',
    question: 'You want the assistant to always answer in English throughout the conversation. Where should you put that instruction?',
    options: [
      'In every user message, repeated',
      'In the system prompt, so it applies to the whole conversation',
      'In the file name',
      'It can never be guaranteed'
    ],
    correctIndex: 1,
    explanation: 'The system prompt applies to all turns without repeating it. Putting it in every message wastes tokens and can be forgotten.',
    difficulty: 'basic',
    concept: 'Persistent system prompt'
  },
  // ==================== MODULE 6: memory ====================
  {
    id: 'm6-q01',
    moduleId: 'm6',
    question: 'What is memory in an AI system?',
    options: [
      'The computer\'s RAM where the model runs',
      'The server\'s hard drive',
      'Stored information that the system can recover in future sessions',
      'The context window'
    ],
    correctIndex: 2,
    explanation: 'Memory is deliberate storage: data, preferences or facts that the system saves and reloads when needed, beyond a single conversation.',
    difficulty: 'basic',
    concept: 'Memory definition'
  },
  {
    id: 'm6-q02',
    moduleId: 'm6',
    question: 'What is the difference between short-term memory and persistent memory?',
    options: [
      'Short-term memory is more expensive',
      'They are the same thing under a different name',
      'Persistent memory only stores images',
      'Short-term memory lives in the current conversation; persistent memory is preserved across sessions'
    ],
    correctIndex: 3,
    explanation: 'The current chat history is short-term memory (dies when closed); the user profile or saved preferences are persistent (survive days or months).',
    difficulty: 'basic',
    concept: 'Short-term vs persistent'
  },
  {
    id: 'm6-q03',
    moduleId: 'm6',
    question: 'What is semantic memory?',
    options: [
      'General knowledge and facts stored in a structured way, not tied to a specific moment',
      'The exact recollection of every past conversation',
      'Memory that only lasts a few seconds',
      'A faster type of hard drive'
    ],
    correctIndex: 0,
    explanation: 'Semantic memory stores "the user is allergic to gluten" as a timeless fact, unlike episodic memory ("on Tuesday they ordered pizza"), tied to a moment.',
    difficulty: 'intermediate',
    concept: 'Semantic memory'
  },
  {
    id: 'm6-q04',
    moduleId: 'm6',
    question: 'You open the chat a week later and the assistant remembers you are vegetarian without you repeating it. What type of memory is it using?',
    options: [
      'None, it guessed',
      'Persistent memory: a profile datum recovered in a new session',
      'Last week\'s context window',
      'The server\'s RAM'
    ],
    correctIndex: 1,
    explanation: 'The previous conversation no longer exists in the context; the datum survived because it was saved as persistent memory (profile) and recovered at startup.',
    difficulty: 'intermediate',
    concept: 'Recovery across sessions'
  },
  {
    id: 'm6-q05',
    moduleId: 'm6',
    question: 'How does an AI system recover the relevant memory among thousands stored?',
    options: [
      'By reading all of them on every question',
      'By asking the user which one they want',
      'By searching for the memories most similar to the current situation, often with embeddings',
      'By picking one at random'
    ],
    correctIndex: 2,
    explanation: 'Recovery is a similarity search: the current question is compared against memories (via embeddings) and the most related ones are rescued into the context.',
    difficulty: 'intermediate',
    concept: 'Memory retrieval'
  },
  {
    id: 'm6-q06',
    moduleId: 'm6',
    question: 'Why is it not enough to lengthen the context window instead of using memory?',
    options: [
      'Because context is expensive, limited and temporary; memory selects and persists only what is relevant',
      'Because long windows are prohibited by law',
      'Because memory is slower',
      'Because context does not accept text'
    ],
    correctIndex: 0,
    explanation: 'Putting all history into every call costs tokens and has a cap. Memory stores what matters compactly and recovers it only when needed.',
    difficulty: 'advanced',
    concept: 'Why memory on top of context'
  },
  {
    id: 'm6-q07',
    moduleId: 'm6',
    question: 'What is the risk of poorly managed persistent memory?',
    options: [
      'That the model is always slower',
      'That the user\'s disk fills up',
      'That it consumes more electricity',
      'Storing outdated or private data that contaminates future answers or leaks information'
    ],
    correctIndex: 3,
    explanation: 'A preference that changed or a sensitive datum saved without control will reappear in contexts where it should not. Memory needs expiry, correction and privacy control.',
    difficulty: 'advanced',
    concept: 'Memory risks'
  },
  {
    id: 'm6-q08',
    moduleId: 'm6',
    question: 'What is the difference between the user profile and the chat history?',
    options: [
      'There is no difference',
      'The profile is structured, durable data; the history is the literal, temporary conversation',
      'The history is more reliable than the profile',
      'The profile is erased every day'
    ],
    correctIndex: 1,
    explanation: 'The profile ("language: English, role: teacher") is curated, stable information; the history is the raw transcript of what was said, useful short-term but noisy long-term.',
    difficulty: 'intermediate',
    concept: 'Profile vs history'
  },
  {
    id: 'm6-q09',
    moduleId: 'm6',
    question: 'Every time you open the assistant it greets you by name even in a new conversation. Why can it do that?',
    options: [
      'Because it reads your mind',
      'Because it guesses common names',
      'Because your name is stored in persistent memory (profile)',
      'Because the browser puts it there'
    ],
    correctIndex: 2,
    explanation: 'Personalized greetings across sessions are only possible if the name was stored persistently and recovered at startup. Without memory, every chat would start from zero.',
    difficulty: 'basic',
    concept: 'Persistent profile'
  },
  // ==================== MODULE 7: tools ====================
  {
    id: 'm7-q01',
    moduleId: 'm7',
    question: 'What is a Tool in the context of AI?',
    options: [
      'An external function the model can invoke to do what it cannot do alone: look up data, act, calculate',
      'A screwdriver for repairing computers',
      'A smaller type of model',
      'The browser toolbar'
    ],
    correctIndex: 0,
    explanation: 'The LLM only generates text; tools are its "hands": real functions (search flights, query a database) that the model decides to invoke.',
    difficulty: 'basic',
    concept: 'Tool definition'
  },
  {
    id: 'm7-q02',
    moduleId: 'm7',
    question: 'Why does a Tool expand an LLM\'s capabilities?',
    options: [
      'Because it makes the model bigger',
      'Because it changes the model\'s parameters',
      'It gives it access to current data and real-world actions, beyond its training',
      'Because it removes the need for prompts'
    ],
    correctIndex: 2,
    explanation: 'The trained model is frozen in time and cannot act. With tools it checks today\'s weather, sends emails or reads your calendar: it overcomes its two big limits.',
    difficulty: 'basic',
    concept: 'What tools are for'
  },
  {
    id: 'm7-q03',
    moduleId: 'm7',
    question: 'What is tool calling (function calling)?',
    options: [
      'Calling technical support by phone',
      'The mechanism by which the model decides to invoke an external function and uses its result in the answer',
      'A type of computer virus',
      'When the user shouts at the computer'
    ],
    correctIndex: 1,
    explanation: 'The model does not execute code: it emits a structured call ("call get_weather with city=Madrid") and the application executes it and returns the result for it to integrate.',
    difficulty: 'intermediate',
    concept: 'Tool calling'
  },
  {
    id: 'm7-q04',
    moduleId: 'm7',
    question: 'What is the correct flow when a model uses a Tool?',
    options: [
      'TOOL → USER → LLM → TOOL',
      'USER → TOOL → USER directly',
      'LLM → LLM → USER with no tools',
      'The user asks, the model requests the tool, it is executed, the model integrates the result and answers'
    ],
    correctIndex: 3,
    explanation: 'It is a two-phase dialogue: first the model requests the tool (USER→LLM→TOOL), then it receives the data and builds the final answer (TOOL→LLM→USER).',
    difficulty: 'intermediate',
    concept: 'USER→LLM→TOOL flow'
  },
  {
    id: 'm7-q05',
    moduleId: 'm7',
    question: 'An AI needs to check the user\'s calendar to see if they are free on Friday. Which element would it need to use?',
    options: [
      'A calendar Tool (e.g. get_events) that the model can invoke',
      'A longer prompt',
      'A higher temperature',
      'Nothing: the model already knows your schedule'
    ],
    correctIndex: 0,
    explanation: 'The schedule is private, changing data that is not in the training. Only a tool that queries the real calendar can give the correct answer.',
    difficulty: 'intermediate',
    concept: 'Practical case: calendar'
  },
  {
    id: 'm7-q06',
    moduleId: 'm7',
    question: 'When the model "uses" a Tool, does it really execute it?',
    options: [
      'Yes, the model executes code directly',
      'Yes, but only in its imagination',
      'No: the model only emits the call; it is the application\'s code that executes it and returns the result',
      'No, tools are merely decorative'
    ],
    correctIndex: 2,
    explanation: 'The LLM generates text, including the structured call. The real execution (querying the API, deleting the file) is done by your program. This separation is key for security.',
    difficulty: 'advanced',
    concept: 'Who executes the tool'
  },
  {
    id: 'm7-q07',
    moduleId: 'm7',
    question: 'What does the model need to know to use a Tool well?',
    options: [
      'The tool\'s complete source code',
      'The developer\'s password',
      'Its description and schema: name, parameters, and what each one is for',
      'Nothing, it discovers them on its own'
    ],
    correctIndex: 2,
    explanation: 'The model is given a "data sheet" for each available tool. With that description it decides when to call it and with what arguments; without the sheet, it cannot use it.',
    difficulty: 'advanced',
    concept: 'Tool schema'
  },
  {
    id: 'm7-q08',
    moduleId: 'm7',
    question: 'What is the difference between a tool and an API?',
    options: [
      'They are exactly the same thing',
      'The tool is the function the model invokes; the API is the external service that function usually calls',
      'The model uses the API and the human uses the tool',
      'Tools are free and APIs are always paid'
    ],
    correctIndex: 1,
    explanation: 'The tool is the interface the model sees ("check_weather"); internally, that function normally calls a weather API. One is the visible face, the other the service.',
    difficulty: 'intermediate',
    concept: 'Tool vs API'
  },
  {
    id: 'm7-q09',
    moduleId: 'm7',
    question: 'Which of these is an example of a Tool?',
    options: [
      'get_weather(city): returns the current weather of a city',
      'A poem about the weather',
      'The "like" button of a social network',
      'A USB cable'
    ],
    correctIndex: 0,
    explanation: 'It is a function with a name, parameters, and an observable real-world result. The other options are not functions the model can invoke.',
    difficulty: 'basic',
    concept: 'Tool example'
  },
  // ==================== MODULE 8: skills ====================
  {
    id: 'm8-q01',
    moduleId: 'm8',
    question: 'What is a Skill in the context of AI agents?',
    options: [
      'A video game for training models',
      'A reusable package of knowledge and procedures that teaches the agent to perform a task',
      'An official programming certificate',
      'A type of virus'
    ],
    correctIndex: 1,
    explanation: 'A skill encapsulates the "know-how": instructions, examples and necessary tools for a specific task, ready to load into any agent.',
    difficulty: 'basic',
    concept: 'Skill definition'
  },
  {
    id: 'm8-q02',
    moduleId: 'm8',
    question: 'What components does a skill usually have?',
    options: [
      'Only the author\'s name',
      'Only assembly code',
      'Only a cover image',
      'Description, step-by-step instructions, examples, and the tools it can use'
    ],
    correctIndex: 3,
    explanation: 'A useful skill says what it does (description), how to do it (instructions), shows cases (examples) and declares which tools it works with.',
    difficulty: 'basic',
    concept: 'Skill components'
  },
  {
    id: 'm8-q03',
    moduleId: 'm8',
    question: 'What is the difference between a skill and a tool?',
    options: [
      'There is no difference',
      'The skill is faster than the tool',
      'The tool is a concrete function; the skill is the "manual" that teaches when and how to use several tools for a task',
      'The human uses the tool and the model uses the skill'
    ],
    correctIndex: 2,
    explanation: 'The tool is the hammer; the skill is the carpentry manual. A skill orchestrates several tools with judgment to complete a full task.',
    difficulty: 'intermediate',
    concept: 'Skill vs Tool'
  },
  {
    id: 'm8-q04',
    moduleId: 'm8',
    question: 'You have a "write formal emails" skill. What would it contain?',
    options: [
      'It would teach tone, structure and examples, and use the sending tool only at the end of the process',
      'Only the email password',
      'A list of all your contacts',
      'The model\'s source code'
    ],
    correctIndex: 0,
    explanation: 'The skill provides the knowledge (how to write a formal email) and reserves the tool (sending) for the final step. Knowing how ≠ being able to act.',
    difficulty: 'intermediate',
    concept: 'Case: email skill'
  },
  {
    id: 'm8-q05',
    moduleId: 'm8',
    question: 'Why are skills reusable?',
    options: [
      'Because they take up very little space',
      'Because they encapsulate a task\'s know-how and can be loaded into any agent that needs it',
      'Because they are free by law',
      'Because they need no tools'
    ],
    correctIndex: 1,
    explanation: 'By packaging procedure + examples + tools, the same "invoice analysis" skill serves the accounting agent and the purchasing agent without rewriting anything.',
    difficulty: 'intermediate',
    concept: 'Skill reuse'
  },
  {
    id: 'm8-q06',
    moduleId: 'm8',
    question: 'An agent has access to an API\'s tool but uses it badly: it calls with incorrect parameters. What is it missing?',
    options: [
      'It is missing a skill: it knows the tool exists but not when or how to use it well',
      'It is missing more temperature',
      'It is missing a more powerful computer',
      'It is missing nothing, that is normal'
    ],
    correctIndex: 0,
    explanation: 'Having the tool is not knowing how to use it. The skill provides the procedure, examples of correct use, and mistakes to avoid.',
    difficulty: 'advanced',
    concept: 'Skill as know-how'
  },
  {
    id: 'm8-q07',
    moduleId: 'm8',
    question: 'Who creates skills?',
    options: [
      'They generate themselves by magic',
      'The end user always creates them without knowing how to program',
      'Models invent them in each conversation',
      'Developers or experts who document the procedure; the agent consumes them, it does not invent them'
    ],
    correctIndex: 3,
    explanation: 'A skill is human-curated knowledge (or by supervised agents): someone with experience writes the "manual" and the agent follows it.',
    difficulty: 'advanced',
    concept: 'Skill authorship'
  },
  {
    id: 'm8-q08',
    moduleId: 'm8',
    question: 'What is the difference between a skill and a prompt?',
    options: [
      'They are the same thing',
      'The prompt is reusable and the skill is not',
      'The prompt is a one-off instruction; the skill is a persistent, reusable package of knowledge',
      'The skill only works once'
    ],
    correctIndex: 2,
    explanation: 'The prompt solves a specific request; the skill is a durable asset that is loaded across many sessions and different agents.',
    difficulty: 'intermediate',
    concept: 'Skill vs prompt'
  },
  {
    id: 'm8-q09',
    moduleId: 'm8',
    question: 'What would a "PDF analysis" skill include?',
    options: [
      'Only the price of the software',
      'How to extract the text, what to look for in the document, and how to structure the summary',
      'The list of all PDFs in the world',
      'An antivirus'
    ],
    correctIndex: 1,
    explanation: 'It describes the complete procedure: extraction, analysis criteria and output format, plus the necessary tools. That is a skill: packaged method.',
    difficulty: 'basic',
    concept: 'Skill example'
  },
  // ==================== MODULE 9: MCP ====================
  {
    id: 'm9-q01',
    moduleId: 'm9',
    question: 'What is MCP (Model Context Protocol)?',
    options: [
      'A new language model',
      'A programming language',
      'An open standard protocol for connecting AI models with external tools and data',
      'A social network for developers'
    ],
    correctIndex: 2,
    explanation: 'MCP is not a model or a program: it is the standard that defines how an AI app discovers and uses tools and data from external services.',
    difficulty: 'basic',
    concept: 'MCP definition'
  },
  {
    id: 'm9-q02',
    moduleId: 'm9',
    question: 'Why is MCP compared to USB-C?',
    options: [
      'Because it is a standard connector: one single way to plug in many different tools',
      'Because it transmits electricity',
      'Because it only works with physical cables',
      'Because it was invented by the same team'
    ],
    correctIndex: 0,
    explanation: 'Before USB-C every phone had its own charger; before MCP every AI-tool integration was custom. The standard eliminates that chaos.',
    difficulty: 'basic',
    concept: 'USB-C analogy'
  },
  {
    id: 'm9-q03',
    moduleId: 'm9',
    question: 'In the MCP architecture, who is the client and who is the server?',
    options: [
      'The client is the user and the server is the model',
      'Both are AI models',
      'There is no client or server',
      'The client is the AI app (e.g. Claude); the server exposes tools, resources and prompts'
    ],
    correctIndex: 3,
    explanation: 'The MCP client lives inside the assistant and "plugs in" servers; each server publishes the capabilities of a service (Drive, GitHub, Slack...).',
    difficulty: 'intermediate',
    concept: 'MCP client / server'
  },
  {
    id: 'm9-q04',
    moduleId: 'm9',
    question: 'What three types of capabilities does an MCP server expose?',
    options: [
      'Keyboard, mouse and screen',
      'Tools (actions), Resources (data) and Prompts (reusable templates)',
      'Training, inference and evaluation',
      'Frontend, backend and database'
    ],
    correctIndex: 1,
    explanation: 'Tools for acting, Resources for reading data (files, records) and Prompts as templates for common tasks. These are the three blocks of the protocol.',
    difficulty: 'intermediate',
    concept: 'Tools / Resources / Prompts'
  },
  {
    id: 'm9-q05',
    moduleId: 'm9',
    question: 'What is the difference between MCP and an AI model?',
    options: [
      'MCP is a bigger model',
      'MCP is a smaller, faster model',
      'MCP is not a model: it is the connection protocol between the model and the outside world',
      'There is no difference'
    ],
    correctIndex: 2,
    explanation: 'The model reasons and generates; MCP is the "plug" through which tools and data arrive. Confusing them is like confusing the computer with the USB port.',
    difficulty: 'intermediate',
    concept: 'MCP ≠ model'
  },
  {
    id: 'm9-q06',
    moduleId: 'm9',
    question: 'You want your assistant to access Google Drive and Slack. With MCP, how would you do it?',
    options: [
      'By training a new model for each service',
      'By connecting two MCP servers, without writing custom integrations for each one',
      'It is impossible to connect two services at once',
      'By copying the data manually every day'
    ],
    correctIndex: 1,
    explanation: 'Each service publishes its MCP server with the same protocol; the client "plugs them in" the same way. Adding a third service means adding another server, not another development.',
    difficulty: 'advanced',
    concept: 'Case: multiple servers'
  },
  {
    id: 'm9-q07',
    moduleId: 'm9',
    question: 'What problem does MCP solve in the AI ecosystem?',
    options: [
      'It avoids the chaos of proprietary integrations: a common standard for exposing tools and data',
      'It makes models smarter',
      'It removes the need for programmers',
      'It reduces the price of electricity'
    ],
    correctIndex: 0,
    explanation: 'Without a standard, each AI app needed a different connector per tool (N×M integrations). MCP turns it into N+M: each side implements the protocol once.',
    difficulty: 'advanced',
    concept: 'Problem MCP solves'
  },
  {
    id: 'm9-q08',
    moduleId: 'm9',
    question: 'What would a GitHub MCP server allow an agent to do?',
    options: [
      'Train a new model',
      'Change your password automatically',
      'Play video games',
      'Read issues, review code and create pull requests directly from the assistant'
    ],
    correctIndex: 3,
    explanation: 'The server exposes GitHub operations as MCP tools and resources; the agent uses them with the same protocol it would use for Drive or Slack.',
    difficulty: 'intermediate',
    concept: 'Example: MCP server'
  },
  {
    id: 'm9-q09',
    moduleId: 'm9',
    question: 'What is the difference between MCP and an API?',
    options: [
      'They are exactly the same thing',
      'An API is a concrete service; MCP is the standard protocol for exposing and discovering those capabilities',
      'MCP is slower than any API',
      'APIs do not use the Internet and MCP does'
    ],
    correctIndex: 1,
    explanation: 'The GitHub API is a specific service; MCP is the common language with which any service can offer itself to any assistant.',
    difficulty: 'basic',
    concept: 'MCP vs API'
  },
  // ==================== MODULE 10: agent loop ====================
  {
    id: 'm10-q01',
    moduleId: 'm10',
    question: 'What is the agent loop?',
    options: [
      'A type of recurrent neural network',
      'A cable that connects the computer',
      'An error that repeats the same answer',
      'The repeated cycle of reasoning, acting with a tool, and observing the result until the task is complete'
    ],
    correctIndex: 3,
    explanation: 'The agent does not answer in one go: it thinks about the next step, executes an action, looks at what happened, and repeats. That loop is what gives it autonomy.',
    difficulty: 'basic',
    concept: 'Agent loop'
  },
  {
    id: 'm10-q02',
    moduleId: 'm10',
    question: 'What are the phases of each agent loop iteration?',
    options: [
      'Train, validate and deploy',
      'Plan (think the next step), act (use a tool) and observe (read the result)',
      'Turn on, turn off and restart',
      'Read, write and delete'
    ],
    correctIndex: 1,
    explanation: 'Each loop turn has three moments: deciding what to do, doing it with a tool, and processing what came back to plan the next turn.',
    difficulty: 'basic',
    concept: 'Phases: plan / act / observe'
  },
  {
    id: 'm10-q03',
    moduleId: 'm10',
    question: 'What is an agent\'s stop criterion?',
    options: [
      'The condition that tells the agent the task is complete and it must stop iterating',
      'The computer\'s power button',
      'The Internet speed limit',
      'The password to stop it'
    ],
    correctIndex: 0,
    explanation: 'Without a clear "done" condition ("I have the flight booked", "there are no more steps"), the agent would not know when to finish its loop.',
    difficulty: 'intermediate',
    concept: 'Stop criterion'
  },
  {
    id: 'm10-q04',
    moduleId: 'm10',
    question: 'An agent must find you a cheap flight to Rome. How would it apply the agent loop?',
    options: [
      'By guessing a price at random',
      'By asking you the price',
      'It iterates: searches options, observes results, refines the search until it finds a valid one or runs out of attempts',
      'By booking the first flight that exists without looking'
    ],
    correctIndex: 2,
    explanation: 'Each search gives it information (prices, schedules) that it uses to adjust the next one: cheaper, another date, another airline. That is iterating with observation.',
    difficulty: 'intermediate',
    concept: 'Case: finding a flight'
  },
  {
    id: 'm10-q05',
    moduleId: 'm10',
    question: 'Why is the "observe" phase essential in the agent loop?',
    options: [
      'Because then it spends more tokens',
      'Because the law requires it',
      'Because it looks good in diagrams',
      'Because each action\'s result informs the next step; without observation it would act blindly'
    ],
    correctIndex: 3,
    explanation: 'If the search returned no results, the agent must know it to try something else. Without observing, it would repeat the same useless action over and over.',
    difficulty: 'intermediate',
    concept: 'Importance of observing'
  },
  {
    id: 'm10-q06',
    moduleId: 'm10',
    question: 'What would happen to an agent without a stop criterion?',
    options: [
      'It would finish faster',
      'It would save tokens',
      'It could iterate indefinitely, spending tokens and time without ever completing the task',
      'It would become smarter'
    ],
    correctIndex: 2,
    explanation: 'A loop with no exit condition is an infinite loop: it would keep searching, retrying and calling tools endlessly, with real cost on each turn.',
    difficulty: 'advanced',
    concept: 'Endless loop'
  },
  {
    id: 'm10-q07',
    moduleId: 'm10',
    question: 'How does the agent loop differ from a simple chain of fixed prompts?',
    options: [
      'It does not, they are the same',
      'The loop adapts: each observation can change the plan; it does not follow a fixed script',
      'The loop is always slower',
      'The prompt chain uses more tools'
    ],
    correctIndex: 1,
    explanation: 'A fixed chain executes steps 1-2-3 no matter what; the loop replans: if step 2 fails, it invents a plan B. That adaptability is autonomy.',
    difficulty: 'advanced',
    concept: 'Loop vs fixed chain'
  },
  {
    id: 'm10-q08',
    moduleId: 'm10',
    question: 'Besides the stop criterion, what other limit protects against infinite loops?',
    options: [
      'A maximum number of steps or iterations, to avoid uncontrolled costs',
      'A kitchen timer',
      'The user\'s patience',
      'The screen size'
    ],
    correctIndex: 0,
    explanation: '"max_steps" is the fuse: even if the agent does not detect it is done, it is cut off after N iterations. It is a standard safety and cost practice.',
    difficulty: 'intermediate',
    concept: 'Iteration limit'
  },
  {
    id: 'm10-q09',
    moduleId: 'm10',
    question: 'Which of these is an example of the agent loop in action?',
    options: [
      'A spell checker that underlines words',
      'A clock that shows the time',
      'A calculator that adds two numbers',
      'An agent that books a restaurant: searches options, reads reviews, compares and books, step by step'
    ],
    correctIndex: 3,
    explanation: 'There is a goal, multiple steps with tools (search, read, book) and each result conditions the next: the complete agent loop pattern.',
    difficulty: 'basic',
    concept: 'Agent loop example'
  },
  // ==================== MODULE 11: chatbot vs assistant vs agent ====================
  {
    id: 'm11-q01',
    moduleId: 'm11',
    question: 'What is a chatbot?',
    options: [
      'A program that holds conversations by answering messages, normally without executing external actions',
      'A physical robot that talks',
      'A model trained from scratch by the user',
      'A type of conversational virus'
    ],
    correctIndex: 0,
    explanation: 'The classic chatbot converses: it answers questions with text. It does not book, buy or modify anything outside the chat.',
    difficulty: 'basic',
    concept: 'Chatbot definition'
  },
  {
    id: 'm11-q02',
    moduleId: 'm11',
    question: 'What distinguishes a chatbot from an AI agent?',
    options: [
      'The agent is cheaper',
      'The chatbot is more modern',
      'The chatbot answers; the agent also acts: it uses tools and executes multi-step tasks autonomously',
      'There is no real difference'
    ],
    correctIndex: 2,
    explanation: 'The boundary is action: the chatbot stays in words; the agent operates tools and completes tasks in the (digital) world.',
    difficulty: 'basic',
    concept: 'Chatbot vs agent'
  },
  {
    id: 'm11-q03',
    moduleId: 'm11',
    question: 'What is an agent\'s autonomy?',
    options: [
      'The device\'s battery',
      'The hourly price of the service',
      'The speed of its connection',
      'Its ability to decide and execute steps on its own without asking for confirmation at each one'
    ],
    correctIndex: 3,
    explanation: 'An autonomous agent chains decisions (search, compare, book) without interrupting you at each step. More autonomy means more useful... and more risk.',
    difficulty: 'intermediate',
    concept: 'Autonomy'
  },
  {
    id: 'm11-q04',
    moduleId: 'm11',
    question: 'What are an agent\'s permissions?',
    options: [
      'The software licenses',
      'The limits of what it can do alone: which tools it can use and which actions require approval',
      'The team\'s vacation days',
      'The language it answers in'
    ],
    correctIndex: 1,
    explanation: 'Permissions are the "rules of the game": it can search flights alone, but needs your OK to pay for them. They define the safe autonomy radius.',
    difficulty: 'intermediate',
    concept: 'Agent permissions'
  },
  {
    id: 'm11-q05',
    moduleId: 'm11',
    question: 'An agent is about to delete 1000 old files to "clean up" your disk. What should happen?',
    options: [
      'It should ask for confirmation: it is a destructive action that requires human supervision',
      'It should delete them without warning to be efficient',
      'It should delete only half of them',
      'It should turn off the computer first'
    ],
    correctIndex: 0,
    explanation: 'Irreversible or high-impact actions must never be autonomous: the human reviews and approves before execution.',
    difficulty: 'intermediate',
    concept: 'Case: destructive action'
  },
  {
    id: 'm11-q06',
    moduleId: 'm11',
    question: 'What is human-in-the-loop?',
    options: [
      'A cooperative video game',
      'Designing the system so a person reviews or approves the agent\'s critical actions',
      'A type of model training',
      'Connecting the brain to the computer'
    ],
    correctIndex: 1,
    explanation: 'It is the key safety principle: the agent proposes and executes routine things, but the human validates what matters (payments, deletions, sends).',
    difficulty: 'advanced',
    concept: 'Human-in-the-loop'
  },
  {
    id: 'm11-q07',
    moduleId: 'm11',
    question: 'Why does more agent autonomy demand more controls?',
    options: [
      'Because the law prohibits autonomy',
      'Because users get bored',
      'Because each autonomous step multiplies the impact of an error; permissions and supervision contain it',
      'Because it spends fewer tokens with controls'
    ],
    correctIndex: 2,
    explanation: 'An error in step 1 drags into steps 2-10 if nobody stops it. Autonomy and control are the two sides of a reliable agent.',
    difficulty: 'advanced',
    concept: 'Autonomy and control'
  },
  {
    id: 'm11-q08',
    moduleId: 'm11',
    question: 'What is the difference between an assistant and an agent?',
    options: [
      'They are exact synonyms',
      'The agent only converses and the assistant acts',
      'The assistant is paid and the agent is free',
      'The assistant helps by answering and suggesting; the agent executes complete tasks with tools'
    ],
    correctIndex: 3,
    explanation: 'The assistant tells you how to book the flight; the agent books it for you. The difference lies in who executes the final action.',
    difficulty: 'intermediate',
    concept: 'Assistant vs agent'
  },
  {
    id: 'm11-q09',
    moduleId: 'm11',
    question: 'A chatbot answers questions but does not execute external actions. What component would need to be added to turn it into an agent?',
    options: [
      'Tools and an agent loop that let it act, not just converse',
      'More emojis in its answers',
      'A bigger screen',
      'Nothing, it is already an agent'
    ],
    correctIndex: 0,
    explanation: 'It already has conversation; it lacks the "hands" (tools) and the "work cycle" (loop) to go from saying to doing.',
    difficulty: 'basic',
    concept: 'From chatbot to agent'
  },
  // ==================== MODULE 12: coding agents ====================
  {
    id: 'm12-q01',
    moduleId: 'm12',
    question: 'What is a coding agent?',
    options: [
      'A human programmer who works with AI',
      'An AI agent specialized in writing, modifying and testing code using development tools',
      'A spell checker for code',
      'A programming video game'
    ],
    correctIndex: 1,
    explanation: 'It is an agent whose "world" is your project: it reads files, edits code, runs commands and checks tests, all autonomously.',
    difficulty: 'basic',
    concept: 'Coding agent definition'
  },
  {
    id: 'm12-q02',
    moduleId: 'm12',
    question: 'Claude Code, Codex and OpenCode are examples of...',
    options: [
      'Coding agents: agents that program with access to files, terminal and tests',
      'Social networks for programmers',
      'New programming languages',
      'Antivirus for code'
    ],
    correctIndex: 0,
    explanation: 'All three are agents that operate on real repositories: they do not just suggest code in a chat, they apply it and verify it in your project.',
    difficulty: 'basic',
    concept: 'Coding agent examples'
  },
  {
    id: 'm12-q03',
    moduleId: 'm12',
    question: 'What can a coding agent do that a normal chatbot cannot?',
    options: [
      'Write prettier poems',
      'Speak more languages',
      'Answer faster',
      'Read and edit project files, run commands and run tests autonomously'
    ],
    correctIndex: 3,
    explanation: 'The difference is the development tools: the chatbot shows you the code; the coding agent writes it into your files and checks that it works.',
    difficulty: 'intermediate',
    concept: 'Coding agent capabilities'
  },
  {
    id: 'm12-q04',
    moduleId: 'm12',
    question: 'How does a coding agent work internally?',
    options: [
      'By guessing the code from memory',
      'By copying from Stack Overflow without reading',
      'With an agent loop over code tools: read, edit, execute and observe results',
      'By writing the entire project in one go without checking anything'
    ],
    correctIndex: 2,
    explanation: 'It applies the general loop to code: reads a file, proposes a change, runs the tests, observes whether they pass, and fixes. Iteration with verification.',
    difficulty: 'intermediate',
    concept: 'Coding agent architecture'
  },
  {
    id: 'm12-q05',
    moduleId: 'm12',
    question: 'What is the difference between a chatbot and a coding agent when programming?',
    options: [
      'There is no difference',
      'The chatbot suggests code in the chat; the coding agent applies and verifies it in the real project',
      'The coding agent is always slower',
      'The chatbot writes better code'
    ],
    correctIndex: 1,
    explanation: 'The chatbot leaves you the work of copying, pasting and testing; the coding agent closes the full cycle until the tests pass.',
    difficulty: 'intermediate',
    concept: 'Chatbot vs coding agent'
  },
  {
    id: 'm12-q06',
    moduleId: 'm12',
    question: 'A coding agent modifies code and the tests start failing. What should it do?',
    options: [
      'Ignore the tests and continue',
      'Delete the failing tests',
      'Turn off the computer',
      'Observe the failure, fix it and iterate: the loop includes verification'
    ],
    correctIndex: 3,
    explanation: 'Tests are its "observation": they tell it whether the change works. A good coding agent does not consider done anything that breaks verification.',
    difficulty: 'advanced',
    concept: 'Verification in the loop'
  },
  {
    id: 'm12-q07',
    moduleId: 'm12',
    question: 'Why does a coding agent need a permission system?',
    options: [
      'Because it can modify or delete files and run commands: actions with real impact',
      'Because it is a legal requirement with no practical importance',
      'Because that way it goes faster',
      'Because permissions improve code quality'
    ],
    correctIndex: 0,
    explanation: 'It holds the keys to your project: it can delete, overwrite or execute anything. Without permissions, a mistake becomes a disaster.',
    difficulty: 'advanced',
    concept: 'Coding agent permissions'
  },
  {
    id: 'm12-q08',
    moduleId: 'm12',
    question: 'What role does the repository play for a coding agent?',
    options: [
      'None, it works without files',
      'It only serves for making backups',
      'It is its workspace: the persistent context where it reads, writes and versions each change',
      'It is where its password is stored'
    ],
    correctIndex: 2,
    explanation: 'The repo is its "world": there are the code, the history and the branches. Working on a versioned repo also allows reverting its mistakes.',
    difficulty: 'intermediate',
    concept: 'Repo as workspace'
  },
  {
    id: 'm12-q09',
    moduleId: 'm12',
    question: 'Does a coding agent replace the human programmer?',
    options: [
      'Yes, programmers are no longer needed',
      'No: it accelerates the work, but the human defines goals, reviews and takes responsibility',
      'Yes, but only on weekends',
      'No, because it cannot write code'
    ],
    correctIndex: 1,
    explanation: 'It is a productivity multiplier, not a substitute: judgment about what to build, review and final responsibility remain human.',
    difficulty: 'basic',
    concept: 'The human\'s role'
  },
  // ==================== MODULE 13: desktop and work agents ====================
  {
    id: 'm13-q01',
    moduleId: 'm13',
    question: 'What is a work agent (worker)?',
    options: [
      'A human employee of an AI company',
      'A robot that works in a factory',
      'An agent that executes tasks in the background without constant conversational interaction',
      'A program that only works at night'
    ],
    correctIndex: 2,
    explanation: 'The worker does not chat with you: it works on its own (every hour, on an event) and delivers the result when it is ready.',
    difficulty: 'basic',
    concept: 'Worker agent'
  },
  {
    id: 'm13-q02',
    moduleId: 'm13',
    question: 'What is the difference between an assistant and a worker?',
    options: [
      'The worker is more expensive',
      'The assistant works at night',
      'They are the same thing',
      'The assistant converses with the user; the worker executes autonomous tasks, often scheduled or triggered by events'
    ],
    correctIndex: 3,
    explanation: 'The assistant is your interlocutor; the worker is your "invisible employee" that does the heavy lifting without being asked every time.',
    difficulty: 'basic',
    concept: 'Assistant vs worker'
  },
  {
    id: 'm13-q03',
    moduleId: 'm13',
    question: 'Which of these is an example of a worker?',
    options: [
      'A chatbot that answers when you write to it',
      'An agent that every morning reviews your email and leaves a summary ready',
      'A calculator',
      'A music player'
    ],
    correctIndex: 1,
    explanation: 'It works on a schedule, without anyone talking to it, and produces a deliverable. That pattern (scheduled + autonomous + result) defines the worker.',
    difficulty: 'intermediate',
    concept: 'Worker example'
  },
  {
    id: 'm13-q04',
    moduleId: 'm13',
    question: 'What is a desktop agent?',
    options: [
      'An agent that operates your computer\'s applications: files, programs and local automations',
      'An animated wallpaper',
      'An agent that only works in offices',
      'A type of ergonomic chair'
    ],
    correctIndex: 0,
    explanation: 'Instead of living in the cloud, it acts on your PC: moves files, fills forms, automates programs. Its "world" is your desktop.',
    difficulty: 'intermediate',
    concept: 'Desktop agent'
  },
  {
    id: 'm13-q05',
    moduleId: 'm13',
    question: 'You want a weekly sales report in your email every Monday at 8:00 without asking for it each time. What type of agent do you need?',
    options: [
      'A normal chatbot',
      'A model without tools',
      'A scheduled worker: it collects data, generates the report and sends it automatically',
      'A video game'
    ],
    correctIndex: 2,
    explanation: 'It is a repetitive, scheduled task with no conversation: the perfect use case for a worker with a time trigger.',
    difficulty: 'intermediate',
    concept: 'Case: scheduled report'
  },
  {
    id: 'm13-q06',
    moduleId: 'm13',
    question: 'Why does a worker need very clear stop and escalation criteria?',
    options: [
      'Because it works without direct supervision: it must know when to finish or ask a human for help',
      'Because workers are slow',
      'Because the law requires it only for workers',
      'Because that way they consume more tokens'
    ],
    correctIndex: 0,
    explanation: 'Nobody is watching it while it works: if something goes wrong, it must stop on its own or alert, not keep acting blindly for hours.',
    difficulty: 'advanced',
    concept: 'Worker supervision'
  },
  {
    id: 'm13-q07',
    moduleId: 'm13',
    question: 'Which permissions are especially critical in a desktop agent?',
    options: [
      'The interface language',
      'File access and program execution: powerful but dangerous without limits',
      'The theme color',
      'The font size'
    ],
    correctIndex: 1,
    explanation: 'It can read your documents and run software: the most sensitive permission of all. It must be scoped to specific folders and actions.',
    difficulty: 'advanced',
    concept: 'Desktop agent permissions'
  },
  {
    id: 'm13-q08',
    moduleId: 'm13',
    question: 'What is the difference between an AI worker and a traditional scheduled script?',
    options: [
      'There is no difference',
      'The script is smarter',
      'The worker decides and adapts with AI to new situations; the script executes fixed steps without reasoning',
      'The worker only works during the day'
    ],
    correctIndex: 2,
    explanation: 'The script fails if something changes (a different format); the worker reasons and adapts. Same automation, different resilience.',
    difficulty: 'intermediate',
    concept: 'Worker vs script'
  },
  {
    id: 'm13-q09',
    moduleId: 'm13',
    question: 'Can an assistant delegate work to workers?',
    options: [
      'No, they are incompatible',
      'Yes: the assistant serves the user and assigns subtasks to specialized workers',
      'Only if they are from the same company',
      'Only on weekends'
    ],
    correctIndex: 1,
    explanation: 'It is a common pattern: you talk to the assistant and it distributes the work among workers (one searches data, another generates the report) and presents you the result.',
    difficulty: 'basic',
    concept: 'Assistant→worker delegation'
  },
  // ==================== MODULE 14: frontend and backend ====================
  {
    id: 'm14-q01',
    moduleId: 'm14',
    question: 'What is an application\'s frontend?',
    options: [
      'The database',
      'The server where the files are hosted',
      'The network cable',
      'The visible part that the user sees and interacts with in their browser or screen'
    ],
    correctIndex: 3,
    explanation: 'Buttons, texts, images, forms: everything you see and touch is frontend. It runs on your device (browser, app).',
    difficulty: 'basic',
    concept: 'Frontend definition'
  },
  {
    id: 'm14-q02',
    moduleId: 'm14',
    question: 'What is an application\'s backend?',
    options: [
      'The invisible part: server, logic and database that process requests',
      'The website\'s colors',
      'The company logo',
      'The phone screen'
    ],
    correctIndex: 0,
    explanation: 'The backend is the "kitchen": it receives orders from the frontend, applies rules, queries the database and returns results. The user never sees it.',
    difficulty: 'basic',
    concept: 'Backend definition'
  },
  {
    id: 'm14-q03',
    moduleId: 'm14',
    question: 'What is the difference between frontend and backend?',
    options: [
      'There is no difference, they are the same',
      'The backend is visible and the frontend invisible',
      'The frontend presents and interacts with the user; the backend processes, stores data and applies business rules',
      'The frontend is always more expensive to develop'
    ],
    correctIndex: 2,
    explanation: 'Division of roles: the frontend handles the experience; the backend, the logic and data. They communicate via requests.',
    difficulty: 'intermediate',
    concept: 'Frontend vs backend'
  },
  {
    id: 'm14-q04',
    moduleId: 'm14',
    question: 'What is the client-server model?',
    options: [
      'A very expensive type of computer',
      'The client (frontend) asks and the server (backend) responds: two separate roles that communicate',
      'A program for chatting',
      'A social network'
    ],
    correctIndex: 1,
    explanation: 'It is the base architecture of the web: your browser (client) requests and the server delivers. Each side can scale and change separately.',
    difficulty: 'intermediate',
    concept: 'Client / Server'
  },
  {
    id: 'm14-q05',
    moduleId: 'm14',
    question: 'What are a request and a response?',
    options: [
      'Two types of virus',
      'The client sends a petition (request) and the server returns an answer (response)',
      'Two programming languages',
      'The user\'s first and last name'
    ],
    correctIndex: 1,
    explanation: 'All web communication is a question-answer dialogue: "give me the products" (request) → the product list (response).',
    difficulty: 'intermediate',
    concept: 'Request / Response'
  },
  {
    id: 'm14-q06',
    moduleId: 'm14',
    question: 'What is an endpoint?',
    options: [
      'The end of the network cable',
      'The concrete backend "address" the frontend asks something of, e.g. /api/products',
      'A type of plug',
      'The last page of a book'
    ],
    correctIndex: 1,
    explanation: 'The backend offers many functions; each endpoint is a concrete "counter": /api/products lists products, /api/login authenticates...',
    difficulty: 'advanced',
    concept: 'Endpoint'
  },
  {
    id: 'm14-q07',
    moduleId: 'm14',
    question: 'Why are frontend and backend separated instead of doing everything together?',
    options: [
      'To scale, maintain and secure each part separately, and reuse the backend in several apps',
      'Because it is mandatory by law',
      'Because that way it is slower',
      'There is no technical reason'
    ],
    correctIndex: 0,
    explanation: 'Separation allows changing the design without touching the logic, web and mobile app sharing the same backend, and protecting data on the server.',
    difficulty: 'advanced',
    concept: 'Separation of concerns'
  },
  {
    id: 'm14-q08',
    moduleId: 'm14',
    question: 'In an online store, which part is frontend and which is backend?',
    options: [
      'Everything is frontend',
      'Everything is backend',
      'The visible catalog with photos and buttons is frontend; stock calculation, payment and orders are backend',
      'The frontend is the physical warehouse'
    ],
    correctIndex: 2,
    explanation: 'What you see (catalog) is frontend; what decides (is there stock?, is the payment valid?) happens in the backend, where the real data lives.',
    difficulty: 'intermediate',
    concept: 'Example: online store'
  },
  {
    id: 'm14-q09',
    moduleId: 'm14',
    question: 'Where must a card payment really be validated?',
    options: [
      'In the browser\'s JavaScript, to go faster',
      'In the confirmation email',
      'In the user\'s mind',
      'In the backend: the frontend can be manipulated, the real validation must be on the server'
    ],
    correctIndex: 3,
    explanation: 'The browser code is controlled by the user and can be altered. Only the server is a trustworthy environment for critical decisions like payments.',
    difficulty: 'basic',
    concept: 'Server-side validation'
  },
];
