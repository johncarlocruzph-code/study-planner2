import { Stack } from 'expo-router';

// Root layout (Lesson 4): the Stack gives every screen a header and Back button.
// Each Stack.Screen only sets the header title of its file route.
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'BSIT Quiz Game' }} />
      <Stack.Screen name="quiz" options={{ title: 'Quiz' }} />
      <Stack.Screen name="result" options={{ title: 'Result' }} />
    </Stack>
  );
}