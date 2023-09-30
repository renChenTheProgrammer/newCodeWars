//square every digit of a number and concatenate them

function squareDigits(num){
    let answer = "";
    num = num.toString();
    for (let i = 0; i < num.length; i++){
      answer = answer + (num[i] * num[i]).toString();
    }
    return Number(answer);
    }