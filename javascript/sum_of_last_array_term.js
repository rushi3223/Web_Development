function sumLastNTerms(arr, n) {
  let sum = 0;

  // Start from the end of the array and go back n steps
  for (let i = arr.length - n; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// Example usage:
let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let n = 3;

let result = sumLastNTerms(array, n);
console.log("Sum of last", n, "terms is:", result);
