//given a string of words, return the length of the shortest word(s).



findShort = s => Math.min.apply(this, s.split(" ").map(element => element.length))
