// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (arr.length <= 0) return 1;
    return arr[arr.length - 1] * productOfArray(arr.splice(0, arr.length - 1))
}

console.log(productOfArray([1, 2, 3, 10]))