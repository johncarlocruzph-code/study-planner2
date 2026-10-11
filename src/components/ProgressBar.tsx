import { StyleSheet, View } from 'react-native';

// Reusable progress bar (Lesson 1). percent goes from 0 to 100.
type Props = {
  percent: number;
};

export default function ProgressBar({ percent }: Props) {
  return (
    <View style={styles.track}>
      <View style={{ height: 8, borderRadius: 4, backgroundColor: '#FFFFFF', width: `${percent}%` }} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
});