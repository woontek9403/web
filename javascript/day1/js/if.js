//조건식 : 참 또는 거짓으로 판별할 수 있는 식
// if(조건식){
//     실행문;
// }
// else if(조건식2){//조건식 1은 만족하지 않고, 조건식 2는 만족하는것
//     실행문;
// }
// else{
//     //위의 조건식이 아니면
//     실행문;
// }
var num = 10;

console.log("num : " + num);

if(num % 2 ==0 ){
    console.log("num는 짝수 입니다.");
}
else{
    console.log("num는 홀수 입니다.");
}

var id = prompt("아이디를 입력하세요");
if(id == "green"){
    var pw = prompt("비밀번호를 입력하세요");
    if(pw == "green"){
        alert("로그인에 성공했습니다.");
    }
    else {
        alert("비밀번호를 잘못 입력 했습니다.");
    }

}
else //id가 green 이 아니면
{
    alert("아이디를 잘못 입력했습니다.")
}