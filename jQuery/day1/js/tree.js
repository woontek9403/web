

//$("").childern() : 해당 객체의 자식요소들을 선택
$("li .level-3").children().css("background","yellow");



//ul 태그안에 클래스가 level-2이고 해당 객체와 가장 가까운 상위 
// li태그에 css를 수정해라 
$("ul.level-2").closest("li").css("font-weight" , "bold");

$(".level-1").find(".item-3-3-3").css("color","blue");


//클래스 item-4-1인 요소의 다음 요소를 찾은 다음 css를 수정해라
// next() 는 하나만 해당 / nextAll()는 전부 해당
$(".item-4-1").next().css("background","gray");

$(".item-4-1").nextAll().css("background","gray");

// 클래스가 item-4-1인 요소의 부모 요소 하나를 찾음(바로 위에 부모)
// parent() : 부모 /  parents() : 모든 조상
$(".item-4-1").parents().css("color","red");

