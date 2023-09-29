// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Notes:

// If either input is an empty string, consider it as zero.

//mine:
function sumStr(a,b) {
    if (a === '') a = 0
    if (b === '') b = 0
    return `${parseInt(a) + parseInt(b)}`
  }

//my fave:
function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }