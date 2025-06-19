// function cb(x) {
//   console.log("callback function", x);
//   return function(y) {
//     console.log("inner function", y);
//     return x + y;
//   };
// }
// function higher(callback) {
//   console.log("higher order function");
//   let innerFunc = callback(5);
//   console.log("this is below call");
//   return innerFunc(10);
// }
// console.log(higher(cb));
// // ------------------------------------

// function cb(x) {
//   console.log("callback function", x);
//   if (x > 10) {
//     return "Greater than 10";
//   } else {
//     return "Less than or equal to 10";
//   }
// }
// function higher(callback, value) {
//   console.log("higher order function");
//   let ans = callback(value);
//   console.log("this is below call");
//   return ans;
// }
// console.log(higher(cb, 12));
// console.log(higher(cb, 8));
// // ------------------------------------

// function cb() {
//   console.log("callback function");
//   return function() {
//     console.log("inner function 1");
//     return function() {
//       console.log("inner function 2");
//       return "Final Return";
//     };
//   };
// }
// function higher(callback) {
//   console.log("higher order function");
//   let innerFunc1 = callback();
//   console.log("this is below call 1");
//   let innerFunc2 = innerFunc1();
//   console.log("this is below call 2");
//   return innerFunc2();
// }
// console.log(higher(cb));
// // ------------------------------------

// function greet(callback) {
//   console.log("Step 1");
//   callback("John");
//   console.log("Step 3");
// }

// function sayHello(name) {
//   console.log("Step 2: Hello", name);
// }

// greet(sayHello);
// // -------------------
// function outer(callback) {
//   console.log("1. outer");
//   const returnedFunc = callback(10);
//   console.log("3. back to outer");
//   return returnedFunc(5);
// }

// function multiply(x) {
//   console.log("2. inside callback", x);
//   return function(y) {
//     console.log("4. inner", y);
//     return x * y;
//   };
// }

// console.log("Result:", outer(multiply));
// // ---------
// function compute(callback) {
//   console.log("Compute start");
//   const addFive = callback(5);
//   const result = addFive(10);
//   console.log("Compute end");
//   return result;
// }

// function createAdder(x) {
//   console.log("Inside createAdder with", x);
//   return function(y) {
//     console.log("Adding", x, "+", y);
//     return x + y;
//   };
// }

// console.log(compute(createAdder));

// // ------------
// function start(callback) {
//   console.log("Start function");
//   return callback(3)(4);
// }

// function first(x) {
//   console.log("First function", x);
//   return function(y) {
//     console.log("Second function", y);
//     return x + y;
//   };
// }

// console.log("Result:", start(first));

// // ----------
// function execute(fn) {
//   console.log("Executing...");
//   return fn(2, 3);
// }

// console.log(
//   execute(function(a, b) {
//     console.log("Callback called");
//     return a * b;
//   })
// );

// Q. take an input(number) from user and console whether the number is
// 0,less than 0, or greater than 0 or a word
let num = prompt("enter a number");
console.log(num,typeof(num));

let ans = num==0?"its a zero":num<0?"less than 0":num>0?"greater than 0":"its a word"
console.log(ans);

