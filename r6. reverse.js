// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
    // add whatever parameters you deem necessary - good luck!
    if (str.length == 1) return str;
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1))
}

// console.log(reverse('awesome'))
// console.log(reverse('rithmschool'))