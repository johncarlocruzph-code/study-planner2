import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

// Reusable card that shows the final score (Lesson 1).
type Props = {
  emoji: string;
  score: number;
  total: number;
  percent: number;
  message: string;
};

export default function ScoreCard({ emoji, score, total, percent, message }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.label}>Your Score</Text>
      <Text style={styles.score}>
        {score} / {total}
      </Text>
      <Text style={styles.percent}>{percent}%</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
  },
  emoji: { fontSize: 56 },
  label: { color: '#E0E7FF', fontSize: 15, marginTop: 6 },
  score: { color: '#FFFFFF', fontSize: 52, fontWeight: 'bold', marginVertical: 4 },
  percent: { color: '#C7D2FE', fontSize: 18, fontWeight: 'bold' },
  message: { color: Colors.accent, fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginTop: 12 },
});