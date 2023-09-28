//Create a function with two arguments that will return an array of the first n multiples of x.


function countBy(x, n) {
    let z = [];
    for (i=1; i<=n; i++) {
        z.push(i*x);
    }
    return z;
  }