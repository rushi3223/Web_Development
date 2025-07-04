let arr = [1, 2, 2, 33, 55]

console.log(arr.length)
console.log(arr)


console.log(arr[4])
console.log(arr[0])
console.log(arr[3])

arr[3] = 300;

console.log(arr)

console.log(arr.toString())  // arr converted into string

arr[5] = "rushi";

console.log(arr)

arr [5]= "Keesa";
console.log(arr)

console.log(arr.join(" AND "))
console.log(arr)

let b1 ="1, 11, 22, 33"
let b2 ="100, 10, 20, 30"
let b3 ="1, 11, 22, 33"

let c= b1.concat(b2,b3)
console.log(c)
console.log(c.length)


let number = [11, 111, 1111, 11111, 111111]

number.splice(2, 2)
console.log(number)

number.splice(0, 4)
console.log(number)


let names  = ["rushi", "xyz", "ABC" ]
console.log(names.reverse())

let A = [8, 88, 888, 8888]

for (let index = 0; index < A .length; index++) {
    const element = A [index];
console.log(element)
}


A .forEach((value, index, arr) => {

    console.log(value, index) 
});





let obj = {

   a: 10, 
   b: 20, 
   c: 30,
   d: "rushi" 
}
 
console.log(obj)
console.log(obj.a)
console.log(obj["b"])
console.log(obj.c)
console.log(obj.d)
console.log(obj["d"] = "Keesa") // updating value of d
console.log(obj)

console.log(typeof ("2" + 2)) // string concatenation         22
console.log(typeof("2" - 2)) // string to number conversion    0
console.log(typeof("2" * 2)) // string to number conversion    4

let str = "123";
let num = Number(str);   // converting string to number   -- Also use ParseInt(str) or parseFloat(str)
console.log(num, typeof (num) ); // number

// let num2= Number(prompt("Enter a number"));
// console.log(num2, typeof (num2)); // number

//NAN - NOT A NUMBER
let nanValue = Number("abc"); // trying to convert a non-numeric string to number
console.log(nanValue, typeof (nanValue)); // NaN



