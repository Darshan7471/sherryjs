// ****introduction to javascript
// js ek scripting language hai, computer ko binary samajh ati hai joki 0-1 me likhi jati hai 
// harsh => translater (interpreter/compiler) -> 0101010101010101
// js bhi ek aisi language hai jo hamn insan likhte hai jo 01 01 me likhi jati hai taki machine samajh sake
// computers powerfull hai unhe use krne se ham kam jaldi kr sakte hai unki language hame nhi ati hamari language 
// unhe nhi ati to yransalater banao jo hamari language ko convert kare and ulta bhi kre uska nam hai interpreter / compiler

// *****js - brendan eich
// netscape me kam krte they
// 15-16 dino me
// itni jaldi bani to kafi issue reh gaye
// jaldbaji ka kaam ho gaya
// errors and bugs choot gaye
//to unhone fix krte krte js ke bhot sare versions aaye
// unme se ek ebse bada version aaya jiska naam the es6
// uske baad aur bhi verion aye pr es6 sabse bada chaange raha hostory me, kuki 
// js lagbg completely badal gayi matlab ki js ke issue and bugs and problem fix krne ke liye bohot sare naye updates diye gaye


// why it is important
// what can it do for you ?
// script tag use krke attact krna hai js ko
// js ko brouser mein run krna
// var let conts
// console... promt alert
// strings kya hoti hai
// slice templates strings split replace includes


let b = 130;
const c = 10;

console.log(b)
console.info(b)
console.warn(b)
console.error(b)
console.table({b,c})

// kuch kuch browsers bas console.info thode aapko dikhate hai
// kuch kuch console.log bhi dikhate hai

// promt alert

let phone = prompt("enter your phone number");
let phoneSTring = `now you have own ${phone} this mobile number`;


// prompt("enter your age")
// let age = prompt("enter your age")
console.log(phoneSTring)

// string = "content"
// template string = `content ${variable} content`
// split = "string".split(" ")
// replace = "string".replace("old","new")
// replaceAll = "string".replaceAll("old","new")
// includes = "string".includes("searching content")

// statements and expressions
// statment ek aisa code jo answer dede
// ek complete line ka code kiske last me ; lagta hai
// expression ek aisa code jo value deta hai

 var a = 10; // statment

 12 + 13 // expression

