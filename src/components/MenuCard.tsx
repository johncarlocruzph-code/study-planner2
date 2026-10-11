import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

// Reusable category card (Lesson 1: component-driven UI).
// Pressable wraps the content to make a custom-styled button (Lesson 3 tip).
type Props = {
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  onPress: () => void;
};

export default function MenuCard({ icon, title, subtitle, color, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      {/* The circle color comes from props, so the style is written inline (Lesson 1). */}
      <View
        style={{
          width: 46,
          height: 46,
          borderRadius: 23,
          backgroundColor: color + '22',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 14,
        }}
      >
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ fontSize: 13, fontWeight: 'bold', color: color, marginTop: 2 }}>{subtitle}</Text>
      </View>
      <Text style={{ fontSize: 28, color: color }}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderRadius: 18,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  icon: { fontSize: 24 },
  textBox: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', color: Colors.text },
});