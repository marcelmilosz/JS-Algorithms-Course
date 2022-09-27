// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

function findLongestSubstring(str) {

    let left = 0;
    let right = 0;
    let count = 0;
    let finall = 0;

    let dictionary = {}

    while (right < str.length + 1) {

        if (finall < count) finall = count;

        if (dictionary[str[right]]) {

            if (str[left] != str[right]) {
                delete dictionary[str[left]];
                left = left + 1;
                count--;
            }
            else {
                dictionary[str[right]] = 1;
                delete dictionary[str[left]];
                count--;
                left++;
            }
        }
        else {
            dictionary[str[right]] = 1;
            right++;
            count++;
        }
    }

    return finall

}

// This one was though at first.. 

// console.log(findLongestSubstring('')) // 0
// console.log(findLongestSubstring('rithmschool')) // 7
// console.log(findLongestSubstring('thisisawesome')) // 6
// console.log(findLongestSubstring('thecatinthehat')) // 7
// console.log(findLongestSubstring('bbbbbb')) // 1
// console.log(findLongestSubstring('longestsubstring')) // 8
// console.log(findLongestSubstring('thisishowwedoit')) // 6