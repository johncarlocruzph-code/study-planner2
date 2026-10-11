// Offline quiz data: no API, no internet. All questions live here.
// Screens receive only an id from the route (Lesson 5).

export type Question = {
  question: string;
  choices: string[];
  answer: number; // index of the correct choice in choices
};

export type Category = {
  id: string;
  title: string;
  icon: string;
  color: string;
  questions: Question[];
};

// Programming languages come first.
export const languageCategories: Category[] = [
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: '🟨',
    color: '#F59E0B',
    questions: [
      { question: 'Which keyword declares a variable that can be reassigned?', choices: ['const', 'let', 'fixed', 'static'], answer: 1 },
      { question: 'Which keyword declares a constant?', choices: ['let', 'define', 'const', 'set'], answer: 2 },
      { question: 'What does console.log() do?', choices: ['Shows output in the console', 'Deletes a variable', 'Creates a loop', 'Saves a file'], answer: 0 },
      { question: 'Which symbol starts a single-line comment?', choices: ['<!--', '##', '//', '**'], answer: 2 },
      { question: 'Which operator checks equal value and equal type?', choices: ['=', '==', '!=', '==='], answer: 3 },
      { question: 'Which array method adds an item to the end?', choices: ['pop()', 'push()', 'shift()', 'slice()'], answer: 1 },
      { question: 'What does typeof 42 return?', choices: ['"string"', '"boolean"', '"number"', '"object"'], answer: 2 },
      { question: 'Which one is a JavaScript array?', choices: ['[1, 2, 3]', '{1, 2, 3}', '(1, 2, 3)', '<1, 2, 3>'], answer: 0 },
      { question: 'Which keyword creates a function?', choices: ['define', 'function', 'method', 'fun'], answer: 1 },
      { question: 'What is the length of the string "hello"?', choices: ['4', '6', '5', '0'], answer: 2 },
      { question: 'Which loop runs a block a fixed number of times?', choices: ['if', 'switch', 'try', 'for'], answer: 3 },
      { question: 'Which value is falsy?', choices: ['"hello"', '1', '0', '[]'], answer: 2 },
      { question: 'Which method turns JSON text into an object?', choices: ['JSON.parse()', 'JSON.stringify()', 'JSON.read()', 'JSON.make()'], answer: 0 },
      { question: 'What does 3 + "3" give in JavaScript?', choices: ['6', '"33"', 'NaN', 'Error'], answer: 1 },
      { question: 'Which array method builds a new array by changing every item?', choices: ['push()', 'find()', 'map()', 'join()'], answer: 2 },
      { question: 'What does NaN stand for?', choices: ['Not a Number', 'No and Null', 'New Array Name', 'Next and Next'], answer: 0 },
      { question: 'Which keyword exits a loop early?', choices: ['stop', 'exit', 'end', 'break'], answer: 3 },
      { question: 'Which one is an arrow function?', choices: ['function => ()', '() => {}', '=> () {}', '() -> {}'], answer: 1 },
      { question: 'What does Math.floor(4.9) return?', choices: ['5', '4.9', '4', '0'], answer: 2 },
      { question: 'Which keyword sends a value back from a function?', choices: ['give', 'return', 'send', 'output'], answer: 1 },
    ],
  },
  {
    id: 'python',
    title: 'Python',
    icon: '🐍',
    color: '#3B82F6',
    questions: [
      { question: 'Which function shows output on the screen?', choices: ['echo()', 'show()', 'write()', 'print()'], answer: 3 },
      { question: 'Which symbol starts a comment in Python?', choices: ['//', '#', '/*', '--'], answer: 1 },
      { question: 'What is [1, 2, 3] in Python?', choices: ['A list', 'A tuple', 'A dictionary', 'A set'], answer: 0 },
      { question: 'Which keyword defines a function?', choices: ['func', 'function', 'def', 'define'], answer: 2 },
      { question: 'What does len("abc") return?', choices: ['2', '3', '4', 'abc'], answer: 1 },
      { question: 'Which one is a dictionary?', choices: ["{'a': 1}", "['a', 1]", "('a', 1)", "<'a': 1>"], answer: 0 },
      { question: 'What is the result of 7 // 2?', choices: ['3.5', '4', '3', '2'], answer: 2 },
      { question: 'What does Python use to group blocks of code?', choices: ['Curly braces', 'Indentation', 'Semicolons', 'Parentheses'], answer: 1 },
      { question: 'Which loop goes through the items of a list?', choices: ['repeat', 'foreach', 'loop', 'for'], answer: 3 },
      { question: 'Which keyword starts a condition?', choices: ['when', 'if', 'case', 'check'], answer: 1 },
      { question: 'What does input() do?', choices: ['Prints a message', 'Deletes a variable', 'Reads text typed by the user', 'Imports a module'], answer: 2 },
      { question: 'Which function converts text to a whole number?', choices: ['int()', 'str()', 'float()', 'list()'], answer: 0 },
      { question: 'Which keyword imports a module?', choices: ['include', 'using', 'import', 'require'], answer: 2 },
      { question: 'What is True in Python?', choices: ['A string', 'A Boolean value', 'A list', 'A function'], answer: 1 },
      { question: 'Which method adds an item to the end of a list?', choices: ['add()', 'push()', 'insert_end()', 'append()'], answer: 3 },
      { question: 'What is the result of 2 ** 3?', choices: ['6', '8', '5', '9'], answer: 1 },
      { question: 'Which loop runs while a condition is true?', choices: ['for', 'until', 'while', 'loop'], answer: 2 },
      { question: 'What does range(3) produce?', choices: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '3'], answer: 1 },
      { question: 'Which one is a string?', choices: ['Python', '[Python]', '"Python"', '{Python}'], answer: 2 },
      { question: 'Python is best described as a ___ language.', choices: ['markup', 'database', 'compiled only', 'high-level'], answer: 3 },
    ],
  },
  {
    id: 'java',
    title: 'Java',
    icon: '☕',
    color: '#F97316',
    questions: [
      { question: 'Which method is the entry point of a Java program?', choices: ['start()', 'main()', 'run()', 'init()'], answer: 1 },
      { question: 'Which keyword creates an object?', choices: ['create', 'make', 'new', 'object'], answer: 2 },
      { question: 'Which data type stores whole numbers?', choices: ['String', 'boolean', 'char', 'int'], answer: 3 },
      { question: 'Which data type stores text?', choices: ['String', 'int', 'double', 'boolean'], answer: 0 },
      { question: 'What does JVM stand for?', choices: ['Java Visual Method', 'Joint Variable Memory', 'Java Virtual Machine', 'Java Version Manager'], answer: 2 },
      { question: 'Which symbol ends a statement in Java?', choices: [':', '.', ';', ','], answer: 2 },
      { question: 'Which keyword defines a class?', choices: ['struct', 'class', 'object', 'define'], answer: 1 },
      { question: 'Which line prints text in Java?', choices: ['print.line()', 'echo()', 'console.log()', 'System.out.println()'], answer: 3 },
      { question: 'Which file extension is used for Java source code?', choices: ['.js', '.jav', '.java', '.jar'], answer: 2 },
      { question: 'Which keyword makes a class inherit another class?', choices: ['inherits', 'extends', 'super', 'import'], answer: 1 },
      { question: 'Which access modifier makes a member visible everywhere?', choices: ['private', 'protected', 'default', 'public'], answer: 3 },
      { question: 'Which statement repeats code?', choices: ['switch', 'import', 'for', 'package'], answer: 2 },
      { question: 'What is the first index of a Java array?', choices: ['1', '0', '-1', '2'], answer: 1 },
      { question: 'Which keyword prevents a variable from being changed?', choices: ['static', 'const', 'final', 'fixed'], answer: 2 },
      { question: 'Which type stores true or false?', choices: ['boolean', 'bit', 'binary', 'bool'], answer: 0 },
      { question: 'What does OOP stand for?', choices: ['Output Only Process', 'Object-Oriented Programming', 'Open Operation Panel', 'Ordered Object Pattern'], answer: 1 },
      { question: 'Which operator compares two values for equality?', choices: ['=', '=>', '==', '!='], answer: 2 },
      { question: 'Which keyword stops a loop immediately?', choices: ['stop', 'exit', 'end', 'break'], answer: 3 },
      { question: 'Which class reads input from the keyboard?', choices: ['Scanner', 'Reader', 'Input', 'Keyboard'], answer: 0 },
      { question: 'Which keyword refers to the current object?', choices: ['self', 'this', 'me', 'current'], answer: 1 },
    ],
  },
  {
    id: 'php',
    title: 'PHP',
    icon: '🐘',
    color: '#8B5CF6',
    questions: [
      { question: 'Which symbol starts a PHP variable?', choices: ['@', '#', '&', '$'], answer: 3 },
      { question: 'How does PHP code start?', choices: ['<?php', '<php>', '<?js', '<script php>'], answer: 0 },
      { question: 'Which command prints text in PHP?', choices: ['write', 'show', 'echo', 'display'], answer: 2 },
      { question: 'Where does PHP code run?', choices: ['In the browser', 'On the server', 'On the keyboard', 'On the router'], answer: 1 },
      { question: 'Which operator joins two strings in PHP?', choices: ['+', '&', ',', '.'], answer: 3 },
      { question: 'Which file extension is used for PHP files?', choices: ['.html', '.php', '.ph', '.js'], answer: 1 },
      { question: 'Which one creates an array in PHP?', choices: ['array(1, 2, 3)', 'list{1, 2, 3}', 'arr<1, 2, 3>', 'set(1, 2, 3)'], answer: 0 },
      { question: 'Which superglobal holds data sent with the POST method?', choices: ['$_GET', '$_FORM', '$_DATA', '$_POST'], answer: 3 },
      { question: 'Which function counts the items in an array?', choices: ['size()', 'length()', 'count()', 'total()'], answer: 2 },
      { question: 'Which framework is built with PHP?', choices: ['React', 'Laravel', 'Django', 'Flask'], answer: 1 },
      { question: 'Which keyword defines a function in PHP?', choices: ['def', 'func', 'function', 'method'], answer: 2 },
      { question: 'Which statement checks a condition?', choices: ['if', 'when', 'check', 'test'], answer: 0 },
      { question: 'What does PHP stand for today?', choices: ['Personal Home Page Tools', 'Private Hosting Program', 'PHP: Hypertext Preprocessor', 'Programmed Hyper Process'], answer: 2 },
      { question: 'Which one is a single-line comment in PHP?', choices: ['<!-- comment -->', '** comment', '!! comment', '// comment'], answer: 3 },
      { question: 'Which statement adds another file into a PHP file?', choices: ['import', 'load', 'include', 'attach'], answer: 2 },
      { question: 'Which tool runs PHP and MySQL on your computer?', choices: ['Figma', 'XAMPP', 'Postman', 'Wireshark'], answer: 1 },
      { question: 'Which loop goes through array items in PHP?', choices: ['foreach', 'each', 'iterate', 'loop'], answer: 0 },
      { question: 'What does strlen() return?', choices: ['The first letter', 'The length of a string', 'The last item', 'The data type'], answer: 1 },
      { question: 'Which function connects PHP to MySQL (MySQLi)?', choices: ['db_open()', 'sql_link()', 'connect_sql()', 'mysqli_connect()'], answer: 3 },
      { question: 'Are PHP variable names case-sensitive?', choices: ['No', 'Yes', 'Only numbers', 'Only on Linux'], answer: 1 },
    ],
  },
];


