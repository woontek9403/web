// 실시간 검색 
$(function() {
    var count = $('#rank-list li').length;
    var height = $('#rank-list li').height();

    function step(index) {
        if(index !=0){
        $('#rank-list ol').delay(1000).animate({
            top: -height * index,
        }, 500, function() {
            step((index + 1) % count);
        });
    }
    else{
        $('#rank-list ol').delay(1000).animate({
            top: -height * index,
        }, 0, function() {
            step((index + 1) % count);
        });
    }
}
    step(1);
});

// 뉴스 리스트
$(function() {
    var count2 = $('#rank-list2 li').length;
    var height2 = $('#rank-list2 li').height();

    function step2(index) {
        if(index !=0){
        $('#rank-list2 ol').delay(1000).animate({
            top: -height2 * index,
        }, 500, function() {
            step2((index + 1) % count2);
        });
    }
    else{
        $('#rank-list2 ol').delay(1000).animate({
            top: -height2 * index,
        }, 0, function() {
            step2((index + 1) % count2);
        });
    }
}
    step2(1);
});

// 순위옆에있는 아래쪽 짝대기 제이쿼리

$(document).ready(function(){
    $("#rank-list a").hover(function(){
        $("#search-hover").toggleClass('display-block');
    });
});

$(document).ready(function(){
    $(".downfas").click(function(){
        $(".downsearch").slideDown("slow");
    
    });
        $(".upfas").click(function(){
            $(".downsearch").slideUp("slow");
    });

});

// 네이버 페이지로 이동시 쪽의css
$(document).ready(function(){
    $('#naverjunior').hover(function(){
        $('#red').toggleClass('red');
        $('#blue').toggleClass('blue');
        $('#orange').toggleClass('orange');
        $('#green').toggleClass('green');
    });
});

$(document).ready(function(){
    $('#happy').hover(function(){
        $('#green2').toggleClass('green');
    });
});