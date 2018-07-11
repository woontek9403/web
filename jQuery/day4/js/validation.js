$(function(){
          $("form").validate({
            //   아이디
              rules: {
                  id: {
                      required : true,
                      minlength : 4
                  },
                //   비밀번호
                  password: {
                      required : true,
                      minlength : 8,
                      regex: /^(?=\w{8,20}$)\w*(\d[A-z]|[A-z]\d)\w*$/
                  },
                //   비밀 번호 확인
                  repassword: {
                      required : true,
                      minlength : 8,
                      equalTo : password
                  },
                //   이름
                  name: {
                      required : true,
                      minlength : 2
                  },
                //   나이
                  age: {
                      digits : true
                  },
                //   이메일
                  email: {
                      required : true,
                      minlength : 2,
                      email : true
                  },
                //   홈페이지
                  homepage: {
                      url : true
                  }
              },
              //규칙체크 실패시 출력될 메시지
              messages : {
                  id: {
                      
                      required : "필수로입력하세요",
                      minlength : "최소 {0}글자이상이어야 합니다"
                  },
                  password: {
                      required : "필수로입력하세요",
                      minlength : "최소 {0}글자이상이어야 합니다",
                      regex : "영문자, 숫자로 이루어져있으며 최소 하나이상 포함"
                  },
                  repassword: {
                      required : "필수로입력하세요",
                      minlength : "최소 {0}글자이상이어야 합니다",
                      equalTo : "비밀번호가 일치하지 않습니다."
                  },
                  name: {
                      required : "필수로입력하세요",
                      minlength : "최소 {0}글자이상이어야 합니다"
                  },
                  age: {
                      digits : "숫자만입력하세요"
                  },
                  email: {
                      required : "필수로입력하세요",
                      minlength : "최소 {0}글자이상이어야 합니다",
                      email : "메일규칙에 어긋납니다"
                  },
                  homepage: {
                      url : "정상적인 URL이 아닙니다"
                  }
              }
          });
      })
      $.validator.addMethod(
          "regex",
          function(value, element, regexp) {
              var re = new RegExp(regexp);
              return this.optional(element) || re.test(value);
          },
          "Please check your input."
      );
      