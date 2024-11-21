# string-utils

A lightweight utility library that extends JavaScript's `String.prototype` with powerful and convenient methods for string manipulation.

## Installation

Install the package using NPM:

```bash
npm install string-utils
```

## Usage

To load the custom string methods:

```javascript
const { loadStringPrototypes } = require('string-utils');

// Load custom prototypes
loadStringPrototypes();

// Now you can use the extended String.prototype methods!
console.log("hello world".toCamelCase()); // "helloWorld"
console.log("hello_world".replaceUnderscoreWith(' ')); // "hello world"
```

## Methods

### **Case Transformation**
#### `toCamelCase()`
Converts a string to camelCase.
```javascript
console.log("hello_world example".toCamelCase()); // "helloWorldExample"
```

#### `toSnakeCase()`
Converts a string to snake_case.
```javascript
console.log("helloWorld example".toSnakeCase()); // "hello_world_example"
```

#### `toKebabCase()`
Converts a string to kebab-case.
```javascript
console.log("helloWorld example".toKebabCase()); // "hello-world-example"
```

---

### **Truncation**
#### `truncate(length)`
Truncates a string to the specified length and appends `...` if truncated.
```javascript
console.log("This is a long string".truncate(10)); // "This is..."
```

---

### **Validation**
#### `isPalindrome()`
Checks if a string is a palindrome (ignores case, spaces, and punctuation).
```javascript
console.log("racecar".isPalindrome()); // true
console.log("A man, a plan, a canal: Panama".isPalindrome()); // true
```

#### `containsOnlyLetters()`
Checks if a string contains only alphabetical characters.
```javascript
console.log("HelloWorld".containsOnlyLetters()); // true
console.log("Hello123".containsOnlyLetters()); // false
```

---

### **Formatting**
#### `pad(length, char = ' ')`
Pads a string to the specified length with a given character (default: space).
```javascript
console.log("hello".pad(10, '-')); // "--hello---"
```

#### `reverse()`
Reverses the string.
```javascript
console.log("example".reverse()); // "elpmaxe"
```

---

### **Word Manipulation**
#### `wordCount()`
Counts the number of words in a string.
```javascript
console.log("hello world this is a test".wordCount()); // 6
```

#### `capitalize()`
Alias for `capitalizeFirst`. Capitalizes the first character of the string.
```javascript
console.log("hello world".capitalize()); // "Hello world"
```

#### `capitalizeFirst()`
Capitalizes the first character of the string.
```javascript
console.log("hello world".capitalizeFirst()); // "Hello world"
```

#### `capitalizeWords()`
Capitalizes the first letter of each word.
```javascript
console.log("hello world".capitalizeWords()); // "Hello World"
```

---

### **Customizations**
#### `removeVowels()`
Removes all vowels from the string.
```javascript
console.log("hello world".removeVowels()); // "hll wrld"
```

#### `replaceSpacesWith(char)`
Replaces all spaces with the specified character.
```javascript
console.log("hello world".replaceSpacesWith('-')); // "hello-world"
```

#### `replaceUnderscoreWith(char)`
Replaces all underscores with the specified character.
```javascript
console.log("hello_world".replaceUnderscoreWith(' ')); // "hello world"
```

#### `stripHtml()`
Removes all HTML tags from the string.
```javascript
console.log("<p>Hello <b>World</b></p>".stripHtml()); // "Hello World"
```

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any new features, bug fixes, or improvements.

## License

This package is licensed under the GPL-3.0 license. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify or extend this as needed for your specific project. 🚀
