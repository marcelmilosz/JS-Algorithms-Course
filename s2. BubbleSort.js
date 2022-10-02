function BubbleSort(arr) {

    let swap;
    let tmp;

    for (let i = 0; i < arr.length; i++) {

        swap = false;

        for (let j = 0; j < arr.length - i; j++) {

            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swap = true;
            }
        }

        if (swap == false) break;
    }

    return arr
}

console.log(BubbleSort([1, 3, 1, 2, 3, 4, 5]))