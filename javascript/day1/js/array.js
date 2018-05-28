var arr1 = [132,"123",true];

// 배열 
console.log("arr1" + arr1);
console.log("arr1 type : " + typeof arr1[0] +","+ 
                typeof arr1[1] +","+ typeof arr1[2]);

var arr2 = new Array();
arr2[4] = "123";

console.log("arr2 : " + arr2);
var arr3 = ["hell" , "world"];

// concat(array) - 두개의 배열을 하나의 배열로 만들어 반환
var arr4 = arr3.concat(arr1);
console.log("arr4 : " + arr4);

// push(add_item)  - 배열의 끝에 원소를 추가한 후 배열의 길이를 반환
arr4.push(1234);
console.log("arr4 : " + arr4);

// pop() -배열의 마지막 항목을 제거후 그것을 반환
var tmp = arr4.pop();   
console.log("arr4.pop() : " +tmp);
console.log("arr4 " + arr4);

// shift() - 배열의 첫번째 항목을 제거후 그것을 반환
tmp = arr4.shift();
console.log("arr4.shift() : " +tmp);
console.log("arr4 " + arr4);

// unshift(add_item) -배열의 맨앞에 원소를 추가후 배열의 길이를 반환
var len = arr4.unshift(tmp);
console.log("arr4.unshift() : " +len);
console.log("arr4 " + arr4);

// join(구분자) - 지정된 구분자를 이용하여 배열을 문자열로 변환한다 (add를 넣어서)
console.log("arr4.join() : " + arr4.join(" add, "));

// splice(stat_index    , deleteCount [, 항목 , 항목 , 항목])  - 배열의 (항목)일부분을 교체 또는 제거
arr4.splice(0,1,"wi");
console.log("arr4.splice() : " + arr4 );

//slice
var arr5 = arr4.slice(3);
console.log("arr5 : " + arr5);

//reverse() - 배열의 원소 순서를 거꾸로 변경
arr5.reverse();
console.log("arr5.reverse() : " +arr5);

//sort -
var arr6 = arr4.sort();
console.log("arr4.sort() : " +arr6 );

//console.log(1 =='1'); 둘다 문자열 취급으로 되서 true임
console.log("1 == \'1\' : " + (1=='1'));
console.log("1 != \'1\' : " + (1 !='1'));

//console.log( 1 ==='1'); 둘다 타입과 숫자등 정확히 똑같을때만 true 타입이라도 다른경우 false가 뜬다.
console.log("1 === \'1\' : " + (1 ==='1'));
console.log("1 !== \'1\' : " + (1 !=='1'));