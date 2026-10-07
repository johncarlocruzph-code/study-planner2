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
  // Ternary operators choose the style (Lesson 5).
  const buttonStyle =
    status === 'correct' ? styles.correct : status === 'wrong' ? styles.wrong : styles.normal;
  const labelStyle = status === 'normal' ? styles.label : styles.labelLight;

  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={labelStyle}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  normal: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  correct: {
    backgroundColor: Colors.success,
    borderWidth: 1,
    borderColor: Colors.success,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  wrong: {
    backgroundColor: Colors.danger,
    borderWidth: 1,
    borderColor: Colors.danger,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  label: { fontSize: 16, color: Colors.text },
  labelLight: { fontSize: 16, color: '#FFFFFF', fontWeight: 'bold' },
});