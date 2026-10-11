import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import GroupCard from '../components/GroupCard';
import { Colors } from '../constants/colors';

// Home screen, route "/". The user types a name and chooses a group of quizzes.
export default function HomeScreen() {
  // When the user comes back from the Result screen, the name arrives as a route parameter (Lesson 5).
  const { name: savedName } = useLocalSearchParams<{ name?: string }>();

  // State (Lesson 3) keeps what the user types.
  const [name, setName] = useState(savedName ? savedName : '');
  const cleanName = name.trim();

  // Ternary operator chooses the greeting (Lesson 5).
  const greeting = cleanName === '' ? 'Welcome!' : 'Hi, ' + cleanName + '!';

  return (
    <View style={styles.screen}>
      <View style={styles.banner}>
        <Text style={styles.title}>🎓 BSIT Quiz</Text>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.subtitle}>20 questions per topic, 10 seconds each.</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.heading}>Your name</Text>
        {/* TextInput sends every change to the state with onChangeText (Lesson 3). */}
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.heading}>Choose a group</Text>

        {/* router.push inside an event handler. The group and the name are sent (Lesson 5). */}
        <GroupCard
          icon="💻"
          title="Programming Languages"
          subtitle="JavaScript, Python, Java, PHP"
          color="#4F46E5"
          onPress={() =>
            router.push({ pathname: '/group', params: { group: 'languages', name: cleanName } })
          }
        />
        <GroupCard
          icon="🧠"
          title="IT Topics"
          subtitle="React Native, Git, Web, Database, Networking"
          color="#0EA5E9"
          onPress={() =>
            router.push({ pathname: '/group', params: { group: 'topics', name: cleanName } })
          }
        />

        <Text style={styles.footer}>Works offline. No internet needed.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  banner: {
    backgroundColor: Colors.primaryDark,
    paddingTop: 20,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  title: { fontSize: 32, fontWeight: 'bold', color: '#FFFFFF' },
  greeting: { fontSize: 20, fontWeight: 'bold', color: Colors.accent, marginTop: 6 },
  subtitle: { fontSize: 14, color: '#C7D2FE', marginTop: 6 },
  body: { padding: 20 },
  heading: { fontSize: 16, fontWeight: 'bold', color: Colors.text, marginBottom: 10 },
  input: {
    backgroundColor: Colors.card,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 14,
    padding: 12,
    fontSize: 16,
    color: Colors.text,
    marginBottom: 18,
  },
  footer: { textAlign: 'center', color: Colors.muted, marginTop: 6 },
});