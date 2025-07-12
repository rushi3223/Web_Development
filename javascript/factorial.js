let n = parseInt(prompt("Enter a number:"));
let factorial = 1;

if (n < 0) {
  alert("Factorial of a negative number doesn't exist.");
} else {
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  alert(`Factorial of ${n} is: ${factorial}`);
}
