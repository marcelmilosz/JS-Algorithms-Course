// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1, 1, 1, 1, 0, 0]) // 2
// countZeroes([1, 0, 0, 0, 0]) // 4
// countZeroes([0, 0, 0]) // 3
// countZeroes([1, 1, 1, 1]) // 0
// Time Complexity - O(log n)



function countZeroes(array) {

    let count = 0;
    let left = 0;
    let right = array.length - 1;

    while (left < right) {

        if (array[left] === 0) count += 1;
        if (array[right] === 0) count += 1;

        left += 1;
        right -= 1;
    }

    if (left === right) {
        if (array[left] === 0) count += 1;
    }
    return count
}

console.log(countZeroes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]))