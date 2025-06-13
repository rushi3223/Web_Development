let random = Math.random()
console.log(random)

let a = prompt("Enter Fisrt Number")
let b = prompt("Enter opration")
let c = prompt("Enter secound Number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {
    alert(`The Result is ${eval(`${a} ${b} ${c}`)}`)
    
} else {
    // perform wrong operation
    c = obj[c]
    alert(`The Result is ${eval(`${a} ${b} ${c}`)}`)
    
}