// higher order functions & callback functions
function helper(){
  console.log("helper function is executing...");
  return 10;
}

function higherorder(fun){
  console.log("higher order executing...");
  let res = fun();
  return +(res)+5;
}

// let result = higherorder(helper);
// console.log(result);

// let result2 = higherorder(function(){
//   console.log("this is annonymous function");
//   return "20";
// })
// console.log(result2);

//  ()=>{}
let result2 = higherorder(()=>{
  console.log("this is annonymous function");
  return "20";
})
console.log(result2);

// call back functions
function cb(a,b){
  console.log("call back executing...");
  return a+b;
}
function parent(a,b,fun){
  console.log("higher order executing...");
  let sum = a+b;
  // let result = fun(sum,20);
  // return result;
  return fun(sum,20);
}
let ans2 = parent(10,20,cb);
console.log(ans2);

let arr = [1,2,3,4,5,6];
function square(num){
  return num*num;
  // return num**2;
}
function cube(num){
  return num**3;
}
function ArrConverter(array,fun){
  let ar = [];
  for(let element of array){
    let powVal = fun(element)
    ar.push(powVal);
  }
  return ar;
}

let sqArr = ArrConverter(arr,square);
console.log(sqArr);
let cubeArr = ArrConverter(arr,cube);
console.log(cubeArr);