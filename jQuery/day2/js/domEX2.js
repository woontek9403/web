//  위치.append(내용) : 위치를 먼저 찾고 맨뒤에 내용을 추가 
//  내용.appendTo(위치) : 내용을 먼저 작성후 내용을 추가할 위치를 찾아서 맨앞에 내용을 붙여넣는다
//  위치.prepend(내용) : 위치를 먼저 찾고 맨앞에 내용을 추가
//  내용.prependTo(위치) : 내용을 먼저 작성후 내용을 추가할 위치를 찾아서 맨앞에 내용을 붙여넣는다
//  text() : 텍스트 컨텐츠를 가져온다
//  위치.after (내용) : 뒤에 추가 (위치랑 레벨이 동급)
//  위치.before (내용): 앞에 추가 (위치랑 레벨이 동급)
//  내용.insertAfter (위치) :뒤에 추가
//  내용.insertBefore (위치) : 앞에 추가
//  wrap() : 하나의 요소를 감싸는 부모 요소생성
//  wrapAll() : 다수의 요소를 감싸는 부모 요소 생성
//  unwrap(): 부모 요소를 제거
//  detach (): 요소를 삭제
//  remove() : 요소 및 관련 이벤트 data를 삭제
//  empty() :요소의 모든 자식 삭제
//  clone(): 복사
//  replaseAll(): 입력 받은 요소를 교체



// append = 끝에 이어붙이기 (추가욤)
$("#btn1").click(function(){
    $(".container.inner").append("<br><b>추가 테스트</b><br>");
});

// appendTo container 클래스가 있는 요소 맨앞에 추가 
$("#btn1").click(function(){
     $("<br><b>추가 테스트</b><br>").appendTo(".container");
  

//  == 윗 기능 결과는 같다
// 첫번째꺼는 위치를 먼저찾고 그후 작성되는것이고
// 두번째꺼는 작성을 먼저하고 위치를 나중에 찾는다.

    // 제일 상단에 표시 맨앞에 표시
$(".container .inner").first().prepend("prepend 테스트 <br>")
});


//append와 prepend는 위치 안에 자식요소로 들어가는데, before와 after는 인접요소로 들어간다
$(".container2 .inner").last().before("<button>Before</button>");
$(".container2 .inner").last().afore("<button>Before</button>");