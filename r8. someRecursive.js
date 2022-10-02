// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// function someRecursive(){
//   // add whatever parameters you deem necessary - good luck!
// }


// function checkDigit(val) {
//   if (val % 2 != 0) return true
//   else return false
// }

const checkDigit = (val) => {
  return val % 2 !== 0;
}
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], checkDigit)) // true
console.log(someRecursive([4, 6, 8, 9], checkDigit)) // true
console.log(someRecursive([4, 6, 8], checkDigit)) // false