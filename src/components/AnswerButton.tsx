import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

// Reusable answer button (Lesson 1). Pressable wraps the content (Lesson 3 tip).
// status is "normal", "correct" (green), or "wrong" (red).
type Props = {
  letter: string;
  label: string;
  status: string;
  onPress: () => void;
};

export default function AnswerButton({ letter, label, status, onPress }: Props) {
  // Choose the styles and the mark with if / else.
  let buttonStyle = styles.normal;
  let badgeStyle = styles.badge;
  let letterStyle = styles.letter;
  let labelStyle = styles.label;
  let mark = '';

  if (status === 'correct') {
    buttonStyle = styles.correct;
    badgeStyle = styles.badgeLight;
    letterStyle = styles.letterLight;
    labelStyle = styles.labelLight;
    mark = '✓';
  } else if (status === 'wrong') {
    buttonStyle = styles.wrong;
    badgeStyle = styles.badgeLight;
    letterStyle = styles.letterLight;
    labelStyle = styles.labelLight;
    mark = '✗';
  }

  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <View style={badgeStyle}>
        <Text style={letterStyle}>{letter}</Text>
      </View>
      <Text style={labelStyle}>{label}</Text>
      <Text style={styles.mark}>{mark}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  normal: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
  },
  correct: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.success,
    borderWidth: 1.5,
    borderColor: Colors.success,
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
  },
  wrong: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.danger,
    borderWidth: 1.5,
    borderColor: Colors.danger,
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
  },
  badge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EEF0FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  badgeLight: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  letter: { fontSize: 15, fontWeight: 'bold', color: Colors.primary },
  letterLight: { fontSize: 15, fontWeight: 'bold', color: '#FFFFFF' },
  label: { flex: 1, fontSize: 15, color: Colors.text },
  labelLight: { flex: 1, fontSize: 15, color: '#FFFFFF', fontWeight: 'bold' },
  mark: { fontSize: 20, color: '#FFFFFF', fontWeight: 'bold', marginLeft: 8 },
});