// functions
function fun(){
  console.log("object");
  // return 5;
}

// let result = fun();
// console.log(result);
// console.log(fun());

// function can return anything;

function fun2(){
  return 10+20;
}
console.log(fun2());

function sum(a,b){
  return a+b;
}

function sub(a,b){
  return a-b;
}

let ans = sum(100,400);
let ans2 = sub(100,400);
console.log(ans2);

// default arguements
function fun3(a=0,b=0,c=0){
  return a+b+c;
}

let res = fun3(1,2,7);
console.log(res);

console.log(fun4());
function fun4(){
  return {
    name:"hello",
    work:"nothing"
  }
}


// arrow functions
// let arrowRes = arrowFun(); // can't access arrow fun before creation

let arrowFun = ()=>{
  console.log("this is arrow function");
  return "return from arrow function"
}
let arrowRes = arrowFun();
console.log(arrowRes);

let arrowFun2 = (a,b)=>{
  console.log("this is arrow function");
  return a+b;
}

//
let a = 10;
console.log(a);
function fun5(a,b,c){
  return a+b+c;
}
res = fun5(2,3,4);
console.log(res);
function fun5(a,b,c,d){
  return a+b+c+d;
}
res = fun5(2,3,4,5);

