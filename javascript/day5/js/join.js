var formTag = document.getElementByID('formTag')
formTag.onsubmit = function(){
        //ID가 usr인 객체를 가져와서 그 객체의 value를 ID에 저장
        var ID = document.getElementByID('usr').value;
        var Pwd = document.getElementByID('Pwd').value;
        var PwdConfirm = document.getElementByID('PwdConfirm').value;
        var year = document.getElementByID('yearr').value;
        var month = document.getElementByID('month').value;
        var day = parseInt(document.getElementByID('day').value);
        var max = maxDay(month);
        var Number = document.getElementByID('Number').value;
        var NumberRegex = /^010\d{8}$/;

        var inforID = document.getElementByID('inforID');
        var inforPwd = document.getElementByID('inforPwd');
        var inforPwdConfirm = document.getElementByID('inforPwdConfirm');
        var inforBirth = document.getElementByID('inforBirth');
        var inforNumber = document.getElementByID('inforNumber');

        inforID.style.display = 'none';
        inforPwd.style.display = 'none';
        inforPwdConfirm.style.display = 'none';
        inforBirth.innerHTML = '태어난 년도 4자리를 정확하게 입력하세요';
        inforBirth.style.display = 'none';
        inforNumber.style.display = 'none';

        var isOk = true;
        var IDRegex = /^[a-zA-Z]\w{4,9}$/;
        var PwdRegex = /^(?=w{8,20}$)\w*(\d[A-z]|[A-z]\d)\w*$/;
     
        //ID의 길이가 0이면
        if(ID.length == 0 || !IDRegex.test(ID)){
            inforID.style.display = 'block';
            isOk = false;
        }
        if(Pwd.length == 0 || PwdRegex.test(Pwd)){
            inforPwd.style.display = 'block';
            isOk = false;
        }
        if(Pwd != PwdConfirm){
            inforPwdConfirm.style.display = 'block';
            isOk = false;
        }
        alert(parseInt(month));
        if(year.length !=4){
            inforBirth.innerHTML = '태어난 년도 4자리를 정확하게 입력하세요';
            inforBirth.style.display = 'block';
            isOk = false;
        }else if(isNaN(parseInt(month))){
            inforBirth.innerHTML = '태어난 월을 선택하세요';
            inforBirth.style.display = 'block';
            isOk = false;

        }else if(isNaN(day) || day <1 ||day>max ){
            inforBirth.innerHTML = '태어난 2자리를 입력하세요';
            inforBirth.style.display = 'block';
            isOk = false;
        }
        if(!NumberRegex.test(Number)){
            inforNumber.style.display = 'block';
            isOk = false;
        }
        if(!isOk)
            return false;}

function maxDay(month){
    switch(month){
        case'1': case'3': case'5': case'7': case'8': case'10': case'12':
        return 31;
        case '2':
        return 28;
        default:
        return 30; 
    }
}

