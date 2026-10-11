import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AnswerButton from '../components/AnswerButton';
import InfoCard from '../components/InfoCard';
import { Colors } from '../constants/colors';
import { getQuestionsByCategory } from '../data/questions';

// Quiz screen, route "/quiz?category=web"
export default function QuizScreen() {
  // Read the route parameter (Lesson 5). It is optional, so it may be missing.
  const { category } = useLocalSearchParams<{ category?: string }>();
  const questionList = getQuestionsByCategory(category);

  // State (Lesson 3). selected: -1 = not answered yet, -2 = time is up.
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(-1);
  const [secondsLeft, setSecondsLeft] = useState(10);

  // useEffect (Lesson 6): the side effect is a countdown timer. It stays offline.
  // The effect runs again whenever selected changes (dependency array).
  // When time reaches 0, mark as time up. Cleanup stops the old timer first.
  useEffect(() => {
    if (selected !== -1) {
      return;
    }
    const timerId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev - 1 <= 0) {
          setSelected(-2);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, [selected]);

  const question = questionList[index];

  // Handle a missing or unknown category instead of assuming it exists (Lesson 5).
  if (!question) {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>No questions found</Text>
        <Button title="Back to Home" onPress={() => router.push('/')} color={Colors.primary} />
      </View>
    );
  }

  // Called when the user taps an answer.
  const chooseAnswer = (choiceIndex: number) => {
    if (selected !== -1) {
      return;
    }
    setSelected(choiceIndex);
    if (choiceIndex === question.answer) {
      setScore(score + 1);
    }
  };

  // Go to the next question, or to the result screen after the last one.
  const nextQuestion = () => {
    if (index + 1 < questionList.length) {
      setIndex(index + 1);
      setSelected(-1);
      setSecondsLeft(10);
    } else {
      router.push({
        pathname: '/result',
        params: { score: score, total: questionList.length, category: category },
      });
    }
  };

  // Decide the color of each answer after the user has answered.
  const getStatus = (choiceIndex: number) => {
    if (selected === -1) {
      return 'normal';
    }
    if (choiceIndex === question.answer) {
      return 'correct';
    }
    if (choiceIndex === selected) {
      return 'wrong';
    }
    return 'normal';
  };

  return (
    <View style={styles.screen}>
      <View style={styles.topRow}>
        <Text style={styles.info}>Score: {score}</Text>
        <Text style={styles.timer}>Time: {secondsLeft}s</Text>
      </View>

      <InfoCard
        title={'Question ' + (index + 1) + ' of ' + questionList.length}
        description={question.question}
      />

      {/* map() builds one button per choice (Lesson 6 idea). */}
      {question.choices.map((choice, choiceIndex) => (
        <AnswerButton
          key={choiceIndex}
          label={choice}
          status={getStatus(choiceIndex)}
          onPress={() => chooseAnswer(choiceIndex)}
        />
      ))}

      {/* Ternary operators show messages and the Next button (Lesson 5). */}
      {selected === -2 ? <Text style={styles.timeUp}>Time is up!</Text> : null}
      {selected !== -1 ? (
        <Button
          title={index + 1 < questionList.length ? 'Next Question' : 'See Result'}
          onPress={nextQuestion}
          color={Colors.primary}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: Colors.text, marginBottom: 16 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  info: { fontSize: 16, fontWeight: 'bold', color: Colors.text },
  timer: { fontSize: 16, fontWeight: 'bold', color: Colors.danger },
  timeUp: { fontSize: 16, color: Colors.danger, marginBottom: 10, textAlign: 'center' },
});