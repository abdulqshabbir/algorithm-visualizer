const selectionSort = array => {
  /*
        input: array to sort of length n
        output: sorted array
    */
  for (let i = 0; i < array.length - 1; i++) {
    // let i represent the start of the unsorted half of the array
    let minIndex = i;
    let min = array[i];

    //let j represent the index that will search for a minimum value in the
    //unsorted half for a given pass
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        // if a smaller element is found, update min and minIndex
        min = array[j];
        minIndex = j;
      }
    }
    let temp = array[i];
    array[i] = min;
    array[minIndex] = temp;
  }
  return array;
};

export default selectionSort;
