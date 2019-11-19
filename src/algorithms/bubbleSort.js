export function createBubbleSortAnimationFrames(unsortedArray) {
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

export default createBubbleSortAnimationFrames;

function swapTwoArrayElements(array, i, j) {
  // a and b are the indices of an array whose elements need to be swapped
  if (array[j] === undefined || array[i] === undefined) {
    throw new Error("Out of bounds error!");
  }
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
