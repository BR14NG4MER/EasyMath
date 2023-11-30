// QuizScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import { CustomButton } from '../Componentes/Buttons';
import { questions } from '../questions';

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  useEffect(() => {
    // Puedes realizar acciones adicionales al cambiar de pregunta
  }, [currentQuestion]);

  return (
    <View>
      {showResult ? (
        <View>
          <Text>Resultado: {score} / {questions.length}</Text>
          {/* Puedes agregar más elementos o acciones después de mostrar el resultado */}
        </View>
      ) : (
        <View>
          <Text>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <CustomButton
              key={index}
              backgroundColor='red' // Puedes personalizar estos valores según tu necesidad
              text={option}
              largo='50'
              onPress={() => handleAnswer(option)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default QuizScreen;
