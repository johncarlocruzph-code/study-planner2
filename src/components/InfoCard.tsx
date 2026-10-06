import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

// Reusable card that shows one title and its description (Lesson 1).
type Props = {
  title: string;
  description: string;
};

export default function InfoCard({ title, description }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    marginBottom: 12,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: Colors.primary, marginBottom: 8 },
  description: { fontSize: 16, color: Colors.text },
});