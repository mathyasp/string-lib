const fb = require('../src/index');

test('capitalize will capitalize the first letter of a string', () => {
  expect(fb.capitalize('hello')).toBe('Hello');
  expect(fb.capitalize('  hello')).toBe('  Hello');
});

test('allCaps will capitalize all letters of a string', () => {
  expect(fb.allCaps('hello')).toBe('HELLO');
  expect(fb.allCaps('  hello')).toBe('  HELLO');
});

test('capitalizeWords will capitalize the first letter of each word in a string', () => {
  expect(fb.capitalizeWords('hello world')).toBe('Hello World');
  expect(fb.capitalizeWords('  hello world')).toBe('  Hello World');
});

test('capitalizeHeadline will capitalize all words except the, in, a, an, and, but, for, at, by, from', () => {
  expect(fb.capitalizeHeadline('the hello world')).toBe('The Hello World');
  expect(fb.capitalizeHeadline('  the hello world')).toBe('The Hello World');
  expect(fb.capitalizeHeadline('  hello world')).toBe('Hello World');
});

test('removeExtraSpaces will remove extra spaces from a string', () => {
  expect(fb.removeExtraSpaces('  hello  world  ')).toBe('hello world');
  expect(fb.removeExtraSpaces('  hello  world')).toBe('hello world');
  expect(fb.removeExtraSpaces('hello  world  ')).toBe('hello world');
});

test('kebabCase will remove extra spaces, replace spaces with hyphens, and make all characters lowercase', () => {
  expect(fb.kebabCase('  Hello  World  ')).toBe('hello-world');
  expect(fb.kebabCase('  Hello  World')).toBe('hello-world');
  expect(fb.kebabCase('Hello  World  ')).toBe('hello-world');
});

test('snakeCase will remove extra spaces, replace spaces with underscores, and make all characters lowercase', () => {
  expect(fb.snakeCase('  Hello  World  ')).toBe('hello_world');
  expect(fb.snakeCase('  Hello  World')).toBe('hello_world');
  expect(fb.snakeCase('Hello  World  ')).toBe('hello_world');
});

test('camelCase will remove extra spaces, capitalize the first letter of each word except the first word, and make all other letters lowercase', () => {
  expect(fb.camelCase('  Hello  World  ')).toBe('helloWorld');
  expect(fb.camelCase('  Hello  World')).toBe('helloWorld');
  expect(fb.camelCase('Hello  World  ')).toBe('helloWorld');
});

test('shift will shift all letters in a string by a given number of places', () => {
  expect(fb.shift('Hello World', 1)).toBe('ello WorldH');
  expect(fb.shift('Hello World', 2)).toBe('llo WorldHe');
  expect(fb.shift('Hello World', 3)).toBe('lo WorldHel');
});

test('makeHashTag will return the three longest words in a string as a hashtag', () => {  
  expect(fb.makeHashTag('Hello World')).toBe('#HelloWorld');
  expect(fb.makeHashTag('Hello World Hello')).toBe('#HelloWorldHello');
  expect(fb.makeHashTag('Hello World Hello World')).toBe('#HelloWorldHello');
});

test('isEmpty will return true if a string is empty or contains only whitespace', () => {
  expect(fb.isEmpty('')).toBe(true);
  expect(fb.isEmpty(' ')).toBe(true);
  expect(fb.isEmpty('  ')).toBe(true);
  expect(fb.isEmpty('Hello World')).toBe(false);
});