

var btn2 = document.getElementById('btn2');
btn2.onclick = function(e){
    //여기서 e는 익스플로러 8용이고 나머지는 window.event이다
    var event = e || window.event;
    document.body.innerHTML="";

    //key = 값이 있으면 가져오고 없으면 unll값?
    for(var key in event){
        document.body.innerHTML += key + ':' + event[key] + '<br>';
    }
}