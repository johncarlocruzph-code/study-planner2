import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import ScoreCard from '../components/ScoreCard';
import { Colors } from '../constants/colors';
import { getCategoryById } from '../data/questions';

// Result screen, route "/result?score=15&total=20&category=python&name=Carlo"
export default function ResultScreen() {
  // Route parameters are optional text values (Lesson 5).
  const { score, total, category, name } = useLocalSearchParams<{
    score?: string;
    total?: string;
    category?: string;
    name?: string;
  }>();

  // Handle missing parameters instead of assuming they exist.
  if (!score || !total) {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>No result yet</Text>
        <AppButton label="Back to Home" color={Colors.primary} onPress={() => router.push('/')} />
      </View>
    );
  }

  // Params arrive as text, so convert them to numbers.
  const scoreNumber = Number(score);
  const totalNumber = Number(total);
  const percent = (scoreNumber * 100) / totalNumber;

  // Choose the emoji and message with if / else.
  let emoji = '💪';
  let message = 'Keep practicing, you can do it!';
  if (scoreNumber === totalNumber) {
    emoji = '🏆';
    message = 'Perfect! You are a BSIT star!';
  } else if (percent >= 75) {
    emoji = '🎉';
    message = 'Great job! Almost perfect.';
  } else if (percent >= 50) {
    emoji = '👍';
    message = 'Good job! Keep learning.';
  }

  const categoryInfo = getCategoryById(category);

  return (
    <View style={styles.screen}>
      {/* Ternary operators choose the title and the greeting (Lesson 5). */}
      <Text style={styles.title}>
        {categoryInfo ? categoryInfo.title + ' Quiz' : 'Quiz'} Finished
      </Text>
      <Text style={styles.greeting}>{name ? 'Well done, ' + name + '!' : 'Well done!'}</Text>

      <ScoreCard
        emoji={emoji}
        score={scoreNumber}
        total={totalNumber}
        percent={percent}
        message={message}
      />

      <AppButton
        label="Play Again"
        color={categoryInfo ? categoryInfo.color : Colors.primary}
        onPress={() =>
          router.push({ pathname: '/quiz', params: { category: category, name: name } })
        }
      />
      <AppButton
        label="Choose Another Quiz"
        color={Colors.primaryDark}
        onPress={() => router.push({ pathname: '/', params: { name: name } })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background, padding: 20, paddingTop: 24 },
  title: { fontSize: 24, fontWeight: 'bold', color: Colors.text, textAlign: 'center' },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 20,
  },
});