const { config } = require("process");

//var is globel varible it can update and re change in code
var a=1;
console.log(a)
var a="Hello world"
console.log(a)
{
 var a=6
  console.log(a)
}
console.log(a)
// let is block varible it can updeted but it can re change the value

let b=2;
//let b="Hi"
{
  let b =3
  console.log(b)
}
console.log(b)

//const is block varible it cannot upadate or not re change the value

const c=3
console.log(c)
  //c=5---const is constant value
