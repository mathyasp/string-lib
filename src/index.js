// Function to capitalize the first character of a string
const capitalize = (str) => {
  let i = 0;
  while (i < str.length && str[i] === ' ') {
    i++;
  }
  if (i < str.length) {
    return str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
  } else {
    return str;
  }
}

// Function to capitalize an entire string
const allCaps = (str) => {
  return str.toUpperCase();
}

// Function to capitalize the first character of each word in a string
const capitalizeWords = (str) => {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => capitalize(word));
  return capitalizedWords.join(' ');
}

//Function to capitalize all of the words except:
// the, in, a, an, and, but, for, at, by, from 
// unless one of these words is the first word of the string!
const capitalizeHeadline = (str) => {
  const words = str.trim().split(' ');
  const capitalizedWords = words.map((word, index) => {
    if (index === 0 || !['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from'].includes(word)) {
      return capitalize(word);
    } else {
      return word;
    }
  });
  return capitalizedWords.join(' ');
}

// Function to remove all spaces from the beginning and end of a string 
// along with any extra spaces in the middle. If more than one space appears 
// in the middle of a string it is replaced by a single space.
const removeExtraSpaces = (str) => {
  const trimStr = str.trim();
  const words = trimStr.split(' ');
  const filteredWords = words.filter(word => word !== '');
  return filteredWords.join(' ');
}

// Function to remove extra spaces and replaces spaces with the hyphen "-",
// and make all characters lowercase. Also removes special characters from the string.
const kebabCase = (str) => {
  const words = str.trim().split(' ');
  const filter = words.filter(word => word.length > 0);
  return filter.join('-').toLowerCase();
}

// Function to remove extra space and replaces spaces with an underscore "_", 
// and make all characters lowercase.
const snakeCase = (str) => {
  const trimStr = removeExtraSpaces(str).trim();
  const chars = trimStr.split('');
  const filter = chars.filter(char => {
    const charCode = char.charCodeAt(0);
    if ((charCode > 47 && charCode < 58) || (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode === 32)) {
      return true;
    }
    return false;
  });
  const words = filter.join('').split(' ');
  return words.join('_').toLowerCase();
}

// Function to lowercase the first character of the first word. 
// Then uppercase the first character of all other words, 
// and removes all spaces.
const camelCase = (str) => {
  const trimStr = str.trim();
  const words = trimStr.split(' ');
  const camelWords = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    } else {
      return capitalize(word);
    }
  });
  return camelWords.join('');
}

// Function to take the first character of a string and move to the end of a string.
const shift = (str, num = 1) => {
  const shiftedStr = str.slice(num) + str.slice(0, num);
  return shiftedStr;
}

// Function to convert the given string to a hash tag. 
// A hash tag begins with # and no spaces. 
// Each word in the phrase begins with an uppercase letter.
// If the given string has more than three words pick the three longest 
// and make the hash tag from those.
const makeHashTag = (str) => {
  const words = str.split(' ');
  const sortedWords = words.sort((a, b) => b.length - a.length);
  const hashTagWords = sortedWords.slice(0, 3).map(word => capitalize(word));
  return `#${hashTagWords.join('')}`;
}

// Function to return true if the given string is empty or contains only whitespace. 
// White space includes: spaces, line returns, and tabs. 
// These characters can be represented with: \n (new line) \r (carrige return), \t (tab).
const isEmpty = (str) => {
  return str.trim() === '';
}

module.exports = {
  capitalize,
  allCaps,
  capitalizeWords,
  capitalizeHeadline,
  removeExtraSpaces,
  kebabCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty
};