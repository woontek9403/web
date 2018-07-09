/* 
$("*").css("border","1px solid red"); //모든 태그에 테두리를 표시한다
// var elementCount=$("*").css("border","1px solid red").length;
var elementCount= $(".font-red").find("*").prevObject.length;
console.log(elementCount);

$("#div").css("border","2px solid blue");
$("span").css("border","2px solid green");
$(".font-red").css("color","red");

 앞에 셀렉터가 있어야 사용이 가능하다 
필터 셀렉터(Filter Selector)
:animated => 애니메이션이 적용된 요소 선택
:focus => 현재 활성화된 요소를 선택
:header  => h1 ,h2같은 header 요소 선택함
:lang() => 특정 언어를 가진 요소 선택
:not() => 주어진 셀럭터에 해당하지 않은 모든 요소 선택
:root => document의 root 요소 선택(html 태그)
:even => 짝수 요소 선택
:odd =>  홀수 요소 선택
:first => 첫번째 요소 선택
:last => 마지막 요소 선택
:eq(n) => n 번째 요소 선택
:lt(n) => n 번째 요소보다 작은 인덱스를 가진 모든 요소 선택
:gt(n) => n 번째 요소보다 큰 인덱스를 가진 모든 요소 선택
*/ 


//:animated 필터 예제
/*id가 run인 요소를 클릭하면*/ 
$("#run").click(function(){

    //div태그 요소들 중에서 애니메이션인 적용된 요소들을 선택하여
    // colored 클래스가 적용되어 있으면 해제를 하고,
    // colored 클래스가 적용되지 않았다면 적용시킨다. 

    $("div:animated").toggleClass("colored");
});
//toggle 한번 누르면 켜지고 한번 더 누르면 꺼지는 on/off을 해줌 


function animatedIt(){
    // id가 mover인 요소에 slow 애니메이션을 적용시킨다
    // 애니메이션이 끝나면 animatedIt을 호출한다
    $("#mover").slideToggle("slow" , animatedIt);
}
animatedIt();


//focus 필터 예제

//focus 필터 예제
// id가 contents인 요소의 모든 하위요소(*) 중에서 focus blur 이벤트가 발생하면
// 함수를 실행한다.
$("#contents").delegate("*", "focus blur",function(){
    // 이벤트가 발생된 객체의 정보를 element 저장한다.
    var element = $(this);
    // 함수가 0초뒤에 실행되도록 setTimeout함수에 등록한다.
    setTimeout(function(){
        // 객체에 focused 클래스가 있으면 제거, 없으면 추가하는데 
        // 객체가 focus된 상태이면
        element.toggleClass("focused", element.is(":focus"));
    },0);
});


// header 필터예제
// id가 header 요소에서 header 태그(h1,h2....h6)의 css를 수정한다
$("#header :header").css({backgroumd:"#ccc",color:"blue"});


//lang() 필터예제

// 언어가 en-us(영어) 이면 usa클래스를 추가
$("#lang div:lang(en-us)").addClass("usa");

// 언어가 en-us(스페인) 이면 spain 클래스를 추가
$("#lang div:lang(en-es)").addClass("usa");




//:not() 필터 예제
// input 태그중 checked상태가 아닌 (check표시가 없는)요소가 있는
// span태그 배경색을 노란색으로 적용시킨다
$("input:not(:checked) + span").css("background-color" , "yellow");



//root 필터 예제
// b태그에 html 문자열($(":root")[0]nodeName)을 넣고 해당 태그를 아이디가
// log은 요소에 붙인다.
//$("root")[0].nodeName는 문자열
$("<b></b>").html($("#root")[0].nodeName).appendTo("#log");

// append는 붙인다