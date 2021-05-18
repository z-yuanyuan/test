/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain:
//When sorting the array in ascending order, the average case would be the smallest value is in the moddile of the array. The Big-O is O(6).
//The worst case would be the smallest value is the last item of the array. The worst case Big-O is O(n).

module.exports = function sortArray(arr) {
  if (arr.length < 1) return [];

  arr.forEach(element => {
    if (!Number.isInteger(element)) {
      throw new TypeError();
    }
  });

  // insertion sort
  const sort = (arr, value) => [
    ...arr.filter(n => n <= value),
    value,
    ...arr.filter(n => n > value),
  ];

  let sorted = arr.reduce(sort, []);

  return sorted;
};
