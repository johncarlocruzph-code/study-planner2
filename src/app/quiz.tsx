import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnswerButton from '../components/AnswerButton';
import AppButton from '../components/AppButton';
import InfoCard from '../components/InfoCard';
import ProgressBar from '../components/ProgressBar';
import { Colors } from '../constants/colors';
import { getCategoryById, getQuestionsByCategory } from '../data/questions';
import { shuffleQuestions } from '../data/shuffle';

const letters = ['A', 'B', 'C', 'D'];

// Quiz screen, route "/quiz?category=javascript&name=Carlo"
export default function QuizScreen() {
  // Read the route parameters (Lesson 5). Both are optional, so they may be missing.
  const { category, name } = useLocalSearchParams<{ category?: string; name?: string }>();
  const categoryInfo = getCategoryById(category);
  const color = categoryInfo ? categoryInfo.color : Colors.primary;

  // State (Lesson 3). The questions are shuffled once and useState keeps the same order.
  const [questionList] = useState(shuffleQuestions(getQuestionsByCategory(category)));
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  // selected: -1 = not answered yet, -2 = time is up.
  const [selected, setSelected] = useState(-1);
  const [secondsLeft, setSecondsLeft] = useState(10);

  // useEffect (Lesson 6): the side effect is a countdown timer. It stays offline.
  // The effect runs again whenever secondsLeft or selected changes (dependency array),
  // so each run counts down one second. Cleanup stops the old timer first.
  useEffect(() => {
    if (selected !== -1) {
      return;
    }
    const timerId = setInterval(() => {
      if (secondsLeft <= 1) {
        // Time is up: show 0 and mark the question as not answered in time.
        setSecondsLeft(0);
        setSelected(-2);
      } else {
        setSecondsLeft(secondsLeft - 1);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [secondsLeft, selected]);

  const question = questionList[index];

  // Handle a missing or unknown category instead of assuming it exists (Lesson 5).
  if (!question) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyTitle}>No questions found</Text>
        <AppButton label="Back to Home" color={Colors.primary} onPress={() => router.push('/')} />
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
        params: { score: score, total: questionList.length, category: category, name: name },
      });
    }
  };

  // Decide the look of each answer after the user has answered.
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

  const percent = ((index + 1) / questionList.length) * 100;

  return (
    <View style={styles.screen}>
      {/* Header band. The color comes from the category, so the style is inline. */}
      <View
        style={{
          backgroundColor: color,
          paddingTop: 16,
          paddingHorizontal: 20,
          paddingBottom: 16,
          borderBottomLeftRadius: 28,
          borderBottomRightRadius: 28,
        }}
      >
        <View style={styles.row}>
          <Text style={styles.categoryTitle}>
            {categoryInfo ? categoryInfo.icon + '  ' + categoryInfo.title : 'Quiz'}
          </Text>
          <View style={styles.pill}>
            <Text style={styles.pillText}>
              {name ? name + ': ' + score : 'Score: ' + score}
            </Text>
          </View>
        </View>

        <ProgressBar percent={percent} />

        <View style={styles.rowTop}>
          <Text style={styles.small}>
            Question {index + 1} of {questionList.length}
          </Text>
          {/* Ternary operator turns the timer red in the last 3 seconds (Lesson 5). */}
          <View
            style={{
              backgroundColor: secondsLeft <= 3 ? Colors.danger : 'rgba(255,255,255,0.25)',
              paddingHorizontal: 12,
              paddingVertical: 4,
              borderRadius: 12,
            }}
          >
            <Text style={styles.pillText}>⏱ {secondsLeft}s</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <InfoCard title="Question" description={question.question} color={color} />

        {/* map() builds one button per choice (Lesson 6 idea). */}
        {question.choices.map((choice, choiceIndex) => (
          <AnswerButton
            key={choiceIndex}
            letter={letters[choiceIndex]}
            label={choice}
            status={getStatus(choiceIndex)}
            onPress={() => chooseAnswer(choiceIndex)}
          />
        ))}

        {/* Ternary operators show messages and the Next button (Lesson 5). */}
        {selected === -2 ? <Text style={styles.timeUp}>⏰ Time is up!</Text> : null}
        {selected !== -1 ? (
          <AppButton
            label={index + 1 < questionList.length ? 'Next Question' : 'See Result'}
            color={color}
            onPress={nextQuestion}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  empty: { flex: 1, backgroundColor: Colors.background, padding: 24, justifyContent: 'center' },
  emptyTitle: { fontSize: 22, fontWeight: 'bold', color: Colors.text, marginBottom: 16, textAlign: 'center' },
  body: { padding: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  rowTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  pill: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pillText: { color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' },
  categoryTitle: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' },
  small: { color: '#FFFFFF', fontSize: 14 },
  timeUp: { fontSize: 16, color: Colors.danger, marginBottom: 10, textAlign: 'center', fontWeight: 'bold' },
});