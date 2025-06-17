// String

let str = "this is a string";
let newStr = str.replace("is","in");
console.log(newStr);

newStr = str.replaceAll("is","in");
console.log(newStr);

console.log(str[5]);
console.log(str.charAt(5));

console.log(str.startsWith("is")); // boolean
console.log(str.endsWith("ing")); // boolean
console.log(str.includes("ri")); 

str = "this is a string";
let arr = str.split(" ");
console.log(arr);