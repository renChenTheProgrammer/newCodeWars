// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//my answer:

const reverseSeq = n => {
    let answer = [];          //intialize an array
    for (let i=n; i>0; i--){  //loop down from n to 1
      answer.push(i);         //push each i to the answer array
    } 
    return answer;            //return answer;
  };
  
  //my favorite:

  const reverseSeq = length => Array.from({length}, () => length--)