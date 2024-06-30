function binarySearch(arr, searchItem) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let guess = arr[middle];

    if (guess == searchItem) return middle;

    if (searchItem > guess) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
}

const arr = [1, 2, 4, 5, 7, 9, 20, 26, 28, 30, 35, 40, 43, 47, 50, 53];