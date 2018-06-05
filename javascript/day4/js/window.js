var mywindow
function openwindow(){
    //윈도우를 하나 연다 = 윈도우 객체를 하나 생성 (브라우저 1개가 열림 = 윈도우 객체 1개 생성)
    //윈도우 객체를 만들어서 mywindow에 저장
    mywindow = window.open
    ("" , //클릭시 열 주소
    "mywindow", //주소의 이름
    "width=200, height=200, toolbar=yes, location=yse, menubar=yes, scrollbars=yes, resizable=yes, left=50, top=50"); //윈도우창의 크기 조절
}


function closewindow(){
    //mywindow에 저장된 윈도우 객체를 닫음
    // 자바 스크립트는 if가 관대함 
    //윈도우의 정보가 남아있다 
    if(mywindow )
    mywindow.close();
}

function blurwindow(){
    if(mywindow){
        mywindow.blur();
    }
}

function focuswindow(){
    if(mywindow){
        mywindow.focus();
    }
}
function checkwindow(){
    if(!mywindow){
        //한번도 열린 적이 없음 (mywindow 가 비어있을때 참)
        alert('한번도 열린적이 없음');
    }
    else{
        //한번 이상 열린적이 있다 허나 지금은 닫혀있다
        if(mywindow.closed)
        alert('닫혀 있음');
        // 한번 이상 열린적이 있다.그리고 지금은 열려있다
    else
        alert('열려 있음');
        
    }
    
}
function moveBywindow(){
    mywindow.moveBy(50,50);
}
function moveTowindow(){
    mywindow.moveTo(50,50);
}
function resizeBywindow(){
    mywindow.resizeBy(300,300);
}

function resizeTowindow(){
    mywindow.resizeTo(300,300);
}