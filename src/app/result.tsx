import { router, useLocalSearchParams } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import ScoreCard from '../components/ScoreCard';
import { Colors } from '../constants/colors';
import { getCategoryById } from '../data/questions';

// Result screen, route "/result?score=4&total=5&category=web"
export default function ResultScreen() {
  // Route parameters are optional text values (Lesson 5).
  const { score, total, category } = useLocalSearchParams<{
    score?: string;
    total?: string;
    category?: string;
  }>();

  // Handle missing parameters instead of assuming they exist.
  if (!score || !total) {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>No result yet</Text>
        <Button title="Back to Home" onPress={() => router.push('/')} color={Colors.primary} />
      </View>
    );
  }

  // Params arrive as text, so convert them to numbers.
  const scoreNumber = Number(score);
  const totalNumber = Number(total);

  // Nested ternary operators choose the message (Lesson 5).
  const message =
    scoreNumber === totalNumber
      ? 'Perfect! You are a BSIT star!'
      : scoreNumber >= totalNumber / 2
      ? 'Good job! Keep learning.'
      : 'Keep practicing, you can do it!';

  const categoryInfo = getCategoryById(category);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>
        {categoryInfo ? categoryInfo.title + ' Quiz' : 'Quiz'} Finished
      </Text>

      <ScoreCard score={scoreNumber} total={totalNumber} message={message} />

      <View style={styles.buttons}>
        <Button
          title="Play Again"
          onPress={() => router.push({ pathname: '/quiz', params: { category: category } })}
          color={Colors.primary}
        />
      </View>
      <View style={styles.buttons}>
        <Button title="Choose Another Category" onPress={() => router.push('/')} color={Colors.accent} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: Colors.text, marginBottom: 16 },
  buttons: { marginBottom: 10 },
});