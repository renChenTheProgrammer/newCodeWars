// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    return numbers
      .map(n => n * n)
      .reduce((total,n) => {
    return (total + n)
    }, 0)
  }