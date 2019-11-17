function merge(listA, listB) {
  // merge will take in two sorted sublists (listA/listB) and merge them - in sorted order - into a parent list (mergedList)
  const mergedList = [];

  // i is the index of the smallest unpicked element in listA
  // j is the index of the smallest unpicked element in listB
  var i = 0;
  var j = 0;

  while (i < listA.length && j < listB.length) {
    if (listA[i] <= listB[j]) {
      mergedList.push(listA[i]);
      i++;
    } else {
      mergedList.push(listB[j]);
      j++;
    }
  }

  while (j < listB.length) {
    // while there are still unpicked elements in listB to be added...
    mergedList.push(listB[j]);
    j++;
  }

  while (i < listA.length) {
    // while there are still unpicked elements in listA to be added...
    mergedList.push(listA[i]);
    i++;
  }
  return mergedList;
}

function mergeSort(list) {
  // Let list represent the original array to be sorted

  // Base case: a list with 0-1 elements is already sorted
  if (list.length < 2) {
    return list;
  } else {
    let middle = Math.floor(list.length / 2);

    // Make call to merge with two halves and keep recursively calling mergeSort until list is subdivided into < 2 elements
    return merge(
      mergeSort(list.slice(0, middle)),
      mergeSort(list.slice(middle, list.lenght))
    );
  }
}

const sortedList = console.log(
  "sorted list: ",
  mergeSort([2, 34, 345, 45, 2, 3, 4, 45, 6, 45, 3, 3])
);

export default sortedList;
