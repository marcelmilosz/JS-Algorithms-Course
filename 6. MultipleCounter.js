// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

//     Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

function areThereDuplicates(...args) {

    let d = {};

    for (let i in args) {
        (!d[args[i]]) ? d[args[i]] = 1 : d[args[i]] += 1;
        if (d[args[i]] == 2) return true;
    }

    return false
}

// One liner <3
// function areThereDuplicates(...arguments) {
//     return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates("a", "b", "a", "c"))


