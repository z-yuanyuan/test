// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is:
// Explain:
//There is only one operation in the function, which has a time complexity of O(1)
//Average case & Worst Case: Big-O = O(1). This operation is not depend on the size of the input, so no matter what the interger is, it takes the same execution time.

module.exports = function createBase(integer) {
  return x => integer + x; // O(1)
};
