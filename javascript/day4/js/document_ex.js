//윗쪽 버튼 (전체 적용)
function funtColorBlue(){
    var h1 = document.getElementsByClassName('h1');
    for (var i in h1){
    h1[i].style.color = 'blue';//파란색
    h1[i].style.fontWeight = '100';
        }
    }
    function funtColorBlack(){
        var h1 = document.getElementsByClassName('h1');
        for (var i in h1){
        h1[i].style.color = 'black';//검은색
        h1[i].style.fontWeight = '100';
        }
    }
    function funtColorred(){
        var h1 = document.getElementsByClassName('h1');
        for (var i in h1){
        h1[i].style.color = 'red';//빨간색
        h1[i].style.fontSize = '100';
    }
}

function funtColorwhite(){
    var h1 = document.getElementsByClassName('h1');
    for (var i in h1){
    h1[i].style.color = 'white'; //흰색
    h1[i].style.fontSize = '100';
}
}

// 아래쪽 버튼 (hello 만 적용)

function setColorBlue(){
    var h2 = document.getElementById('h2');
    h2.style.color = 'blue'; //파란색
    h2.style.fontWeight = '100';
        }
    
    function setColorBlack(){
        var h2 = document.getElementById('h2');
        h2.style.color = 'black'; //검은색
        h2.style.fontWeight = '100';
        }
    
    function setColorred(){
        var h2 = document.getElementById('h2');
        h2.style.color = 'red'; //빨간색
        h2.style.fontSize = '100';
    }

function setColorwhite(){
    var h2 = document.getElementById('h2');
    h2.style.color = 'white'; //흰색
    h2.style.fontSize = '100';
}
