// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// //mine:
function findAverage(array) {
    if (array.length == 0){
      return 0;
    }
    else{
      sum = array.reduce((acc, curr) => acc + curr, 0);
      return (sum / array.length);
    }
  }

//my favorite:
find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;