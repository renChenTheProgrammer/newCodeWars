// I want to get the sum of two arrays... Actually the sum of all their elements. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }