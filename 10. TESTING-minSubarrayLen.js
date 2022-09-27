// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. 
// If there isn't one, return 0 instead.
// Examples:

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
// Time Complexity - O(n)

// Space Complexity - O(1)

function minSubArrayLen(arr, min) {
    let sum = 0;
    console.log(arr);

    // Searching if some digit isnt bigger
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > min) return 1
    }

    // Checking if sum is smaller then required min value
    if (sum < min) return 0

    // actuall code 

    // Getting first values from array that are >= min
    sum = 0;
    let howManyDigits = 0;
    let i = 0;
    while (sum < min) {
        sum += arr[i];
        howManyDigits++;
        i++;
    }

    let x = 0;
    let left = 0; // starting left pointer
    let right = howManyDigits; // starting right pointer
    let actuallDigits = howManyDigits;
    let minDigits = Infinity;
    let minDigitsStartingPointer = 0;
    let maxMoves = arr.length - howManyDigits;

    console.log("Sum:", sum, "howMany:", howManyDigits, "maxMoves:", maxMoves, "arrLen:", arr.length);

    while (x < maxMoves + 1) {

        console.log("\nx:", x, "left:", left, "right:", right, "sum:", sum, "actuallDigits:", actuallDigits, "All time low:", minDigits);

        if ((sum - arr[left]) >= min) {
            sum = sum - arr[left];
            console.log("Deleting:", arr[left], "| Now sum is:", sum);
            actuallDigits--;
            left++;

            if (actuallDigits < minDigits) {
                minDigits = actuallDigits;
                minDigitsStartingPointer = left;
            }
        }
        else {
            if (right == arr.length) {
                console.log("FINISH");
                console.log("\nFinal sum:", sum, "| Finall subarray len:", actuallDigits, "All time low:", minDigits);
                console.log("Starting pointer:", minDigitsStartingPointer, "Last element index:", minDigits);
                console.log("Subarray: ", arr.slice(minDigitsStartingPointer, minDigits + minDigitsStartingPointer));
                break;
            }

            sum = sum + arr[right];
            console.log("Adding:", arr[right], "| Now sum is:", sum);
            actuallDigits++;
            right++;
            x++;
        }



    }
}

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2)
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5