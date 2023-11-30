export const questions = {
  I:[
    {
      question: '¿Cuánto es 3-2?',
      options: [3, 1, 2, 0],
      correctAnswer: 1,
    },
    {
      question: '¿Cuánto es 5-1?',
      options: [4, 3, 2, 1],
      correctAnswer: 4,
    },
    {
      question: '¿Cuánto es 4-2?',
      options: [4, 1, 2, 3],
      correctAnswer: 2,
    },
    {
      question: '¿Cuánto es 6-3?',
      options: [5, 2, 3, 1],
      correctAnswer: 3,
    },
    {
      question: '¿Cuánto es 4-3?',
      options: [5, 2, 7, 1],
      correctAnswer: 1,
    }
  ],
  II:[
    {
      question: '¿Cuánto es 7-2?',
      options: [6, 5, 4, 2],
      correctAnswer: 5,
    },
    {
      question: '¿Cuánto es 8-4?',
      options: [6, 5, 4, 7],
      correctAnswer: 4,
    },
    {
      question: '¿Cuánto es 9-1?',
      options: [2, 8, 10, 5],
      correctAnswer: 8,
    },
    {
      question: '¿Cuánto es 10-3?',
      options: [1, 3, 5, 7],
      correctAnswer: 7,
    },
    {
      question: '¿Cuánto es 7-6?',
      options: [3, 1, 5, 7],
      correctAnswer: 1,
    }
  ]
}

export const getQuestionsByLevelRestas = (level) => {
  // Verifica si el nivel existe en el objeto de preguntas
  if (questions.hasOwnProperty(level)) {
    return questions[level];
  } else {
    console.error(`No hay preguntas para el nivel ${level}`);
    return [];
  }
};