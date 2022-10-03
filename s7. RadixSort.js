
// ### For getting digit in number
function getDigit(num, place) {
    // num = 452
    // place = 0 --> return 2
    // place = 1 --> return 5
    // place = 2 --> return 4

    let i = 0;
    let r = 0;

    while (i <= place) {
        r = Math.floor(num % 10);
        num = Math.floor(num / 10);
        i++;
    }

    return r;
}

function fancyGetDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// ### For getting the amount if digits in biggest number so we know for how long we need to split to buckets!
function digitCount(num) {
    let i = 0;

    while (Math.abs(num) >= 1) {
        num /= 10;
        i++;
    }

    return i;
}

// ### For getting the biggest number and its amount of digits
function mostDigits(arr) {
    let maxDigit = digitCount(arr[0])
    for (let i = 1; i < arr.length; i++) {
        if (maxDigit < digitCount(arr[i])) maxDigit = digitCount(arr[i])
    }
    return maxDigit
}

// Actuall radix sort
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {

        let digitBuckets = Array.from({ length: 10 }, () => []) // 10 empty arrays in one array

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }

        nums = [].concat(...digitBuckets);
        console.log(nums)

    }

    return nums
}


// console.log(fancyGetDigit(5812, 2))
// console.log(digitCount(0))
// console.log(mostDigits([3, 5, 10, 15, 123123]))

console.log(radixSort([1, 33, 2, 44, 231, 5, 55, 23, 1, 77, 102]));