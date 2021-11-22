function theNumber(a) {
  let sum = 0;
  for (let i = 1; i < a; i++) {
    if (a % i == 0) {
      sum += i;
    }
  }
  if (sum / a == 1) {
    console.log("Mukammal son", sum);
  } 
}

function secondNumber(b) {
  let s = 0;
  for (let i = 1; i <= b; i++) {
    s += i;
    if (theNumber(i) / s == 1) {
      console.log(theNumber(s));
    }
  }
}

secondNumber(49600);

// ishlavottimi tegma xaxaxa :)