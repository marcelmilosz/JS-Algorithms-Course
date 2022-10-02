// Write a recursive function called capitalizeFirst.Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {

    let newArr = []

    if (arr.length < 1) return newArr;

    newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1))

    return newArr.concat(capitalizeFirst(arr.slice(1)))

}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']


