
// 버튼 클릭시 팝업창 생성
function func1(){
    alert('동작1');
}

function func2(){
    alert('동작2');
}

var btn = document.getElementById('btn');

// 익스플로러 8용 (이벤트 용어 addEventListener은 중복처리 가능)
if(btn.addEventListener){
    btn.addEventListener('click',func1);
    btn.addEventListener('click',func2);
}
else if (btn.attachEvent){
    btn.attachEvent('onclick',func1);
    btn.attachEvent('onclick',func2);
}