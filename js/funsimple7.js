let a = 7;

for (let i = 1; i <= a; i++) {
  if (a % i == 0) {
    continue;
  } else if (a % i == 1) {
    console.log(i)
  }
}