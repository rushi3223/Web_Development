// Number of terms to print
let n = 20


let num1 = 0, num2 = 1;


console.log("Fibonacci Series:");
console.log(num1); // 0
console.log(num2); // 1

// Loop to print the next terms
for (let i = 2; i < n; i++) {
  let nextNum = num1 + num2;
  console.log(nextNum);
  num1 = num2;
  num2 = nextNum;
}
