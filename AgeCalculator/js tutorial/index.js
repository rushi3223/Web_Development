console.log("Heyy i am Ruhi")

let a = "RUSHI";

console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])

let real_name = "RUSHI"
let friend = "KEESA"

console.log("HIS NAME IS"  + real_name +  "AND HIS FRIENDS NAME IS "  + friend)
console.log(`HIS NAME IS ${real_name} AND HIS FRIENDS NAME IS  ${friend}`) //we can insert variabels directly in template liternal, this is called string interpolation

/* a = "rushi"-- print rushi
 a = "rushi"hello" ----  print syntax error
 a = "rushi`hello" ---- print "rushi`hello" 
 a = `rushi"hello`  ---- print `rushi"hello`
 a = "rushi\"hello" ---- print "rushi"hello"

this is all called escape sequence characters ----- \n= New line
                                                    \t= tale
                                                    \r= carriage Return  */

let x= "baby"

console.log(x.toLowerCase())
console.log(x.toUpperCase())
console.log(x.length)
    
let c= "baby i was there in 5 minits"
console.log(c.slice(5 , 16))
console.log(c.slice(17 , ))
console.log(c.slice( 0, -23))
console.log(c.replace("5", "30"))


console.log(friend.concat(c, "SORRY"))

console.log(x) 
console.log(c)  // there no change in main memory --- once you can set one string , can not chanbe using above typ of functions , it just change in there particuler output not in globally
