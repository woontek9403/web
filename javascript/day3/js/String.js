//객체? 선언
var str = new String('Hello world');
console.log(str);
console.log("str length : " + str.length );


//한글자 확인 
console.log("str[0] : " + str[0]);
console.log("str.charAt(0) : " + str.charAt(0));


// 모두 대문자로 
console.log("str.toUppercase():" + str.toUpperCase());


//모두 소문자로
console.log("str.toLowercase():" + str.toLowerCase());

// 문자열 찾기
console.log("str.indexof(\'wo\'):" + str.indexOf('wo'));

//(문자열을 못찾으면 결과값이 -1이 나온다 )
console.log("str.indexof(\'ab\'):" + str.indexOf('ab'));

// 문자열의 번지수와 일치하지 않기에 찾지 못하여 결과값이 -1이 나온다
console.log("str.indexof(\'wo\',7):" + str.indexOf('wo',7));

// ab가 들어가 있는 모든 위치를 찍어보세요
var str2 = new String("aabdsgsdvbdsdabaafsfdbfdbdfb");
var str3 = new String("aa");
function indexOfs(str2 , str3){
    var index = 0;
    var arr = new Array();
    while(true){
        index = str2.indexOf(str3,index);
        if(index == -1)
            break;
        arr.push(index);
        index = index + str3.length;
    }
    return arr;
}
var res = indexOfs(str2,str3);
console.log(res.join(" , "));


//lastindexof
console.log("str2.lastindexof(str3) : " + str2.lastIndexOf(str3));

//search
console.log("str2.search(str3) : " + str2.search(str3));

//substr
console.log("str2.substr(1,5) : " + str2.substr(1,5));

//substring
console.log("str2.substring(1,5) : " + str2.substring(1,5));

//slice
console.log("str2.slice(1,5) : " + str2.slice(1,5));

//replace
var reg = new RegExp
str2.replace('str2.replace(\'/ab*/\',\"aaa\") : ' +str2.replace(reg,"aa"))

//split (문자열이 있다면 토큰을 출력)
var str4 = "2018.06.04";
var str5 = str4.split('.');
var year = str5[0];
var month = str5[1]
var day = str[2];
console.log(str4 +" : " + year + "년" + month + "월" + day + "일" );