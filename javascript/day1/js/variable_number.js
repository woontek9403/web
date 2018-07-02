var number1 = 1/0;
var number2 = -1/0;
var number3 = 10;
console.log(number1);
console.log(number2);
console.log(isFinite(number1));
console.log(isFinite(number2));
console.log("is Finite number1 : "+isFinite(number1));
console.log("is Finite number2 : "+isFinite(number2));
console.log("is Finite number3 : "+isFinite(number3));

var number4 = "10"; 
console.log("is NaN number4 : " + isNaN(number4));