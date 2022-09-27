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

    console.log(str, str.length)

    let left = 0;
    let right = 0;

    let count = 0;
    let finall = 0;

    let dictionary = {}

    while (right < str.length + 1) {

        // console.log(arr, arr.length, count);
        if (finall < count) finall = count

        console.log(dictionary, count)
        // if (arr.includes(str[right])) {
        if (dictionary[str[right]]) {
            // If letter already existed

            // console.log("\nExisted", "dictionary[str[right]]:", dictionary[str[right]], "str[right]", str[right])
            // if last one is equal to current
            // console.log("\n", str[left], str[right], "LEFT:", left, "RIGHT:", right)

            if (str[left] != str[right]) {
                // arr.splice(0, 1);
                delete dictionary[str[left]];
                left = left + 1;
                count--;
            }
            else {
                // arr.push(str[right]);
                dictionary[str[right]] = 1;
                // arr.splice(0, 1);
                delete dictionary[str[left]];
                count--;
                left = left + 1;
                // right++;
            }

        }
        else {
            // if letter is new 
            // arr.push(str[right]);
            dictionary[str[right]] = 1

            right++;
            count++;
        }
    }

    console.log("Final: ", finall)

}

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6

// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6