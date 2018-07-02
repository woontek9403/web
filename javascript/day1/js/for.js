//소수인지 판별하는 예제

// var num = 197;
// var i = 1;
// for(i=1; i<=num; i++){
//  if(num % i==0){
//      cnt++;
//     }
// }

// if(cnt == 2)
//      console.log("소수")     
// else
// console.log("합성수")
 
// var arr = [100, 200,300];
// var sum = 0;
// for (items in arr){
//     sum += arr[items];
// }
// console.log(arr.join(" + ") + " = " +sum);
// var arr2 = {A:10 , B:20 ,  C:30};
// for(items in arr2){
//     console.log("key : " + items + ", value : " + arr2[items] );
// }
// inner;
// for(i=1; i<10; i++){
//     if(i == 3)
//     break inner;
// }
// console.log(i);
// var j;
// outter1;
// for(i =1; i<10; i++){
//     inner1;
//     for(j=1; i<4; j++){
//         if(j == 2){
//             console.log("i : " + i + ", j : " +j);
//             break inner1;
//         }
//         if(j == 5){
//             console.log("i : " + i + ", j : " +j);
//             break inner1;
//         }
//     }
// }

//최댓공약수 구하는 공식
//12 :  1 2 3 4 6 12
//8 : 1 2 4 8 
//최대 공약수 : 4

var num1 = 8;
var num2 = 12;
var gcd =1;

for(i=1; i<=num1; i++){
    if(num1 % i==0 && num2 % i ==0){
        gcd = i;
       
    }        
}
console.log("num1 : " +num1 +", num2 : " + num2);
console.log("num1과 num2의 쵯대 공약수는 : " + gcd);

//최소 공배수를 구하세요
//15 : 15 30 45 60 75 90
// 10 : 10 20 30 40 50 60
//15와 10의 최소 공배수 : 30

// var num3 = 15;
// var num4 = 10;
// var tcg = 1;

// for(i=num3; i<= num4*num3; i +=num3){
//     if(i% num4 ==0){
//         tcg = i;
//         break;
//     }
// }
// console.log("num3 : "+num3+ "num4 : "+ num4 );
// console.log("num3과 num4의 최소 공배수는 : " +tcg);

var num3 = 6;
var num4 = "";

for(i=1; i<num3; i++){
    for(j=i/2; j<=num3-1; j++){
        num4 +=" ";
    }

    for(j=1; j<=2*i-1; j++){
        num4 +="*";
    }

console.log("num3 : " +num3 +"num4 : " +num4);
num4 = "";
}