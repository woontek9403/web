
// $("클래스명 > 태그").bind("click",function(){
//  if()문 ((else if 로 여러개 쓸수 있다))
// });
// slioce는 범위를 지정 중간에 예외처리는 불가하다 

$(".co>div").bind("click",function(){
    // 빨간색 클릭
    if($(this).is(".co>div:eq(0)")){
    $(".co>div").css("color", "white");} 
});

$(".co>div").bind("click",function(){
    // 보라색 클릭
    if($(this).is(".co>div:eq(6)")){
    $(".co>div").css("border", "dotted");} 
});

$(".co>div").bind("click",function(){
    // 주황색 클릭
    if($(this).is(".co>div:eq(1)")){
    $(".co>div").not(this).css("font-weight", "bold");}     
});

$(".co>div").bind("click",function(){
    //남색 클릭
    if($(this).is(".co>div:eq(5)")){
    $(".co>div").slice(0,5).css("border", "solid 2px black");
    } 
});