// IT topics (not programming languages) come last.
export const topicCategories: Category[] = [
  {
    id: 'react-native',
    title: 'React Native',
    icon: '📱',
    color: '#06B6D4',
    questions: [
      { question: 'Which company created React Native?', choices: ['Google', 'Meta', 'Microsoft', 'Apple'], answer: 1 },
      { question: 'React Native builds apps for which platforms?', choices: ['iOS and Android', 'Windows only', 'Web pages only', 'Game consoles'], answer: 0 },
      { question: 'Which component is the basic container for layout?', choices: ['Box', 'Panel', 'View', 'Container'], answer: 2 },
      { question: 'All text must be inside which component?', choices: ['Label', 'Text', 'Span', 'Paragraph'], answer: 1 },
      { question: 'Which component captures typing from the keyboard?', choices: ['Keyboard', 'Field', 'Input', 'TextInput'], answer: 3 },
      { question: 'Which Button prop sets the label?', choices: ['text', 'title', 'label', 'name'], answer: 1 },
      { question: 'Which Button prop runs a function when tapped?', choices: ['onClick', 'onTap', 'onPress', 'onHit'], answer: 2 },
      { question: 'Which hook stores data that changes?', choices: ['useState', 'useData', 'useStore', 'useValue'], answer: 0 },
      { question: 'What does useState give back?', choices: ['Only a value', 'A promise', 'A value and a setter function', 'A component'], answer: 2 },
      { question: 'Which TextInput prop runs when the text changes?', choices: ['onType', 'onChangeText', 'onInput', 'onEdit'], answer: 1 },
      { question: 'What is JSX?', choices: ['A database', 'A CSS file', 'A Git command', 'HTML-like syntax inside JavaScript'], answer: 3 },
      { question: 'Which app lets you run your project on a real phone?', choices: ['Expo Go', 'XAMPP', 'Excel', 'Photoshop'], answer: 0 },
      { question: 'Which command creates a new Expo app?', choices: ['npm make expo', 'npx create-expo-app@latest', 'expo new app', 'git create expo'], answer: 1 },
      { question: 'Which command starts the Expo development server?', choices: ['npm open', 'git start', 'npx expo start', 'expo run phone'], answer: 2 },
      { question: 'How does Expo Router create routes?', choices: ['From a database', 'From a CSS file', 'From a Git branch', 'From files in the app folder'], answer: 3 },
      { question: 'Which file is the first screen at "/"?', choices: ['home.tsx', 'index.tsx', 'first.tsx', 'main.tsx'], answer: 1 },
      { question: 'Which component gives screens a header and a Back button?', choices: ['Pile', 'Header', 'Stack', 'Frame'], answer: 2 },
      { question: 'Which hook reads a route parameter?', choices: ['useLocalSearchParams', 'useRouteData', 'useQuery', 'useParams'], answer: 0 },
      { question: 'Which hook runs side effects after rendering?', choices: ['useRender', 'useSide', 'useAfter', 'useEffect'], answer: 3 },
      { question: 'What does a cleanup function in useEffect do?', choices: ['Deletes the app', 'Stops timers or subscriptions', 'Creates a new screen', 'Changes the colors'], answer: 1 },
    ],
  },
  {
    id: 'git-github',
    title: 'Git & GitHub',
    icon: '🔀',
    color: '#F43F5E',
    questions: [
      { question: 'Which command creates a new Git repository?', choices: ['git start', 'git init', 'git new', 'git create'], answer: 1 },
      { question: 'Which command copies a repository from GitHub?', choices: ['git copy', 'git download', 'git clone', 'git fork'], answer: 2 },
      { question: 'Which command shows the changed files?', choices: ['git status', 'git show', 'git list', 'git look'], answer: 0 },
      { question: 'Which command stages all changes?', choices: ['git stage all', 'git commit .', 'git push .', 'git add .'], answer: 3 },
      { question: 'Which command saves staged changes with a message?', choices: ['git save', 'git commit -m "message"', 'git store', 'git keep'], answer: 1 },
      { question: 'Which command sends your commits to GitHub?', choices: ['git upload', 'git send', 'git push', 'git sync'], answer: 2 },
      { question: 'Which command gets and merges the latest changes from GitHub?', choices: ['git pull', 'git down', 'git refresh', 'git fetchall'], answer: 0 },
      { question: 'Which command shows the commit history?', choices: ['git history', 'git log', 'git past', 'git commits'], answer: 1 },
      { question: 'Which command creates and switches to a new branch?', choices: ['git make branch', 'git branch -r', 'git checkout -b name', 'git merge -b name'], answer: 2 },
      { question: 'Which command lists the branches?', choices: ['git list', 'git tree', 'git all', 'git branch'], answer: 3 },
      { question: 'Which command combines another branch into the current branch?', choices: ['git join', 'git merge', 'git combine', 'git mix'], answer: 1 },
      { question: 'What is GitHub?', choices: ['A code editor', 'A database', 'A website that hosts Git repositories', 'A programming language'], answer: 2 },
      { question: 'What is a commit?', choices: ['A snapshot of your changes', 'A copy of GitHub', 'A type of branch', 'A password'], answer: 0 },
      { question: 'What is a branch?', choices: ['A deleted file', 'A separate line of work', 'A GitHub account', 'A bug'], answer: 1 },
      { question: 'What is a Pull Request?', choices: ['A request to delete a repository', 'A request for a password', 'A request to merge your changes', 'A request to download Git'], answer: 2 },
      { question: 'Which file lists the files Git should ignore?', choices: ['.gitignore', '.gitkeep', '.ignore', 'git.txt'], answer: 0 },
      { question: 'Which command sets your name for commits?', choices: ['git name "Name"', 'git config --global user.name "Name"', 'git set user "Name"', 'git user --add "Name"'], answer: 1 },
      { question: 'Which command connects a local repository to GitHub as origin?', choices: ['git origin add url', 'git link origin url', 'git remote add origin url', 'git connect url'], answer: 2 },
      { question: 'What are GitHub Issues used for?', choices: ['Storing passwords', 'Running code', 'Editing photos', 'Tracking tasks and bugs'], answer: 3 },
      { question: 'Which command shows the connected remote repositories?', choices: ['git remote -v', 'git origin', 'git links', 'git where'], answer: 0 },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: '🌐',
    color: '#2563EB',
    questions: [
      { question: 'What does HTML stand for?', choices: ['HyperText Markup Language', 'High Tech Machine Language', 'Home Tool Markup Language', 'HyperText Making Logic'], answer: 0 },
      { question: 'Which tag creates the largest heading?', choices: ['<h6>', '<h1>', '<head>', '<p>'], answer: 1 },
      { question: 'Which tag creates a link?', choices: ['<link>', '<url>', '<a>', '<href>'], answer: 2 },
      { question: 'Which tag inserts an image?', choices: ['<picture>', '<image>', '<photo>', '<img>'], answer: 3 },
      { question: 'What does CSS stand for?', choices: ['Cascading Style Sheets', 'Creative Style System', 'Computer Style Syntax', 'Colorful Style Sheets'], answer: 0 },
      { question: 'Which CSS property changes the text color?', choices: ['font-color', 'color', 'text-style', 'foreground'], answer: 1 },
      { question: 'Which CSS property changes the background color?', choices: ['bgcolor', 'color-back', 'background-color', 'back'], answer: 2 },
      { question: 'Which tag creates a paragraph?', choices: ['<para>', '<text>', '<pg>', '<p>'], answer: 3 },
      { question: 'Which tag creates a bulleted list?', choices: ['<ul>', '<ol>', '<li>', '<list>'], answer: 0 },
      { question: 'Which attribute sets the destination of a link?', choices: ['src', 'link', 'href', 'dest'], answer: 2 },
      { question: 'Which language adds interaction to a web page?', choices: ['HTML', 'CSS', 'SQL', 'JavaScript'], answer: 3 },
      { question: 'What is the front-end of a website?', choices: ['The part users see in the browser', 'The database', 'The server hardware', 'The router'], answer: 0 },
      { question: 'What is the back-end of a website?', choices: ['The buttons', 'The part that runs on the server', 'The colors', 'The images'], answer: 1 },
      { question: 'Which tag sets the title shown in the browser tab?', choices: ['<head>', '<header>', '<title>', '<name>'], answer: 2 },
      { question: 'What does HTTP stand for?', choices: ['HyperText Transfer Protocol', 'High Transfer Text Program', 'Home Tool Transfer Protocol', 'HyperText Transmission Process'], answer: 0 },
      { question: 'What is a URL?', choices: ['A programming language', 'A web address', 'A type of image', 'A database'], answer: 1 },
      { question: 'Which tag creates a button?', choices: ['<btn>', '<press>', '<button>', '<click>'], answer: 2 },
      { question: 'Which CSS selector targets the element with id "menu"?', choices: ['.menu', '#menu', 'menu()', '*menu'], answer: 1 },
      { question: 'Which CSS selector targets a class named "card"?', choices: ['#card', 'card()', '*card', '.card'], answer: 3 },
      { question: 'Which tag creates a table row?', choices: ['<tr>', '<td>', '<th>', '<row>'], answer: 0 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: '🗄️',
    color: '#10B981',
    questions: [
      { question: 'What does SQL stand for?', choices: ['Simple Question Language', 'Structured Query Language', 'System Quick List', 'Standard Query Logic'], answer: 1 },
      { question: 'Which command gets data from a table?', choices: ['INSERT', 'DELETE', 'SELECT', 'UPDATE'], answer: 2 },
      { question: 'Which command adds a new row?', choices: ['INSERT INTO', 'ADD ROW', 'NEW ROW', 'PUT INTO'], answer: 0 },
      { question: 'Which command changes existing data?', choices: ['MODIFY', 'CHANGE', 'ALTER ROW', 'UPDATE'], answer: 3 },
      { question: 'Which command removes rows?', choices: ['DELETE', 'REMOVE', 'ERASE', 'CLEAR'], answer: 0 },
      { question: 'Which key uniquely identifies each row?', choices: ['Foreign key', 'Primary key', 'Common key', 'Spare key'], answer: 1 },
      { question: 'A row in a table is also called a?', choices: ['Column', 'Field', 'Record', 'Key'], answer: 2 },
      { question: 'A column in a table is also called a?', choices: ['Record', 'Row', 'Table', 'Field'], answer: 3 },
      { question: 'Which clause filters rows?', choices: ['WHERE', 'FILTER', 'FROM', 'GROUP'], answer: 0 },
      { question: 'Which clause sorts the results?', choices: ['SORT', 'ORDER BY', 'ARRANGE', 'GROUP'], answer: 1 },
      { question: 'Which one is a relational database?', choices: ['HTML', 'Python', 'MySQL', 'Wi-Fi'], answer: 2 },
      { question: 'Which one is a NoSQL database?', choices: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'], answer: 3 },
      { question: 'What does DBMS stand for?', choices: ['Database Management System', 'Data Backup Main Server', 'Digital Base Memory Storage', 'Database Machine Software'], answer: 0 },
      { question: 'Which command creates a table?', choices: ['MAKE TABLE', 'CREATE TABLE', 'NEW TABLE', 'BUILD TABLE'], answer: 1 },
      { question: 'What does a foreign key do?', choices: ['Locks the table', 'Deletes duplicates', 'Links to the primary key of another table', 'Sorts the rows'], answer: 2 },
      { question: 'Which function counts rows?', choices: ['SUM()', 'TOTAL()', 'NUMBER()', 'COUNT()'], answer: 3 },
      { question: 'What does SELECT * mean?', choices: ['Select all columns', 'Select one row', 'Select nothing', 'Select the key'], answer: 0 },
      { question: 'Which keyword removes duplicate values?', choices: ['UNIQUE ROWS', 'DISTINCT', 'NOREPEAT', 'SINGLE'], answer: 1 },
      { question: 'What is a table?', choices: ['A picture', 'A server', 'A collection of rows and columns', 'A password'], answer: 2 },
      { question: 'Which command removes a whole table?', choices: ['DELETE TABLE', 'REMOVE TABLE', 'ERASE TABLE', 'DROP TABLE'], answer: 3 },
    ],
  },
  {
    id: 'networking',
    title: 'Networking',
    icon: '📡',
    color: '#0EA5E9',
    questions: [
      { question: 'What does LAN stand for?', choices: ['Local Area Network', 'Large Area Network', 'Long Access Node', 'Linked Area Number'], answer: 0 },
      { question: 'What does WAN stand for?', choices: ['Wireless Access Node', 'Wide Area Network', 'Web Area Network', 'Wired Active Network'], answer: 1 },
      { question: 'What does IP in IP address stand for?', choices: ['Internal Program', 'Input Process', 'Internet Protocol', 'Integrated Port'], answer: 2 },
      { question: 'Which device connects different networks together?', choices: ['Monitor', 'Printer', 'Mouse', 'Router'], answer: 3 },
      { question: 'Which device connects computers inside the same network?', choices: ['Switch', 'Scanner', 'Speaker', 'Printer'], answer: 0 },
      { question: 'Which port does HTTP use by default?', choices: ['21', '80', '443', '25'], answer: 1 },
      { question: 'Which port does HTTPS use by default?', choices: ['80', '21', '443', '110'], answer: 2 },
      { question: 'What does DNS do?', choices: ['Blocks viruses', 'Stores files', 'Sends emails', 'Turns domain names into IP addresses'], answer: 3 },
      { question: 'Which cable is commonly used in a wired LAN?', choices: ['Ethernet cable', 'HDMI cable', 'Power cable', 'Audio cable'], answer: 0 },
      { question: 'What does ISP stand for?', choices: ['Internal Server Port', 'Internet Service Provider', 'Input Signal Process', 'Internet Security Program'], answer: 1 },
      { question: 'What is bandwidth?', choices: ['The size of a screen', 'The length of a cable', 'The amount of data that can be sent over time', 'The number of computers'], answer: 2 },
      { question: 'What is a firewall used for?', choices: ['Cooling a computer', 'Printing documents', 'Storing emails', 'Filtering network traffic for security'], answer: 3 },
      { question: 'Which protocol is commonly used to send email?', choices: ['SMTP', 'HTTP', 'FTP', 'SSH'], answer: 0 },
      { question: 'Which command tests if a device is reachable?', choices: ['send', 'ping', 'reach', 'test'], answer: 1 },
      { question: 'What does a MAC address identify?', choices: ['A website', 'A user password', 'A network card', 'A file'], answer: 2 },
      { question: 'Which one is an example of an IPv4 address?', choices: ['www.google.com', 'AA:BB:CC:DD', 'http://1.1', '192.168.1.1'], answer: 3 },
      { question: 'What does DHCP do?', choices: ['Encrypts files', 'Gives IP addresses automatically', 'Blocks websites', 'Prints pages'], answer: 1 },
      { question: 'Which topology connects all devices to one central device?', choices: ['Ring', 'Bus', 'Star', 'Mesh'], answer: 2 },
      { question: 'What does Wi-Fi provide?', choices: ['Wireless network access', 'A bigger screen', 'Faster typing', 'More storage'], answer: 0 },
      { question: 'Which protocol is used to transfer files between computers?', choices: ['SMTP', 'DNS', 'DHCP', 'FTP'], answer: 3 },
    ],
  },
];

// Returns the categories of a group. The group id is optional (Lesson 5).
export function getCategoriesByGroup(group?: string): Category[] {
  return group === 'topics' ? topicCategories : languageCategories;
}

// Returns undefined if the id is missing or does not match any category.
export function getCategoryById(categoryId?: string): Category | undefined {
  const allCategories = [...languageCategories, ...topicCategories];
  return allCategories.find((c) => c.id === categoryId);
}

// Returns the questions of one category. Empty list if the id is missing or unknown.
export function getQuestionsByCategory(categoryId?: string): Question[] {
  const category = getCategoryById(categoryId);
  return category ? category.questions : [];
}