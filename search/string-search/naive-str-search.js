function naiveStrSearch(str, pattern) {
  let matchCount = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) matchCount += 1;
    }
  }
  return matchCount;
}

console.log(naiveStrSearch("lolrie loled loffdssdlofo", "lol"));
