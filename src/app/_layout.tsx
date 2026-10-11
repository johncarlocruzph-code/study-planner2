import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="group" options={{ title: 'Group' }} />
      <Stack.Screen name="quiz" options={{ title: 'Quiz' }} />
    </Stack>
  );
}