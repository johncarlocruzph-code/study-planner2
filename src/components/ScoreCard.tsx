import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

// Reusable card that shows the final score and a message (Lesson 1).
type Props = {
  score: number;
  total: number;
  message: string;
};

export default function ScoreCard({ score, total, message }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Your Score</Text>
      <Text style={styles.score}>
        {score} / {total}
      </Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  label: { color: '#FFFFFF', fontSize: 16 },
  score: { color: '#FFFFFF', fontSize: 48, fontWeight: 'bold', marginVertical: 8 },
  message: { color: Colors.accent, fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});