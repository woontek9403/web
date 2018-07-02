//사용자 정의 지정 객체

function Student(name,grade,clas,number){
    this.name = name; //이름
    this.grade = grade; //학년
    this.class = clas; //반
    this.number = number;  //번호
    
    // 이름 학년 반 번호를 하나의 문자열로
    this.toString = function(){
        return " 이름 : " + this.name + ", 학년 : " + this.grade + 
        ", 반 : " + this.class + ", 번호 : " + this.number;
    };
}

// 예제 1 (방법1)
var std1 = new Student('홍길동' , 1, 1 ,10);
console.log(std1.toString());

// 예제2 (방법2)
var std2 = new Student();
std2.name = "임꺽정" ;
std2.grade = 1;
std2.class = 1;
std2.number = 10;
console.log(std2.toString());

//예제 3
var std1 = new Student('메롱' , 1, 1 ,10);
console.log(std1.toString());
std2.sayHello = function(){
    return "Hello";
}
console.log(std2.sayHello());

//예제4  prototype 으로쓴 호출
Student.prototype.sayHi = function(){
    return "Hi";
}
console.log(std2.sayHi());
 
//---------------------------------------------------------------------------------------
// 예제  1 (이름 학년 반 번호만 를 가져온다)
var ts = std2.toString();
var subts = ts.split(',');
console.log(subts.join(','));

//ts == subts.join(',')
var res = new Array();
for(var i in subts){
    var tmp = subts[i].split(' : ');
    res.push(tmp[0]);
}
console.log(res.join(' and '));


//subts : '이름 :임꺽정' , '학년:1' , '반 : 1' , '번호:1'
// i : 배열인지라 i의 0값이 들어간다
//res : '이름' '학년' '반' '번호'
//tmp : '이름' , '임꺽정' 이 들어간다
//순서 배열에서 subts 에서 : 기준으로 배열로 만들어서 이름 > 학년>반>번호 순으로 호출

var res2 = new Array();
res2.push(std1.name);
res2.push(std1.grade);
res2.push(std1.class);
res2.push(std1.number);
console.log(res2.join(" and "));
