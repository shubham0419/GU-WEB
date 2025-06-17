console.log("hello world");

let b = "hello";
// let b = "world";
b = "world";

// {
  //   // only works for let and const 
  //   console.log(b);
  //   let b = 20;
  //   console.log(b);
  // }
  
var a = 5;
{
  console.log(a);
  var a = 20;
  console.log(a);
}

console.log(a);

console.log(b);

const c = true;

const arr = [1, 2, 3, 4, 5];
arr[1] = 10; //this is updation

// arr = [6, 7, 8, 9, 10]; // this is reassignment and not allowed


// console.log(temp);
// var temp = "this is temp";
// console.log(temp);

console.log(ar);
var ar;
console.log(ar);

// console.log(temp2);
// // dead temproral zone (unless it is assigned a value)
// let temp2 = "this is temp 2";
// console.log(temp2);

let arrr = [1,2,3,"item 4",true,null, undefined]
let TwoDArr = [
                [1,2,3], 
                [2,5,6]
              ]
// console.log(TwoDArr);
// console.log(TwoDArr[0][1]); // -> 2
// console.log(TwoDArr[1][2]); // -> 6
// console.log(arrr[4]);
// arr methods

// add item at beginning
arrr = [1,2,3,4,5,6]
// arrr.unshift(50);
arrr.unshift(50,44,55);
console.log(arrr);
// delete item from beginning
arrr.shift();
console.log(arrr);
let aa = [1,2,3,4,5]
// let subArr = aa.slice(2,4);
let subArr = aa.slice(2); //starts from 2nd index and ends at last
console.log(subArr);

// splice - 3 workings
console.log(aa);
// delete elements from between the array
aa.splice(3,1) // delete one element at index 3
aa.splice(3,3) // delete 1 element at index 3 ,three times
console.log(aa);

// add element at index 1 and shift elements forward
// aa.splice(1,0,10); 
aa.splice(1,0,10,11,12,13);
console.log(aa);

let strAA = aa.toString();
let strArr = aa.join(" ");
console.log(strArr);
console.log(strAA);

