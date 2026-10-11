import { Pressable, StyleSheet, Text } from 'react-native';

// Reusable big button (Lesson 1). Pressable wraps Text (Lesson 3 tip).
type Props = {
  label: string;
  color: string;
  onPress: () => void;
};

export default function AppButton({ label, color, onPress }: Props) {
  return (
    <Pressable
      style={{
        backgroundColor: color,
        borderRadius: 16,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 10,
      }}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  label: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});