// const reverseString = function(str) {
//   return str.split('').reverse().join('');
// };

// OR the following code below:

const reverseString = function(str) {
  let newString = '';
  for (i = str.length -1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

// Do not edit below this line
module.exports = reverseString;
