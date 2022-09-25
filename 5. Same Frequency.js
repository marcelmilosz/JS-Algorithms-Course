// Write a function called sameFrequency.Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // false


function sameFrequency(a, b) {

    let dictA = {};
    let dictB = {};
    let r;

    while (a > 0) {

        r = a % 10;
        a = Math.floor(a / 10);

        if (!dictA[r]) {
            dictA[r] = 1;
        } else {
            dictA[r] += 1;
        }

    }

    while (b > 0) {
        r = b % 10;
        b = Math.floor(b / 10);

        if (!dictB[r]) {
            dictB[r] = 1;
        } else {
            dictB[r] += 1;
        }
    }

    for (let key in dictA) {
        if (dictA[key] !== dictB[key]) return false
    }

    return true

}

console.log(sameFrequency(1822, 281));