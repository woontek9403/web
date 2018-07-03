
// 클래스가  filter인 부모의 div를 찾아라

$(".filter>div").eq(2).addClass("yellow");
$(".filter>div").first().css("background" ,"green");
$(".filter>div").last().css("background","gray");


$(".filter>div").slice(3,5).css("font-weight","bold");

// 테두리를 점선으로 만들어줌
$(".filter>div").not(":eq(2)").css("border","dotted");

$(".filter>div").bind("click",function(){
    if($(this).is(".filter>div:eq(2)")){
    $(this).css("color" ,"red");
    }
});
$(".filter>div").filter(":even").css("padding" , "15px 0 ");
$(".filter>div").has("span").css("color","green");