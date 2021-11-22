let a = 25;

for (let i = 0; i <= a; i++) {
  for (let j = 0; j <= a; j++) {

    if (j % i == 0) {
      console.log(j)
    }
  }
}