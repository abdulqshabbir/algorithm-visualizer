const createInsertionSortAnimationFrames = array => {
  /*
        At any time, our array will have a sorted and unsorted subset (sorted to left, unsorted to right)
        We will take elements one at a time from the unsorted subset and move the lowest numbers into the left-most position
        in the sorted subset.
    */
  const arrayToSort = array.slice();
  const animationFrames = [];

  let currentAnimationFrame = [];
  for (let i = 1; i < arrayToSort.length; i++) {
    let valueToInsert = arrayToSort[i];
    let hole = i;

    while (hole > 0 && valueToInsert < arrayToSort[hole - 1]) {
      // shift array element one index to the right
      arrayToSort[hole] = arrayToSort[hole - 1];

      // Note: this line below is only for visualizing the sorting algorithm
      arrayToSort[hole - 1] = 0;
      currentAnimationFrame = arrayToSort.slice();
      animationFrames.push(currentAnimationFrame);

      // shift 'hole' to the left
      hole--;
    }
    arrayToSort[hole] = valueToInsert;

    // handle animations
    currentAnimationFrame = arrayToSort.slice();
    animationFrames.push(currentAnimationFrame);
  }
  return animationFrames;
};

export default createInsertionSortAnimationFrames;
