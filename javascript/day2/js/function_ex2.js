// function gcd (num1 , num2){
// var num1 = 8, num2 = 12;
// var gcdNum = 1;

// for(i=1; i<=num1; i++){
//     if(num1 % i==0 && num2 % i ==0){
//         gcdNum = i;
//         }
//     }   
//     return gcdNum;     
// }
// console.log("+ gcd(8,12) : " + gcd(8,12));

// function isCoprime(num1, num2){
//     if(gcd(num1,num2) == 1)
//         return true;
//     else 
//         return false;
// }
// var coNum1 = 5 , coNum2 = 9;
// console.log(coNum1+ "와"+coNum1 + "는 서로소? : "+isCoprime(coNum1,coNum1));


function randomInt(min,max){

if(min>max){
    var tmp = min;
    min = max;
    max = tmp ;

}
return parseInt(Math.random()*(max-min+1) + min);
}
function getLotto(){
    var i,j;
    var tmp;    //랜덤으로 생성된 번호를 저장
    var res = new Array(); // 로또 번호를 저장할 배열
    while(res.length < 6){
        tmp = randomInt(1,45);
        i=0;
        while(i< res.length){
            if(tmp == res[i])
            break;
            i++
        }
        if(i == res.length)
        res.push(tmp);
    }
    return res;
}
console.log(getLotto().join(","));