// QuizScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { CustomButton } from '../../Componentes/Buttons';
import Styles from '../../Componentes/Styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getQuestionsByLevelSumas } from '../../Preguntas/questionsSumas';

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizState, setQuizState] = useState('ongoing');
  const navigation = useNavigation();
  const route = useRoute();
  const { nivel } = route.params;

  const handleAnswer = (selectedOption) => {
    if (quizState === 'ongoing') {
      const questions = getQuestionsByLevelSumas(nivel);
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      if (currentQuestion === questions.length - 1) {
        setQuizState('completed');
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  };

  const handleRestart = () => {
    setQuizState('ongoing');
    setCurrentQuestion(0);
    setScore(0);
  };

  useEffect(() => {
    // Puedes realizar acciones adicionales al cambiar de pregunta
  }, [currentQuestion]);

  return (
    <View style={{ ...Styles.container, justifyContent: 'center' }}>
      {quizState === 'completed' ? (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: 40 }}>Resultado: {score} / {getQuestionsByLevelSumas(nivel).length}</Text>
          <CustomButton backgroundColor='red' text="Regresar al Menú" onPress={() => navigation.navigate('Sumas')} />
          <CustomButton backgroundColor='green' text="Reiniciar Nivel" onPress={handleRestart} />
          {/* Puedes agregar más elementos o acciones después de mostrar el resultado */}
        </View>
      ) : (
        <View>
          <Text style={{ fontSize: 40, alignSelf: 'center', margin: 15, color: "#f1f1f1" }}>{getQuestionsByLevelSumas(nivel)[currentQuestion].question}</Text>
          {getQuestionsByLevelSumas(nivel)[currentQuestion].options.map((option, index) => (
            <CustomButton
              key={index}
              backgroundColor='red' // Puedes personalizar estos valores según tu necesidad
              text={option}
              onPress={() => handleAnswer(option)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default QuizScreen;