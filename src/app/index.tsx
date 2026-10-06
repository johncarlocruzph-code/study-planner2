import { Link, router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import MenuCard from '../components/MenuCard';
import { Colors } from '../constants/colors';
import { categories } from '../data/questions';

// Home screen, route "/". The user chooses a quiz category.
export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>BSIT Quiz Game</Text>
      <Text style={styles.subtitle}>
        Pick a category. You get 5 questions and 10 seconds for each one.
      </Text>

      {/* Category cards. map() builds one card per category (Lesson 6 idea). */}
      <View style={styles.grid}>
        {categories.map((category) => (
          <MenuCard
            key={category.id}
            icon={category.icon}
            title={category.title}
            // router.push inside an event handler. Only the category id is sent (Lesson 5).
            onPress={() =>
              router.push({ pathname: '/quiz', params: { category: category.id } })
            }
          />
        ))}
      </View>

      {/* Link for a direct destination (Lesson 4). */}
      <Link href={{ pathname: '/quiz', params: { category: 'programming' } }} asChild>
        <Button title="Quick Start: Programming" color={Colors.primary} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: Colors.primary },
  subtitle: { fontSize: 16, color: