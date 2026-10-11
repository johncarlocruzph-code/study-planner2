import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

// Reusable wide card for the two groups on the Home screen (Lesson 1).
type Props = {
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  onPress: () => void;
};

export default function GroupCard({ icon, title, subtitle, color, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 18,
          backgroundColor: color,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 16,
        }}
      >
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Text style={{ fontSize: 30, color: color }}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  icon: { fontSize: 28 },
  textBox: { flex: 1 },
  title: { fontSize: 17, fontWeight: 'bold', color: Colors.text },
  subtitle: { fontSize: 13, color: Colors.muted, marginTop: 4 },
});