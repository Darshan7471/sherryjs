// add comments
//darshan
// datatypes in js, data ka type hi hai datatype
// float = 1.2 float
// number = 1

// 2000 integer
// string = "hello"
// aur bhai kaise ho

// boolean = true/false
// null = empty value
// jab apke pass koi value nhi hoti tab null hota hai

// let data = null;
// array = []

// ["darshan", "sherry", "hello"]
// [1, 2, 3, 4, 5]
// [true, false, true]

// ek se jyada values ko store karne ke liye array use karte hai
// object = {}

// {
//     name: "darshan",
//     age: 21,
//     isMarried: false,
// }

// ek se jyada values ko store karne ke liye object use karte hai

// Symbol - will learn when we will see objects in detail 
// undefined = value not assigned
//let a;
// NaN = not a number

// koi number ke saath aisa operation kiya jo nhi ho sakta vo NaN hota hai
//console.log(a + 5); // NaN
// Infinity = infinite value
// NaN = Not a Number
// Infinity = Infinite
// relative and primitive datatype in js

// jisme bracket laga hota hai vo relative datatype hota hai
// jisme bracket nhi laga hota vo primitive datatype hota hai

let a = [1, 2, 3,4]; // relative datatype
let b = a; // relative datatype

b.pop(); // ye array ke last element ko remove kar deta hai

console.log(a);
// let a = 10;
// let b = 30;

// let c = a;

// console.log(a);

// reference = array, object, function
// primitive = number, string, boolean, null, undefined, symbol, BigInt

// primitive -  jinki value direct copy kr sakte hai
// reference - jinki value direct copy nhi kr sakte hai

//****************************assignments */

let age = 25;
let name = "darsan";
let isStudent = true;
let languages = ["english","hindi","marathi"];
let address = {city:"nashik",state:"maharashtra",pincode:422010}
let x = null;
let z = Symbol("id")

console.log(typeof age,typeof name,typeof isStudent,typeof languages,typeof address,typeof x,typeof z)


let values = prompt("Enter your favurite fruit");
let fruits = ["apple", "banana", "orange",values]

console.log(fruits[3], "is your food");


