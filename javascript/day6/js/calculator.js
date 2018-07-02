
// 현재 입력되고 있는 숫자의 위치가 num1 인지 num2인지 확인하는 알려주는 변수
var numPos = 1;

//버튼 클릭시 값을 추가하는 얘
function setNum(num){

    var num1 = document.getElementById('num1'); // num1 객체값 호출
    var num2 = document.getElementById('num2'); // num2 객체값 호출
    var res = document.getElementById('res'); // 결과를 저장하는얘
    
    //num1에 입력중이면
    if(numPos == 1){
        if(num1.value == '0' )
            num1.value = num; //(num는 매개변수 num이다)
        else
        num1.value = num1.value + num;
    }
    //num2에 입력중이면
    else{
            if(num2.value == '0' )
                num2.value = num; //(num는 매개변수 num이다)
            else
            num2.value = num2.value + num;
    }
}
function setOp(op){
    var operator = document.getElementById('op');

    if (numPos == 1 ){
        operator.value = op;
        numPos = 2;
    }


// 연산자 구성
}
function cal(num1, op , num2){
    switch(op){
        case '+' : 
            return num1 + num2;
        case '-' : 
            return num1 - num2;
        case '*' : 
            return num1 * num2;
        case '/' : 
            return num1 / num2;
    }
}


// = 의 구성
function getRes(){
    if (numPos == 2){
      var num1Value = parseInt(document.getElementById('num1').value);
      var num2Value = parseInt(document.getElementById('num2').value);
      var opValue = document.getElementById('op').value ;
      document.getElementById('res').value = cal(num1Value , opValue , num2Value);
    }

}

function clears() {
    numPos = 1;
    document.getElementById('num1').value = 0;
    document.getElementById('num2').value = 0;
    document.getElementById('res').value = 0
    document.getElementById('op').value = '';
    
}