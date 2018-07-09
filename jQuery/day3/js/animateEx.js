// 버튼 클릭시 좌우로 왔다갔다하는 애니메이션 예제


$(document).ready(function(){
    $("button").click(function()
    {go});
});
function back(){
    // $(selector).animate({params},speed,callback);
    // 왼쪽 으로 0으로 이동하는데 2초안에 움직이며 다 끝난후 go함수 호출
    $("div").animate({left: '0'},2000,go);
}

function go(){
    $("div").animate({left: '250px'},2000,back);
}
    // $(selector).animate({params},speed,callback);
    // 왼쪽으로 기준으로 절대 경로가 250px 로 이동하는데 2초안에
    // 움직이며 다 끝난후 back함수를 호출한다
