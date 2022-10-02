// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
// Otherwise, return -1.

// binarySearch([1, 2, 3, 4, 5], 2) // 1
// binarySearch([1, 2, 3, 4, 5], 3) // 2
// binarySearch([1, 2, 3, 4, 5], 5) // 4
// binarySearch([1, 2, 3, 4, 5], 6) // -1

function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((right - left) / 2);

    while (left <= right) {
        console.log(left, right, middle);
        if (arr[middle] == num) return middle;
        if (num < arr[middle]) right = middle - 1;
        else left = middle + 1;
        middle = Math.floor((right + left) / 2);
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16], 17));