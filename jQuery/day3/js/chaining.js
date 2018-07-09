$(document).ready(function(){
    // 체이닝 기법을 이용하여 button 태그가 클릭되면
    // id가 p1인 요소의 css를 적용
    // 2초에 걸쳐 슬라이드 업 한후 2초에 걸쳐 슬라이드 다운을 실행
    $("button").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
});