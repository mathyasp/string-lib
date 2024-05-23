// Function to capitalize the first character of a string
export const capitalize = (str) => {
  const firstLetter = str[0].toUpperCase();
  const remainingLetters = str.slice(1);
  return firstLetter + remainingLetters;
}

// Function to capitalize an entire string
export const allCaps = (str) => {
  return str.toUpperCase();
}

// Function to capitalize the first character of each word in a string
export const capitalizeWords = (str) => {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => capitalize(word));
  return capitalizedWords.join(' ');
}

//Function to capitalize all of the words except:
// the, in, a, an, and, but, for, at, by, from 
// unless one of these words is the first word of the string!
export const capitalizeHeadline = (str) => {
  const words = str.split(' ');
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
export const removeExtraSpaces = (str) => {
  const trimStr = str.trim();
  const words = trimStr.split(' ');
  const filteredWords = words.filter(word => word !== '');
  return filteredWords.join(' ');
}

// Function to remove extra spaces and replaces spaces with the hyphen "-",
// and make all characters lowercase. Also removes special characters from the string.
export const kebabCase = (str) => {
  const trimStr = str.trim();
  const chars = trimStr.split('');
  const filter = chars.filter(char => {
    const charCode = char.charCodeAt(0);
    if ((charCode > 47 && charCode < 58) || (charCode > 96 && charCode < 123) || (charCode === 32)) {
      return true;
    }
    return false;
  });
  const words = filter.join('').split(' ');
  return words.join('-').toLowerCase();
}

// Function to remove extra space and replaces spaces with an underscore "_", 
// and make all characters lowercase.
export const snakeCase = (str) => {
  const trimStr = str.trim();
  const chars = trimStr.split('');
  const filter = chars.filter(char => {
    const charCode = char.charCodeAt(0);
    if ((charCode > 47 && charCode < 58) || (charCode > 96 && charCode < 123) || (charCode === 32)) {
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
export const camelCase = (str) => {
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
export const shift = (str, num = 1) => {
  const shiftedStr = str.slice(num) + str.slice(0, num);
  return shiftedStr;
}

// Function to convert the given string to a hash tag. 
// A hash tag begins with # and no spaces. 
// Each word in the phrase begins with an uppercase letter.
// If the given string has more than three words pick the three longest 
// and make the hash tag from those.
export const makeHashTag = (str) => {
  const words = str.split(' ');
  const sortedWords = words.sort((a, b) => b.length - a.length);
  const hashTagWords = sortedWords.slice(0, 3).map(word => capitalize(word));
  return `#${hashTagWords.join('')}`;
}

// Function to return true if the given string is empty or contains only whitespace. 
// White space includes: spaces, line returns, and tabs. 
// These characters can be represented with: \n (new line) \r (carrige return), \t (tab).
export const isEmpty = (str) => {
  return str.trim() === '';
}