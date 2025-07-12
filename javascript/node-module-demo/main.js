import { add, subtract } from "./math.js";

const addResult = add(int((prompt("Enter first number for addition:") || 0), int((prompt("Enter second number for addition:") || 0  ))));
const subtractResult = subtract(20, 10);

document.body.innerHTML = `
  <h2>Math Module Demo</h2>
  <p>Addition: ${addResult}</p>
  <p>Subtraction: ${subtractResult}</p>
`;
