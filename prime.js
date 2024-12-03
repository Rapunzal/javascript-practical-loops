//Next Prime Number
let isPrime = true;
let n = 23;

myloop: while (true) {
  n++;
  isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  // console.log(flag);
  if (isPrime === true) {
    break myloop;
  }
}
console.log(n);
