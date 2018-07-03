
// $("클래스명 > 태그").bind("click",function(){
//  if()문 ((else if 로 여러개 쓸수 있다))
// });
// slioce는 범위를 지정 중간에 예외처리는 불가하다 

$(".filter>div").bind("click",function(){
        //빨간색 클릭
        if($(this).is(".filter>div:first()")){
            $(".filter>div").css("color","white");
            //$(".filter>div").css("font-weight","bold");
        }
        //보라색 클릭
        else if($(this).is(".filter>div:last()")){
            $(".filter>div").css("border","dotted black");
        }
        //주황색 클릭
        else if($(this).is(".filter>div:eq(1)")){
            $(".filter>div").not(this).css("font-weight","bold");
        }
        //남색 클릭
        else if($(this).is(".filter>div:eq(5)")){
            $(".filter>div").slice(0,5).css("border","solid 2px black");
        }
    }); 