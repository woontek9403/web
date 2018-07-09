//마우스로 버튼을 갖다대면 내용이 사라지고
//마우스로 버튼을 떼면 내용이 보이는 예제
$(document).ready(function(){
    $("#up").mouseover(function(){
        $("p").hide();
    });
    $("#up").mouseout(function(){
        $("p").show();
    });
});


// 글자를 아스키 코드로 변환시킴 (f12로 눌러서 console에서 확인가능)
$("body").keydown(function(e){
    console.log(ascToChar(e.which));
});


//
function ascToChar(asc){
    switch(asc){
        case 65:    return 'A';
        case 66:    return 'B';
        case 67:    return 'C';
        case 68:    return 'D';
        case 69:    return 'E';
        case 70:    return 'F';
        case 71:    return 'G';
        case 72:    return 'H';
        default: return '기타';
    }
}
