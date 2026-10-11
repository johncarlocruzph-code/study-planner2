# BSIT Quiz

An offline quiz app for practicing programming and IT topics, built with Expo, React Native, TypeScript, and Expo Router.

## Requirements

- Node.js and npm
- Expo Go on a physical device, or an Android/iOS emulator
- For web, a supported browser

The project currently uses Expo SDK 57, React Native 0.86, and TypeScript 6. Use the versions in `package.json` and `package-lock.json` when installing dependencies.

## Run the app

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/johncarlocruzph-code/study-planner2.git
   cd study-planner2
   ```

   If you already have the project, open a terminal in its directory.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Expo development server:

   ```bash
   npx expo start
   ```

4. Open the app:
   - **Physical device:** scan the QR code with Expo Go. For the simplest setup, connect the phone and computer to the same Wi-Fi network.
   - **Android emulator:** press `a` in the Expo terminal, or run `npm run android`.
   - **iOS simulator:** press `i` in the Expo terminal, or run `npm run ios` on a Mac with the iOS simulator available.
   - **Web browser:** press `w` in the Expo terminal, or run `npm run web`.

Keep the terminal open while using the app. Press `Ctrl+C` to stop the development server.

## Play from start to finish

1. On the home screen, optionally enter a name. The greeting and later quiz/result screens use it.
2. Choose **Programming Languages** or **IT Topics**.
3. Choose a category from the list.
4. Answer each question before its 10-second timer expires. The correct answer is highlighted after answering; if time runs out, the question is marked as timed out.
5. Select **Next Question** to continue. Questions are shuffled at the start of each quiz.
6. On the final question, select **See Result** to view the score and feedback.
7. Select **Play Again** to retry the same category, or **Choose Another Quiz** to return home.

Use the navigation header's back arrow or the device back gesture/button to return to the previous screen.

## Quiz categories

- **Programming Languages:** JavaScript, Python, Java, and PHP
- **IT Topics:** React Native, Git & GitHub, Web Development, Database, and Networking

There are nine categories with 20 questions each (180 total). Category details, questions, and correct answers are in `src/data/questions.ts`.

## How the app is organized

```text
src/
  app/
    _layout.tsx   Expo Router stack and navigation-header options
    index.tsx     Home screen: name entry and group selection
    group.tsx     Category selection for the chosen group
    quiz.tsx      Shuffled questions, timer, answers, and score
    result.tsx    Final score, feedback, and replay/navigation actions
  components/     Reusable cards, buttons, progress bar, and score display
  constants/      Shared app colors
  data/
    questions.ts  Category/question data and lookup helpers
    shuffle.ts    Question-order randomization
```

Expo Router maps files in `src/app/` to routes. Screens pass the selected group, category id, name, and result values through route parameters.

## Lessons applied

- **Lesson 1:** React Native building blocks such as `View`, `Text`, `TextInput`, `StyleSheet`, and reusable components with props.
- **Lesson 2:** Creating and running an Expo app with Expo Go.
- **Lesson 3:** `useState`, `TextInput`, `onChangeText`, and `Pressable` button interactions.
- **Lesson 4:** File-based routes in `src/app/`, a Stack layout, and navigation with `router.push`.
- **Lesson 5:** Route parameters with `useLocalSearchParams`, optional values, and conditional rendering with ternary operators.
- **Lesson 6:** `useEffect` with a dependency array and cleanup for the countdown timer, plus rendering question and category data with `map`.

## Group members and contributions

- **John Carlo Cruz:** Project setup; Home, Group, and Result screens; name input; question shuffle; nine quiz categories; and component redesign.
- **Dave Nino Edison Lato:** Quiz screen, including score and countdown timer.
- **Francis Lawas:** Color theme and root Stack layout.
- **Michelle Amor Calzada:** First versions of `MenuCard`, `InfoCard`, `AnswerButton`, and `ScoreCard`.
- **Joseph Tano:** First version of the offline questions and categories.

## Add or edit questions

Edit `src/data/questions.ts`. A question has four answer choices and an `answer` number that is the **zero-based index** of the correct choice:

```ts
{
  question: 'Which keyword declares a constant?',
  choices: ['let', 'define', 'const', 'set'],
  answer: 2,
}
```

In this example, `answer: 2` points to `choices[2]`, which is `const`. Keep the answer between `0` and `3`, and make sure each category has questions. To add a category, provide a unique `id`, a display `title`, an `icon`, a color, and a `questions` array in the appropriate group array (`languageCategories` or `topicCategories`). The category id is used by the group, quiz, and result routes.

## Project configuration

- `app.json` configures the Expo app, Expo Router plugin, and typed routes.
- `tsconfig.json` enables strict TypeScript and the `@/` path aliases.
- `babel.config.js` configures Babel and resolves those aliases in the app bundle.
- `src/app/_layout.tsx` configures the stack headers. A blank `title` hides a route filename such as `group` without hiding the header/back arrow.

## Validate changes

Run the project linter and TypeScript checker before sharing changes:

```bash
npx expo lint
npx tsc --noEmit
```

There is currently no automated test script configured in `package.json`.

## Notes

- The player name and scores stay in memory only. They reset when the app closes.
- The project uses concepts from Lessons 1 to 6.
- Commit `979ad44` (`project cleanup`) was made from a family member's MacBook, so it shows a different author name.
