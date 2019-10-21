export function createBubbleSortAnimationFrames(
  unsortedArray,
  setUnsortedArray
) {
  let arrayToSort = unsortedArray.slice();
  let arrayAnimationFrames = [];
  let currentAnimationFrame = [];
  let didSwap = true;
  while (didSwap) {
    didSwap = false;
    for (let i = 0; i < arrayToSort.length - 1; i++) {
      if (arrayToSort[i] > arrayToSort[i + 1]) {
        swapTwoArrayElements(arrayToSort, i, i + 1);
        //push state of array after swap onto array animation frames
        currentAnimationFrame = arrayToSort.slice();
        arrayAnimationFrames.push(currentAnimationFrame);
        didSwap = true;
      }
    }
  }
  return arrayAnimationFrames;
}

export function bubbleSort(array) {
  /*
    initialize didSwap to true
    While didSwap is true,
      Iterate through the array and swap elements if they are out-of-order:
        set didSwap to false
        If array[i] > array[i + 1]  => swap two elements in position i and i + 1
                                    => set didSwap to true
  */
  let didSwap = true;
  const arrayToSort = array.slice();
  while (didSwap) {
    didSwap = false;
    for (let i = 0; i < arrayToSort.length - 1; i++) {
      if (arrayToSort[i] > arrayToSort[i + 1]) {
        swapTwoArrayElements(arrayToSort, i, i + 1);
        didSwap = true;
      }
    }
  }
  return arrayToSort;
}

function swapTwoArrayElements(array, i, j) {
  // a and b are the indices of an array whose elements need to be swapped
  if (array[j] === undefined || array[i] === undefined) {
    throw new Error("Out of bounds error!");
  }
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
