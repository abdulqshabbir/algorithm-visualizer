const mergeSort = arrayToSort => {
  /*
      Breaking logic:
        n <- length(arrayToSort)
        midIndex <- Math.floor(n-1/2) 

        // let i represent the starting index of the 'left subarray'
        // Let LArray be the left array
        for i <- 0 to midIndex:
          LArray[i] <- arrayToSort[i]
        for i <- midIndex + 1 to n - 1
          RArray[i - (midIndex + 1)] <- arrayToSort[i]
      
      Merge function: Trigger function only if less than 2 elements in array
        (LArray, RArray) -> MergedSortedArray

        merge(LArray, RArray) {
          const mergedArray = []
          0 <- i
          0 <- j

          while (i < length(LArray) and j < length(RArray)) {
            if (LArray[i] <= RArray[j]) {
              mergedArray.push(LArray[i])
              i++
            }
            else {
              mergedArray.push(RArray[j])
              j++
            }
          }

          if (j < length(RArray)) {
            for k <- j to RArray.length - 1
              mergedArray.push(RArray[i])
          }
          if (i < length(LArray)) {
            for k <- i to LArray.length - 1
              mergedArray.push(LArray[i])
          }

          return mergedArray
        }
    */
};

export default mergeSort;
