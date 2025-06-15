
let random = Math.random()
console.log (random)

let a = prompt("Enter First Number")
let b = prompt("Enter Operation")
let c = prompt("Enter Secound Number")

let obj ={
      
       "+": "-",
       "*": "+",
       "-": "/",
       "/": "*",
}

if (random > 0.1 ) {

    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)

    
} else {

    c = obj [c]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}