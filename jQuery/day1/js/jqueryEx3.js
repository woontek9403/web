/*
Attribute

[name |= "value"] : value 와 동일 하거나 value뒤에 -가 붙는 단어로
시작되는 속성을 가진 요소를 선택

[name *= "value"] : value를 포함하고 있는 값을 가진 요소를 선택

[name ~= "value"] : value를 단어로 포함한 값을 가진 요소를 선택

[name ^= "value"] : value로 시작하는 값을 가진 요소를 선택

[name $= "value"] : value로 끝나는 값을 가진 요소를 선택

[name = "value"] : value와 동일한 값을 가진 요소를 선택

[name != "value"] : value와 동일하지않는 값을 가진 요소를 선택

[name ="value1"][name ="value2"] 다중 조건을 체크하여 요소를 선택
*/


//[name |= "vale"] 예제
//id가 orAttr이고 자손중에 input 태그의 이름이 inputName이거나
//inputName-로 되어있는 요소들의 value를 ORTEST로 설정함
//띄어쓰기로 다른 단어가 들어가면 해당되지 않는다. ex inputName test = o 
//inputName에 -를 이용하여 추가한 다른 단어 이외에는 허용하지않는다
//ex inputNames : x  , inputName-test : o
$("#orAttrinput[name |= 'inputName']").val("ORTEST");

//[name *= "vale"] 예제
//id가 mulAttr이고 자손중에 input 태그의 이름이 
// inputName이 포함되는 모든 요소들의 value를 ANDTEST로 설정함
// inputNames : o , inputName-test : o ,inputName test : o
$("#mulAttr input[name *= 'inputName']").val("ANDTEST");


//[name ~= "vale"] 예제
//id가 notlAttr1이고 자손중에 input 태그의 이름이 
// inputName 단어로 포함되는 모든 요소들의 value를 ~TEST로 설정함
//  inputNames : o ,     inputName-test : o ,
//  inputName test : x ,  inputNameTest : x
$("#notAttr1 input[name ~= 'inputName']").val("test");



//[name != "vale"] 예제
//id가 notlAttr2이고 자손중에 input 태그의 이름이 
// inputName와 정확히 일치하지 않은 모든 요소들의 value를 ~TEST로 설정함
//  inputNames : x ,     inputName-test : o ,
//  inputName test : o ,  inputNameTest : o
$("#notAttr2 input[name != 'inputName']").val("!test");


//[name ~= "vale"] 예제
//id가 notlAttr1이고 자손중에 input 태그의 이름이 
// inputName으로 끝나는 모든 요소들의 value를 $test로 설정
//  inputNames : o ,     inputName-test : x ,
//  inputName test : x ,  inputNameTest : x      test inputName = o
$("#endtAttr input[name $= 'inputName']").val("$test");

//[name ~= "vale"] 예제
//id가 beginAttr이고 자손중에 input 태그의 이름이 
// inputName이 시작하는 모든 요소들의 value를 ^test로 설정
//  inputNames : o ,     inputName-test : o ,
//  inputName test : o ,  inputNameTest : o      test inputName = x
$("#beginAttr input[name $= 'inputName']").val("^test");

//id가 idAttr이고 자손중에 input 태그의 id가 test를 단어로 포함하는 요소들의
// value fmf IDTEST로 설정한다.
$("#idAttr input[id ~= 'test']").val("IDtest")