function getCount(str) {
    let vowelCount = 0
    for (i = 0; i < str.length; i++) {
      if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
        vowelCount += 1
      }
    }
    return vowelCount;
  }