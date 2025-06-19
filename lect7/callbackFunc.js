// map, filter , reduces , find , forEach , some
// async javascript - setTimeout, setInterval, Promise,async await ,
// api calling

let arr = [1,2,3,4,5,6,7,8,9,10];

function square(num){
  return num*num;
}
let sqArr = arr.map(square);
sqArr = arr.map(function(num){
  return num*num;
})
sqArr = arr.map((num)=>{
  return num*num;
})
console.log(sqArr);

let cubeArr = arr.map((num)=>{
  return num**3;
})
arr = [1,2,3,4,5,6,7,8,9,10];
// filter -> to get specic element on the basis of condition.

function odd(num){
  return (num%2==1);
}

let oddArr = arr.filter(odd);
oddArr = arr.filter(function(num){
  return (num%2==1);
})
oddArr = arr.filter((num)=>{
  return (num%2==1);
})
console.log(oddArr);

