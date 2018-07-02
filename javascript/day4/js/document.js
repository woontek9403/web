//id를 이용해 Element를 검색해서 스타일을 수정하는 예제
var h1 = document.getElementById('hid');
h1.style.color = 'red';
h1.style.fontSize = '20px';
h1.style.fontWeight = '100';

//앞쪽 버튼
function funtColorBlue(){
//class를 이용해 Element를 검색해서 스타일을 수정 예제
var h2 = document.getElementsByClassName('hclass');
for (var i in h2){
h2[i].style.color = 'blue';
h2[i].style.fontSize = '40px';
h2[i].style.fontWeight = '100';
    }
}
function funtColorBlack(){
    var h2 = document.getElementsByClassName('hclass');
    for (var i in h2){
    h2[i].style.color = 'black';
    h2[i].style.fontSize = '60px';
    h2[i].style.fontWeight = '200';
        }
    }
// 뒤에 버튼


var h3 = document.querySelector('.hclass');
h3.style.fontSize = '100px';

document.writeln('hellow world');
document.write('hellow world');
for(var i = 0; i<4; i++){}