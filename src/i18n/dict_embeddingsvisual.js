/**
 * EmbeddingsVisual strings, namespaced "embeddingsvisual.".
 * Sample words are translated to their English equivalents (dog, cat...).
 */
export const dict = {
  es: {
    'embeddingsvisual.title': 'Mapa de embeddings (2D simplificado)',
    'embeddingsvisual.sub':
      'Cada palabra es un vector numérico. En los modelos reales tienen miles de dimensiones; aquí las vemos proyectadas en 2D. Pasa el ratón sobre un punto para ver sus coordenadas.',
    'embeddingsvisual.show_similarities': 'Mostrar similitudes',
    'embeddingsvisual.tooltip': '{w} → coordenadas ({x}, {y})',
    'embeddingsvisual.legend_label': 'Leyenda:',
    'embeddingsvisual.legend_body':
      'las palabras con significado parecido («{dog}», «{cat}», «{puppy}») quedan cerca entre sí: sus vectores apuntan casi en la misma dirección (similitud 96 % y 93 %). «{car}» está lejos (21 %): comparte poco significado. Así «entiende» el modelo el lenguaje: no con definiciones, sino con',
    'embeddingsvisual.legend_em': 'distancias numéricas entre vectores',
    'embeddingsvisual.word.dog': 'perro',
    'embeddingsvisual.word.cat': 'gato',
    'embeddingsvisual.word.puppy': 'cachorro',
    'embeddingsvisual.word.car': 'coche',
    'embeddingsvisual.word.plane': 'avión',
    'embeddingsvisual.word.apple': 'manzana',
    'embeddingsvisual.word.banana': 'plátano',
  },
  en: {
    'embeddingsvisual.title': 'Embedding map (simplified 2D)',
    'embeddingsvisual.sub':
      'Each word is a numeric vector. In real models they have thousands of dimensions; here we see them projected in 2D. Hover over a point to see its coordinates.',
    'embeddingsvisual.show_similarities': 'Show similarities',
    'embeddingsvisual.tooltip': '{w} → coordinates ({x}, {y})',
    'embeddingsvisual.legend_label': 'Legend:',
    'embeddingsvisual.legend_body':
      'words with similar meanings ("{dog}", "{cat}", "{puppy}") sit close together: their vectors point almost in the same direction (similarity 96% and 93%). "{car}" is far away (21%): it shares little meaning. That is how the model "understands" language: not through definitions, but through',
    'embeddingsvisual.legend_em': 'numeric distances between vectors',
    'embeddingsvisual.word.dog': 'dog',
    'embeddingsvisual.word.cat': 'cat',
    'embeddingsvisual.word.puppy': 'puppy',
    'embeddingsvisual.word.car': 'car',
    'embeddingsvisual.word.plane': 'plane',
    'embeddingsvisual.word.apple': 'apple',
    'embeddingsvisual.word.banana': 'banana',
  },
};
