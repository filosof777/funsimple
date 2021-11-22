function theNumber(a) {
  for (let i = 1; i <= a; i++) {
    if (i % 3 == 0) {
      if (i / 3 == 1) {
      } else if (i % 5 == 0) {
        continue;
      }
      console.log(i);
    }
  }
}

theNumber(50);