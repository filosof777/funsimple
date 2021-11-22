function theNumber(a) {
  let sum = 0;
  for (let i = 1; i < a; i++) {
    if (a % i == 0) {
      sum += i;
    }
  }
  if (sum / a == 1) {
    console.log("Mukammal son");
  } else {
    console.log("Mukammal son emas");
  }
}

theNumber(496);