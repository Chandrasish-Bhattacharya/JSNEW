/* "use strict" //treats all Js code in as new version*/
// alert(3+3) we are using nodejs , not browser 
console.log("Hello")
let name = "Chandrasish" // this is a string in js
let age = 20 // this is a Number type 
let logedIn = true // this is a boolean 
// so waht are the different data types in js 
// 1> Numbers => 2 to the power of 53 -1
// 2> Big Int => 2 to the power of 64 -1
// 3> String => "Hello" , 'Hello' , `Hello`
// 4> Boolean => true , false
// 5> Undefined => variable is declared but not assigned any value
// 6> Null => variable is declared and assigned null value (Stand alone value)
// 7> Symbol => unique value , used for object properties
// 8> Object => collection of key value pairs , can be mutable or immutable
console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof logedIn) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object (this is a bug in js)