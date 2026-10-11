import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import MenuCard from '../components/MenuCard';
import { Colors } from '../constants/colors';
import { getCategoriesByGroup } from '../data/questions';

// Group screen, route "/group?group=languages&name=Carlo"
export default function GroupScreen() {
  // Route parameters (Lesson 5). Both are optional.
  const { group, name } = useLocalSearchParams<{ group?: string; name?: string }>();
  const list = getCategoriesByGroup(group);

  // Ternary operators choose the texts (Lesson 5).
  const title = group === 'topics' ? 'IT Topics' : 'Programming Languages';
  const subtitle = name ? 'Hi, ' + name + '! Pick a quiz to start' : 'Pick a quiz to start';

  return (
    <View style={styles.screen}>
      <View style={styles.banner}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.body}>
        {/* map() builds one card per category (Lesson 6 idea). */}
        {list.map((category) => (
          <MenuCard
            key={category.id}
            icon={category.icon}
            title={category.title}
            subtitle={category.questions.length + ' questions'}
            color={category.color}
            onPress={() =>
              router.push({ pathname: '/quiz', params: { category: category.id, name: name } })
            }
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  banner: {
    backgroundColor: Colors.primaryDark,
    paddingTop: 16,
    paddingBottom: 22,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFFFFF' },
  subtitle: { fontSize: 15, color: '#C7D2FE', marginTop: 4 },
  body: { padding: 20 },
});