export const questions = {
  I: [
    {
      question: '¿Cuánto es 3+4?',
      options: [8, 4, 7, 9],
      correctAnswer: 7,
    },
    {
      question: '¿Cuánto es 6+2?',
      options: [8, 9, 7, 5],
      correctAnswer: 8,
    },
    {
      question: '¿Cuánto es 5+5?',
      options: [11, 9, 10, 8],
      correctAnswer: 10,
    },
    {
      question: '¿Cuánto es 2+1?',
      options: [8, 6, 4, 3],
      correctAnswer: 3,
    },
    {
      question: '¿Cuánto es 2+2?',
      options: [3, 4, 6, 8],
      correctAnswer: 4,
    },
  ],
  II: [
    {
      question: '¿Cuánto es 6+6?',
      options: [10, 11, 12, 13],
      correctAnswer: 12,
    },
    {
      question: '¿Cuánto es 7+2?',
      options: [9, 10, 6, 11],
      correctAnswer: 9,
    },
    {
      question: '¿Cuánto es 6+4?',
      options: [12, 11, 10, 9],
      correctAnswer: 10,
    },
    {
      question: '¿Cuánto es 7+7?',
      options: [10, 11, 12, 14],
      correctAnswer: 14,
    },
    {
      question: '¿Cuánto es 8+8?',
      options: [12, 15, 16, 14],
      correctAnswer: 16,
    }
  ]
}

export const getQuestionsByLevelSumas = (level) => {
  // Verifica si el nivel existe en el objeto de preguntas
  if (questions.hasOwnProperty(level)) {
    return questions[level];
  } else {
    console.error(`No hay preguntas para el nivel ${level}`);
    return [];
  }
};