export const questions = {
  I: [
    {
      question: '¿Cuánto es 4/2?',
      options: [2, 4, 6, 8],
      correctAnswer: 2,
    },
    {
      question: '¿Cuánto es 5/1?',
      options: [3, 2, 1, 5],
      correctAnswer: 5,
    },
    {
      question: '¿Cuánto es 4/4?',
      options: [0, 3, 2, 1],
      correctAnswer: 1,
    },
    {
      question: '¿Cuánto es 6/2?',
      options: [1, 2, 3, 4],
      correctAnswer: 3,
    },
    {
      question: '¿Cuánto es 7/7?',
      options: [1, 2, 5, 7],
      correctAnswer: 1,
    }
  ],
  II: [
    {
      question: '¿Cuánto es 6/1?',
      options: [2, 6, 3, 7],
      correctAnswer: 6,
    },
    {
      question: '¿Cuánto es 8/4?',
      options: [7, 6, 4, 2],
      correctAnswer: 2,
    },
    {
      question: '¿Cuánto es 9/3?',
      options: [1, 2, 3, 6],
      correctAnswer: 3,
    },
    {
      question: '¿Cuánto es 10/2?',
      options: [2, 5, 6, 8],
      correctAnswer: 5,
    },
    {
      question: '¿Cuánto es 10/5?',
      options: [2, 5, 1, 4],
      correctAnswer: 2,
    }
  ]
}

export const getQuestionsByLevelDiv = (level) => {
  // Verifica si el nivel existe en el objeto de preguntas
  if (questions.hasOwnProperty(level)) {
    return questions[level];
  } else {
    console.error(`No hay preguntas para el nivel ${level}`);
    return [];
  }
};