import { Question } from './questions';

// Returns a shuffled copy of the list. Basic JavaScript: a for loop and Math.random().
export function shuffleQuestions(list: Question[]): Question[] {
  const copy: Question[] = [];
  for (let i = 0; i < list.length; i++) {
    copy.push(list[i]);
  }
  // Go from the last item to the first and swap each one with a random earlier item.
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}