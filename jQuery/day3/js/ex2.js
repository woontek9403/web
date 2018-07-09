$("select").on("change",function(){
    // $("#input").val($(this).val()); = $("#input").val($(select).find("option:selected").val());

    // 1.선택된 설렉트의 값이 1인지 비교
    var selectVal = $(this).val();

    // 2. 1이 맞다면 input태그의 값을 비움
    if(selectVal == '1'){
    
    // 3. 그리고 input태그의 속성 readonly를 false로 설정
        $("#input").val("");

    // 4. input태그의 값을 선택된 값으로 저장
        $("#input").pror("readonly" , false);
    }

   

    // 5. 1이 아니라면
    else{
        
        // 6.input태그의 값을 선택된 값으로 저장
        $("input"),val(selectVal);
    

    // 7. 그리고 input 태그의 속성 readonly를 true로 설정
    $("#input").pror("readonly",true);
    }
});



