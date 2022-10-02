function selectionSort(arr) {

    let minIndex = 0;
    let tmp;

    for (let i = 0; i < arr.length; i++) {
        minIndex = i;

        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }

        tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }

    return arr
}

console.log(selectionSort([1, 3, 5, 10, -12, 1, 3, 1]))