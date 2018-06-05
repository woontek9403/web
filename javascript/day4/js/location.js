
    // location 객체 메소드 
function locationReload(){
    location.reload(); // 새로고침
    }
function locationReplace(){
    location.replace("http://www.google.com"); //클릭시 구글로 이동하며 뒤로가기 버튼이 비활성화 되어있다.
    }
function locationAssign(){
    location.assign("http://www.google.com"); //클릭시 구글로 이동하며 뒤로가기 버튼이 활성화 되어있다.
    }

    // location 속성들
function locationInformation(){
    var str = new string();

    location.hash = 'test';
    location.search = 'id=green';

    str += "href : " + location.href + "\n";
    str += "host : " + location.host + "\n";
    str += "hostname : " + location.hostname + "\n";
    str += "pathname : " + location.pathname + "\n";
    str += "protocol : " + location.protocol + "\n";
    str += "port : " + location.port + "\n";
    alert(str);
    }