

//prop(프로퍼티) : 해당 프로퍼티의 값을 가져옴
//prop("프로퍼티" , value) : 해당 프로퍼티가 있으면 기존값을
// value로 수정하고 없으면 number라는 프로퍼티(멤버변수)를 생성하고 값을 1234로 저장하는 예지이다

//em 태그 요소에 title 정보를 가져와서 변수 title 저0장
var title = $("em").attr("title");

//id가 test인 요소에 텍스트를 출력
$("#test").text("Attr: " +title);

//id가 p인 요소에 number 라는  프로퍼티를 생성하고 값으로 1234를 저장
$("#p").prop("number" , 1234);

//위에서 생성한 프로퍼티 number를 id가 div인 요소에 텍스트로 출력
$("#div1").text("Property Create : " + $("#p").prop("number"));

// id가 p 인 요소의 프로퍼티 unmber를 제거
$("#p").removeProp("number");

//제거된 프로퍼티를 출력하려고 하기 때문에 undefined가 출력
$("#div2").text("Property Remove :" +$("#p").prop("number"));



// $("#btn1").click(function(){
// 
//
//$("#btn1").bind("click",function(){


// id가 btn1인 요소를 클릭하면 function를 실행해라
// id가 btn1인 요소(버튼) 클릭하면 다음 함수 실행
$("#btn1").click(function(){
    // input태그에 있는 값을 가져와서 test A 를 추가하여
    // TEXT에 저장
    var text = "TEST A" + $("#btn1").val()+$("input").val();
    // TEXT에 저장된 문자열 input태그에 출력
    $("input").val(text);
});


// ID가 btn2인 요소(버튼) 클릭하면 다음 함수 실행
$("#btn2").click(function(){
    //input 태그의 값을 비워라
    $("input").val("");
});



//
//
//
