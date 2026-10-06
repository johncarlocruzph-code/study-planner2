import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../constants/colors';

// Reusable menu card (Lesson 1: component-driven UI).
// Pressable wraps Text to make a custom-styled button (Lesson 3 tip).
type Props = {
  icon: string;
  title: string;
  onPress: () => void;
};

export default function MenuCard({ icon, title, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: Colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  icon: { fontSize: 26 },
  title: { fontSize: 13, fontWeight: 'bold', color: Colors.text, marginTop: 4, textAlign: 'center' },
});