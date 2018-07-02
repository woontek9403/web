//객체 생성 리터널 문법
var obj1 = {'kiti' : 100};
printobj(obj1)
obj1['kate'] = 90;
printobj(obj1);
obj1.jj = 80;
printobj(obj1);

//Object() 문법
var obj2 = new Object();
obj2["kiti"] = 90;
obj2.kate = 40;
printobj(obj2);
console.log("obj1 type : " + typeof obj1);
console.log("obj2 type : " + typeof obj2);

delete(obj2.kate);
printobj(obj2); 

//속성과 메소드
//(학생을 나타내는 객체를 만들어내고싶다)
var std ={
    name : "Tim",
    age : 20,
/*메소드*/  sayHello : function(){
        return "이름" + this.name 
                +", 나이 :" + this.age;
    }
};
console.log(std.sayHello());


std.sayHello2 = function(coutry){
    return this.sayHello()+ ", coutry : " +coutry;
};
console.log(std.sayHello2('cheongju'));