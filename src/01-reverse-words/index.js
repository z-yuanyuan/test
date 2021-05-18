/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain:
// 1) Splitting the input sentence on whitespace takes O(n) time, where n is the length of the input 
// 2) Iterating over an array of words and reversing each word takes O(n * k), where n is the length of the array, and k is the length of the word. Then, we drop the constant and big O is O(n)
// 3) Joining the array to string is also O(n), as it has to iterate over all words in the array. 
// Finally, O(n) + O(n) + O(n) = O(3n) => O(n)
// Big O is O(n)


module.exports = function reverseWordsInSentence(input) {
  // TODO
  let splitArr = input.split(" ") // O(n)
  splitArr = splitArr.map(word => word.split('').reverse().join('')) // O(n*k) => O(n)
  let str = splitArr.join(" ") //O(n)

  return str
};
