// Offline quiz data: no API, no internet. All questions live here.
// Screens receive only a category id from the route (Lesson 5).

export type Category = {
  id: string;
  title: string;
  icon: string;
};

export type Question = {
  id: number;
  category: string;
  question: string;
  choices: string[];
  answer: number; // index of the correct choice in choices
};

export const categories: Category[] = [
  { id: 'programming', title: 'Programming', icon: '💻' },
  { id: 'web', title: 'Web Development', icon: '🌐' },
  { id: 'database', title: 'Database', icon: '🗄️' },
  { id: 'networking', title: 'Networking', icon: '📡' },
];

export const questions: Question[] = [
  // Programming
  {
    id: 1,
    category: 'programming',
    question: 'What stores a value in a program?',
    choices: ['Variable', 'Loop', 'Function', 'Comment'],
    answer: 0,
  },
  {
    id: 2,
    category: 'programming',
    question: 'Which one repeats a block of code?',
    choices: ['Condition', 'Loop', 'Variable', 'Comment'],
    answer: 1,
  },
  {
    id: 3,
    category: 'programming',
    question: 'A reusable block of code that does one job is called a?',
    choices: ['Array', 'Operator', 'Function', 'Class'],
    answer: 2,
  },
  {
    id: 4,
    category: 'programming',
    question: 'Which data type stores true or false?',
    choices: ['Boolean', 'String', 'Integer', 'Float'],
    answer: 0,
  },
  {
    id: 5,
    category: 'programming',
    question: 'Which one is a programming language?',
    choices: ['Router', 'Python', 'Monitor', 'Keyboard'],
    answer: 1,
  },

  // Web Development
  {
    id: 6,
    category: 'web',
    question: 'What does HTML stand for?',
    choices: [
      'HyperText Markup Language',
      'High Tech Machine Language',
      'Home Tool Markup Language',
      'HyperText Making Logic',
    ],
    answer: 0,
  },
  {
    id: 7,
    category: 'web',
    question: 'Which one controls the colors and layout of a web page?',
    choices: ['HTML', 'CSS', 'SQL', 'HTTP'],
    answer: 1,
  },
  {
    id: 8,
    category: 'web',
    question: 'Which language adds interaction to a web page?',
    choices: ['HTML', 'SQL', 'JavaScript', 'Excel'],
    answer: 2,
  },
  {
    id: 9,
    category: 'web',
    question: 'Which HTML tag creates the largest heading?',
    choices: ['<h6>', '<h1>', '<head>', '<p>'],
    answer: 1,
  },
  {
    id: 10,
    category: 'web',
    question: 'Which part of a website runs on the server?',
    choices: ['Back-end', 'Front-end', 'Browser', 'Keyboard'],
    answer: 0,
  },

  // Database
  {
    id: 11,
    category: 'database',
    question: 'What does SQL stand for?',
    choices: [
      'Simple Question Language',
      'Structured Query Language',
      'System Quick List',
      'Standard Query Logic',
    ],
    answer: 1,
  },
  {
    id: 12,
    category: 'database',
    question: 'Which SQL command gets data from a table?',
    choices: ['INSERT', 'DELETE', 'SELECT', 'UPDATE'],
    answer: 2,
  },
  {
    id: 13,
    category: 'database',
    question: 'In a table, a row is also called a?',
    choices: ['Column', 'Field', 'Key', 'Record'],
    answer: 3,
  },
  {
    id: 14,
    category: 'database',
    question: 'Which key uniquely identifies each row in a table?',
    choices: ['Primary key', 'Foreign key', 'Common key', 'Spare key'],
    answer: 0,
  },
  {
    id: 15,
    category: 'database',
    question: 'Which one is a relational database?',
    choices: ['HTML', 'MySQL', 'Python', 'Wi-Fi'],
    answer: 1,
  },

  // Networking
  {
    id: 16,
    category: 'networking',
    question: 'Which device connects different networks together?',
    choices: ['Router', 'Monitor', 'Mouse', 'Printer'],
    answer: 0,
  },
  {
    id: 17,
    category: 'networking',
    question: 'What does IP in IP address stand for?',
    choices: ['Internal Program', 'Internet Protocol', 'Input Process', 'Integrated Port'],
    answer: 1,
  },
  {
    id: 18,
    category: 'networking',
    question: 'What does LAN stand for?',
    choices: ['Large Area Network', 'Long Access Node', 'Local Area Network', 'Linked Area Number'],
    answer: 2,
  },
  {
    id: 19,
    category: 'networking',
    question: 'Which protocol is used to load web pages?',
    choices: ['FTP', 'SMTP', 'SSH', 'HTTP'],
    answer: 3,
  },
  {
    id: 20,
    category: 'networking',
    question: 'Which device connects computers inside the same network?',
    choices: ['Printer', 'Switch', 'Scanner', 'Speaker'],
    answer: 1,
  },
];

// Collects the questions of one category with a for loop.
// Returns an empty list if the id is missing or unknown.
export function getQuestionsByCategory(categoryId?: string): Question[] {
  const result: Question[] = [];
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].category === categoryId) {
      result.push(questions[i]);
    }
  }
  return result;
}

// Returns undefined if the id is missing or does not match any category.
export function getCategoryById(categoryId?: string): Category | undefined {
  return categories.find((c) => c.id === categoryId);
}