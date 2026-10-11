import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

// Reusable card that shows a small title and a big description (Lesson 1).
// The color comes from props, so the card style is written inline.
type Props = {
  title: string;
  description: string;
  color: string;
};

export default function InfoCard({ title, description, color }: Props) {
  return (
    <View
      style={{
        backgroundColor: Colors.card,
        borderRadius: 18,
        padding: 16,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: Colors.border,
        borderLeftWidth: 6,
        borderLeftColor: color,
      }}
    >
      <Text style={{ fontSize: 13, fontWeight: 'bold', color: color, marginBottom: 6 }}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  description: { fontSize: 18, fontWeight: 'bold', color: Colors.text },
});