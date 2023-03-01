let count = 1;
let i = 10;
while (true) {
  count *= i;
  i--;
  if (i <= 1) {
    break;
  }
}
console.log(count);
