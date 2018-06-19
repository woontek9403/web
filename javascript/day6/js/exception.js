try{
    
    var arr = new Array(4294967295);
    throw '123';
} 

catch(exception){
    if(exception == '123')
        alert('123');
    else
    alert(
        "name : " + exception.name +
        "message : " + exception.message + 
        "description : " + exception.description
    );
}