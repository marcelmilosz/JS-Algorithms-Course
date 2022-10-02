



function insertionSort(arr) {

    let currentVal;

    for (let i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (arr[j] < currentVal) break

            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal
    }

}

insertionSort([2, 1, 3, 5, 4, 3])