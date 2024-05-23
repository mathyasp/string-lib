# String-Lib

A JS Library for strings

## Functions:
- `capitalize`
  - Function to capitalize the first character of a string
- `allCaps`
  - Function to capitalize an entire string
- `capitalizeWords`
  - Function to capitalize the first character of each word in a string
- `capitalizeHeadline`
  - Function to capitalize all of the words except: the, in, a, an, and, but, for, at, by, from, unless one of these words is the first word of the string!
- `removeExtraSpaces`
  - Function to remove all spaces from the beginning and end of a string along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.
- `kebabCase`
  - Function to remove extra spaces and replaces spaces with the hyphen "-", and make all characters lowercase. Also removes special characters from the string.
- `snakeCase`
  - Function to remove extra space and replaces spaces with an underscore "_", and make all characters lowercase.
- `camelCase`
  - Function to lowercase the first character of the first word. Then uppercase the first character of all other words, and removes all spaces.
- `shift`
  - Function to take the first character of a string and move to the end of a string.
- `makeHashTag`
  - Function to convert the given string to a hash tag. A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter. If the given string has more than three words pick the three longest and make the hash tag from those.
- `isEmpty`
  - Function to return true if the given string is empty or contains only whitespace. White space includes: spaces, line returns, and tabs. These characters can be represented with: \n (new line) \r (carrige return), \t (tab).

