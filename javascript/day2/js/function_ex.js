
// function add(num1 , num2){
//     var res = num1 + num2;
//     console.log("add() :" + res);
//     var a =num1 * num2;
//     console.log("add1() :" + a);
//     var b =num1 / num2;
//     console.log("add2() :" + b);
//     var c =num1 - num2;
//     console.log("add3() :" + c);
// }
//     add (20,10)
//     add (10,20)
//     add (30,40)
//     add (40,30)
var num3 = prompt("첫번째 숫자를 입력하세요");
num3 = parseFloat(num3);
var num4 = prompt("두번째 숫자를 입력하세요");
num4 = parseFloat(num4);
var op = prompt("연산자를 입력하세요");

var result = "calculate1() : " + num3 + op + num4 + "=" + calculate1(num3,num4,op) + "\n";
result += "calculate2() : "+ num3 + op + num4 + "=" + calculate2(num3,num4,op) + "\n";
alert(result);

function calculate1(num3,num4,op){
 switch(op){
     case '+':
        return add(num3 , num4);
    case '-':
        return sub(num3 , num4);
    case '*':
        return mul(num3 , num4);
    case '/':
        return div(num3 , num4);
    case '%':
        return mod(num3 , num4);
    default:
        return 0;
    }
}   
function add(num3,num4){ return num3 + num4;}
function sub(num3,num4){ return num3 - num4;}
function mul(num3,num4){ return num3 * num4;}
function div(num3,num4){ return num3 / num4;}
function mod(num3,num4){ return num3 % num4;}

function calculate1(num3,num4,op){
    switch(op){
        case '+':
           return num3 + num4;
       case '*':
           return num3 * num4;
       case '/':
           return num3 / num4;
       case '-':
           return num3 - num4;
       case '%':
           return num3 % num4;
       default:
           return 0;
       }
function add(num3,num4){ return num3 + num4;}
function sub(num3,num4){ return num3 - num4;}
function mul(num3,num4){ return num3 * num4;}
function div(num3,num4){ return num3 / num4;}
function mod(num3,num4){ return num3 % num4;}

}   
