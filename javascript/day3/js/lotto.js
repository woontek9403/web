function Lotto(){
    this.number = new Array();
    this.lotteruyNumber = new Array();
    this.rank = -1;
    this.generateNumber = function(){
        this.number = this.createArrayNumber( 1 , 45 , 6);
            //로또 번호 생성
            //1~45
            // 중복되지 않아야함
            //6개
    }

    this.generateLotteryNumber = function(){
            //로또 추천번호 생성
            //1~45
            //중복 되지 않아야함
             //7개 : 앞에 6개 일반 번호, 마지막 1개는 보너스 번호
        this.lotteruyNumber = this.createArrayNumber(1,45,7);
             
        }
    this.checkRank = function(){
            //로또 번호와 추첨 번호와 비교하여 몇등인지 확인
            var count = this.getCoun(this.number, this.lotteruyNumber);
            if(count ==6 ){this.rank = 1;}
            else if (counnt ==5 && this.contatis(this.number,
            this.lotteruyNumber[this.lotteruyNumber.length-1]) ==true){
                this.rank = 2;
            }
            else if(count ==5){
                this.rank = 3;
            }
            else if(count ==4){
                this.rank = 4;
            }
            else if(count ==3){
                this.rank = 5;
            }
            else {
                this.rank = -1;
            }
    }
    this.contatis = function(arr,num){
        for(var i in arr){
            if(arr[i] == num)
            return true;
        }
        return false;
    }

    this.getCoun = function(arr1,arr2){
        var count = 0;
        var min = arr1.length > arr2.length ? arr.length : arr1.length;
        for(var i = 0; i<min; i++){
            if(this.contatis(arr1,arr2[i]) == true)
            count ++;
        }
        return count;
    }
    this.randomInt = function(min,max){}
    this.createArrayNumber = function(mix,max,count){}
}
var lotto1 = new Lotto();
lotto1.generateNumber();
lotto1.generateLotteryNumber();
    
    lotto1.checkRank();
    switch(lotto.rank){
    case 1:
        console.log("1등"); break
        case 2:
        console.log("2등"); break
        case 3:
        console.log("3등"); break
        case 4:
        console.log("4등"); break
        case 5:
        console.log("5등"); break
    default:
        console.log("꽝");    
    }


