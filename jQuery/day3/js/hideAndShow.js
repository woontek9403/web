// document 가 준비가 되면 함수를 실행
$(document).ready(function(){
    // id가 hide인 요소를 클릭하면
    // p태그를 1초에 걸쳐 숨겨라

    $("button").click(function(){
        $("p").hide(1000);
    });

    // id가 show인 요소를 클릭하면
    // p태그를 1초에 걸쳐 보여라
    $("#show").click(function(){
        $("p").show(1000);
    })
    $("#toggle").click(function(){
        $("p").toggle(1000);
    })
}); 
