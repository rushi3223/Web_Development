// 1-Arithmetic Operators

console.log ("3 + 2 = ", 3 + 2);
console.log ("3 - 2 = ", 3 - 2);
console.log ("3 * 2 = ", 3 * 2);
console.log ("3 / 2 = ", 3 / 2);
console.log ("3 % 2 = ", 3 % 2);
console.log ("3 ** 2 = ", 3 ** 2); // Exponentiation

// On a shopping website, calculate the total cost of a product when given the price per item(price=150) and the quantity of items purchased(quantity=3), also calculate the 10% discount on the total cost and diplay the discounted total cost.

let price = 150;  // Price per item
let quantity = 3;   // Quantity of items purchased

// Calculate total cost and discount
let totalCost = price * quantity;
// calculate a 10% discount
let discount = totalCost * 0.10;     // total * 10/100  = total * 0.10
// Calculate discounted total cost
let discountedTotalCost = totalCost - discount;

console.log("Total Cost: ", totalCost);
console.log("Discounted Total Cost: ", discountedTotalCost);


// 2-Assignment Operators

let x = 10; // Assignment
console.log("Initial value of x:", x);
x += 5; // Add and assign
console.log("After x += 5:", x);
x -= 3; // Subtract and assign
console.log("After x -= 3:", x);
x *= 2; // Multiply and assign
console.log("After x *= 2:", x);
x /= 4; // Divide and assign
console.log("After x /= 4:", x);
x %= 3; // Modulus and assign
console.log("After x %= 3:", x);
x **= 2; // Exponentiation and assign
console.log("After x **= 2:", x);

console.log ("Final value of x:", x);

if (x >10) {
    console.log("x is grater: " + x)
}
else if (x == 0) {
    console.log("Oo My God X is ZERO!! =  " + x)
} else {
    console.log("x is equal: " + x)
}

// 3-Comparison Operators   

let a = 5;
let b = 3;

console.log("5 == '5':", 5 == '5'); // Loose equality    //its check value only
console.log("5 === '5':", 5 === '5'); // Strict equality   // its check value and type both
console.log("5 != '5':", 5 != '5'); //  not equality    
console.log("5 !== '5':", 5 !== '5'); // Strict not equality  

console.log (" The vale of a is: ", a);
console.log (" The value of b is: ", b);
console.log("a > b:", a > b); // Greater than
console.log("a < b:", a < b); // Less than
console.log("a >= b:", a >= b); // Greater than or equal
console.log("a <= b:", a <= b); // Less than or equal


// 4-Logical Operators

let x1 = true;
let y1 = false;

console.log("x1 && y1:", x1 && y1); // Logical AND     both must be true
console.log("x1 || y1:", x1 || y1); // Logical OR      either one is true  
console.log("!x1:", !x1); // Logical NOT               // Negation of x1 =  flips true/false

let W = 100;

if (W > 50 && W < 1000) {
    console.log ("Here W is in range: " + W);
} else {
    console.log ("Sorry...!! Here W is out of range: " + W);
}

//increment and Decrement Operators

let count = 10;
console.log("Initial count:", count);
count++; // Increment
console.log("After count++:", count);
count--; // Decrement
console.log("After count--:", count);

// post increment
let postIncrement = count++;
console.log("Post Increment (count++):", postIncrement);   // First it will assign the value of count to postIncrement, then increment count
console.log("Count after post increment:", count);  // Count is now incremented

// pre increment
let preIncrement = ++count;  // First it will increment count, then assign the value to preIncrement
console.log("Pre Increment (++count):", preIncrement);  // Count is now incremented
console.log("Count after pre increment:", count);  // Count is now incremented

// post decrement
let postDecrement = count--;    
console.log("Post Decrement (count--):", postDecrement);  // First it will assign the value of count to postDecrement, then decrement count
console.log("Count after post decrement:", count);  // Count is now decremented
// pre decrement
let preDecrement = --count;  // First it will decrement count, then assign the
// value to preDecrement
console.log("Pre Decrement (--count):", preDecrement);  // Count is now decremented
console.log("Count after pre decrement:", count);  // Count is now decremented


// 5-Conditional (Ternary) Operator
let age = 13;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";  // first condition is true and second is false
console.log(canVote);

//on a booking website , check if the user's age is at lest or above 18 to allow booking , otherwise display a message that Not eligible for booking .

let userAge = 20; // Example age
let eligibilitycheck = (userAge >=18 ) ? "Eligible for booking." : "Not eligible for booking.";
console.log(eligibilitycheck);


// on a logine page, verify user's credentials (username and password) , check username is not empty and password is at least 6 characters long, if both conditions are met, display a success message, otherwise display an error message.

let username = "user123"; 
let password = "pass123"; 

let logincheck = (username !== "" && password.length >= 6) ? "Login successful." : "Login failed. Please check your credentials.";
console.log(logincheck);
 //or
 if (username !== "" && password.length >=6) {
    console.log("Login Successfully");
 } else {
    console.log("Login Failed. Please check your credentials.");
 }


 //find the largest number 

 let a1 = 10 , b1 = 20, c1 = 15;
 let largest = (a1 >b1 ? 
                (a1 > c1 ? a1 : c1) : 
                (b1 > c1 ? b1 : c1));
 console.log("Largest number is: ", largest);

 //for three numbers
let num1 = 5, num2 = 10, num3 = 7, num4 = 12;

let largestNum = (num1 > num2 && num1 > num3 && num1 > num4) ? num1 :
                 (num2 > num1 && num2 > num3 && num2 > num4) ? num2 :
                 (num3 > num1 && num3 > num2 && num3 > num4) ? num3 :
                 num4
console.log("Largest number is:", largestNum);

