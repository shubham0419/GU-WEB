for (var i = 0; i < 3; i++) {
  // some code
}
console.log(i); // What is the output?
// a) What will be the value of i after the loop?
// b) How will it change if var is replaced with let?

// --------------
// var a = 1;

// {
//   let a = 2;
//   {
//  give redeclaration error as a is already defined as let 
//     var a = 3;
//     console.log(a);
//   }
// }


// ---------------
// let a = 1;
// {
//   var a = 2;
// }
// console.log(a);

// // ------------
{
  var x = 5;
  let x = 10;
  // error , as is declared with let and can't be declared again 
  console.log(x);
}

