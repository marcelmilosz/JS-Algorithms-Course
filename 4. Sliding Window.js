// Given an array of integers of size ‘n’, 
// Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.

// Input: arr[] = { 100, 200, 300, 400}, k = 2
// Output: 700

// Input: arr[] = { 1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4
// Output: 39
// We get maximum sum by adding subarray { 4, 2, 10, 23 } of size 4.

// Input: arr[] = { 2, 3}, k = 3
// Output: Invalid
// There is no subarray of size 3 as size of whole array is 2.

// Time complexity: O(n)

function slidingWindow(arr, k) {

    if (k > arr.length) return false

    if (k == arr.length) return arr.sum()

    let counter = 0;
    let sum = 0;
    let biggestSum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        counter += 1;
        sum += arr[i];

        if (counter % k == 0) {
            counter = 0;
            if (sum > biggestSum) {
                biggestSum = sum
            }
            sum = 0;
            i = i - (k - 1)
        }

    }

    return (biggestSum);
}

console.log(slidingWindow([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(slidingWindow([100, 200, 300, 400], 2));
console.log(slidingWindow([2, 3], 3));