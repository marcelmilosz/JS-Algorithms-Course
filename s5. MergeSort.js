
function m(arr1, arr2) {

    let arr = [];

    let left = 0;
    let right = 0;

    while (right <= arr2.length && left <= arr1.length) {

        if (arr1[left] < arr2[right]) {
            if (right == arr2.length) {
                // console.log("We should break! 1", arr2.slice(right, arr2.length))
                arr = arr.concat(arr2.slice(right, arr2.length))
                break;
            }
            arr.push(arr1[left])
            left++;
        } else {

            if (right == arr2.length) {
                // console.log("We should break! 2", arr1.slice(left, arr1.length))
                arr = arr.concat(arr1.slice(left, arr1.length))
                break;
            }

            arr.push(arr2[right])
            right++;
        }
    }

    return arr
}

function mergeSort(arr) {

    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return m(left, right);
}
// let arr = Array.from(Array(20)).map(x => Math.floor(Math.random() * 100))
console.log(mergeSort([1, 4, 2, 5, 3, 6]))