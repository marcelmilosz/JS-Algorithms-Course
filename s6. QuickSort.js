
function swap(arr, left, right) {
    // console.log(`Swapping ${arr[left]} - ${arr[right]}`)
    let tmp = arr[left];
    arr[left] = arr[right]
    arr[right] = tmp;
    return arr
}

function pivot(arr, start = 0, end = arr.length + 1) {

    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        // console.log(arr, i)
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, start, swapIndex)
    // console.log(arr);

    return swapIndex

}

function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {
        let pivotIndex = pivot(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

// // console.log(swap([2, 3, 1, 4], 0, 1))
// // console.log(pivot([5, 3, 2, 7, 4]))
console.log(quickSort([4, 3, 1, 7, 2, 9]))