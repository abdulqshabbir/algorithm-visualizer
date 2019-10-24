const createInsertionSortAnimationFrames = array => {
  /*
        At any time, our array will have a sorted and unsorted subset (sorted to left, unsorted to right)
        We will take elements one at a time from the unsorted subset and move the lowest numbers into the left-most position
        in the sorted subset.

        1.  Element at index 0 is sorted with itself (unorted subset lies from 1 to n - 1) 
        2.  Iterate over unsorted subset: i to n - 1
                valueToInsert <- A[i]
                hole <- i
                3. while your hole is bigger than 0 and valueToInsert < A[hole - 1]
                        A[hole] <- A[hole - 1]
                        hole --
                A[hole] <- value

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
