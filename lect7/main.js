//  Objects
let person = {
  name:"Sid",
  age:25,
  proffesion:"developer",
  skills:["HTML","CSS","JS"]
}

console.log(person);

console.log(person.skills);
console.log(person["proffesion"]);

// arithmatics operators 
// +,-,*, / , ** 
console.log(Math.pow(2,5)); //2^5
console.log(2**5); // 2^5
console.log(Math.sqrt(4));

// assignment operators 

// conditional operators
let a = 10;
let b = "10"
if(b==a){
  console.log(true);
}

if(a===b){
  console.log(true);
}

if(a===b || b==a){
  console.log(true);
}

if(a===b && b==a){
  console.log(true);
}

if( (a===b || a==b) || (a===b && b==a) && (a==b)){
  console.log("true");
}else{
  console.log("false");
}

// ternary operator

(a===b?console.log("true statement"):console.log("flase statement"))
let result = (a==b?"true":"false");
console.log("result =>",result);

// chaining
(a==b?(a===b?console.log("a and b are equal and both are of same data type")
  :console.log("a and b are equal but of different data type")
  ):console.log("not equla"))

// loops
let arr = [1,2,3,4,5,6,7,8];
// for of loop
for (let element of arr) {
  console.log(element);
}

for(let key in arr){
  console.log(key); // will print indexs
}

let person2 = {
  name:"Sid",
  age:25,
  proffesion:"developer",
  skills:["HTML","CSS","JS"]
}
// for in loop
for (let key in person2) {
  // console.log(key,"->",person.key); // not work as key is string 
  console.log(key,"->",person[key]);
}

