function printDiamondPattern(word, n) {
    if (n % 2 === 0) {
      n += 1;
    }
  
    const length = word.length;
    let k = 0;
  
    for (let i = 0; i <= n / 2; i++) {
      let pt = k;
      let line = " ".repeat(n - i - 1);
  
      for (let j = 0; j < 2 * i + 1; j++) {
        line += word[pt % length];
        pt += 1;
      }
  
      k += 1;
      console.log(line);
    }
  
    for (let i = n / 2 - 1; i >= 0; i--) {
      let pt = k;
      let line = " ".repeat(n - i - 1);
  
      for (let j = 0; j < 2 * i + 1; j++) {
        line += word[pt % length];
        pt += 1;
      }
  
      k += 1;
      console.log(line);
    }
  }
  
  // Input: take n as input
  const n = 16;
  console.log("OUTPUT:");
  const word = "FORMULAQSOLUTIONS";
  
  // Print the diamond pattern
  printDiamondPattern(word, n);
  