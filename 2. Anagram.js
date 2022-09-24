// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true

// Time complexity: O(n)

function validAnagram(s1, s2) {

    if (s1.length != s2.length) {
        return false;
    }

    let s1D = {};
    let s2D = {};

    for (let s in s1) {
        s1D[s1[s]] = (s1D[s1[s]] || 0) + 1;
    }

    for (let s in s2) {
        s2D[s2[s]] = (s2D[s2[s]] || 0) + 1;
    }

    for (key in s1D) {
        if (s2D[key] != s1D[key]) {
            return false;
        }
    }

    return true;
}

// validAnagram("anagram", "nagaram");