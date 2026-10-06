import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../constants/colors';

// Reusable answer button (Lesson 1). Pressable wraps Text (Lesson 3 tip).
// status changes the color: normal, correct (green), or wrong (red).
type Props = {
  label: string;
  status: 'normal' | 'correct' | 'wrong';
  onPress: () => void;
};

export default function AnswerButton({ label, status, onPress }: Props) {
  return (
    <Pressable
      style={[
        styles.button,
        status === 'correct' && styles.correct,
        status === 'wrong' && styles.wrong,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.label, status !== 'normal' && styles.labelLight]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  correct: { backgroundColor: Colors.success, borderColor: Colors.success },
  wrong: { backgroundColor: Colors.danger, borderColor: Colors.danger },
  label: { fontSize: 16, color: Colors.text },
  labelLight: { color: '#FFFFFF', fontWeight: 'bold' },
});