import React from "react";

const createInsertionSortAnimationFrames = unsortedArray => {
  /*
        At any time, our array will have a sorted and unsorted subset (sorted to left, unsorted to right)
        We will take elements one at a time from the unsorted subset and move the lowest numbers into the left-most position
        in the sorted subset.

        1.  Element at index 0 is sorted with itself (unorted subset lies from 1 to n - 1) 
        2.  Iterate over unsorted subset: i to n - 1
                valueToInsert <- A[i]
                hole <- i
                3. while your hole is bigger than 0 and valueToInsert < A[hole - 1]
                        A[hole]
                        hole --

    */
};

export default createInsertionSortAnimationFrames;
