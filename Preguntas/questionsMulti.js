export const questions = {
  I: [
    {
      question: '¿Cuánto es 2x3?',
      options: [11, 4, 6, 9],
      correctAnswer: 6,
    },
    {
      question: '¿Cuánto es 1x2?',
      options: [4, 2, 3, 6],
      correctAnswer: 2,
    },
    {
      question: '¿Cuánto es 4x3?',
      options: [3, 6, 9, 12],
      correctAnswer: 12,
    },
    {
      question: '¿Cuánto es 5x2?',
      options: [10, 11, 12, 5],
      correctAnswer: 10,
    },
    {
      question: '¿Cuánto es 3x3?',
      options: [3, 9, 4, 7],
      correctAnswer: 9,
    }
  ],
  II: [
    {
      question: '¿Cuánto es 5x4?',
      options: [15, 20, 10, 5],
      correctAnswer: 20,
    },
    {
      question: '¿Cuánto es 7x3?',
      options: [12, 14, 16, 21],
      correctAnswer: 21,
    },
    {
      question: '¿Cuánto es 2x8?',
      options: [9, 14, 16, 12],
      correctAnswer: 16,
    },
    {
      question: '¿Cuánto es 9x2?',
      options: [18, 15, 19, 12],
      correctAnswer: 18,
    },
    {
      question: '¿Cuánto es 10x1?',
      options: [1, 10, 0, 11],
      correctAnswer: 10,
    }
  ]
}

export const getQuestionsByLevelMulti = (level) => {
  // Verifica si el nivel existe en el objeto de preguntas
  if (questions.hasOwnProperty(level)) {
    return questions[level];
  } else {
    console.error(`No hay preguntas para el nivel ${level}`);
    return [];
  }
};