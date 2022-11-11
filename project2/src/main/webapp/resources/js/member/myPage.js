// 비밀번호 변경 유효성 검사

const changePwForm = document.getElementById("changePwForm");


if(changePwForm != null) { // changePwForm 요소가 존재할 때

    changePwForm.addEventListener("submit", function(event){

        // ** 이벤트 핸들러 매개변수 event || e **
        // -> 현재 발생한 이벤트 정보를 가지고 있는 event 객체가 전달됨.
        
        console.log(event);

        // 비밀번호 변경에 사용되는 input 요소 모두 얻어오기
        const currentPw = document.getElementById("currentPw");
        const newPw = document.getElementById("newPw");
        const newPwConfirm = document.getElementById("newPwConfirm");

        // 현재 비밀번호가 작성되지 않았을 때
        if(currentPw.value.trim().length == 0){
            // alert("현재 비밀번호를 입력해주세요.");
            // currentPw.focus();
            // currentPw.value = "";
            alertAndFocus(currentPw, "현재 비밀번호를 입력해주세요.");

            // return false; 
            // --> 인라인 이벤트 모델 onsubmit = "return 함수명();" 에서만 가능

            event.preventDefault();
            // -> 이벤트를 수행하지 못하게 하는 함수
            // ---> 기본 이벤트 삭제
            return;
        }


        // 새 비밀번호가 작성되지 않았을 때
        if(newPw.value.trim().length == 0){
            // alert("새 비밀번호를 입력해주세요.");
            // newPw.focus();
            // newPw.value = "";
            alertAndFocus(newPw,"새 비밀번호를 입력해주세요.");

            event.preventDefault();
            return;
        }

        // 새 비밀번호 확인이 작성되지 않았을 때
        if(newPwConfirm.value.trim().length == 0){
            // alert("새 비밀번호를 한 번 더 입력해주세요.");
            // newPwConfirm.focus();
            // newPwConfirm.value = "";
            alertAndFocus(newPwConfirm,"새 비밀번호를 한 번 더 입력해주세요.");

            event.preventDefault();
            return;
        }


        // 비밀번호 정규식 검사


        // 새 비밀번호, 새 비밀번호 확인이 같은지 검사
        if(newPw.value != newPwConfirm.value){
            alert("새 비밀번호가 일치하지 않습니다.");
            newPwConfirm.focus();
            event.preventDefault(); // 기본 이벤트 제거
            return; // 함수 종료
        }

    })


}


// 경고창 출력 + 포커스 이동 + 값 삭제
function alertAndFocus(input, str){
    alert(str);
    input.focus();
    input.value = "";
}



// 회원 탈퇴 유효성 검사
// - 인라인 이벤트 모델 또는 표준 이벤트 모델로 작성

// 1) 비밀번호 미작성 -> "비밀번호를 입력해주세요" alert 출력 후
                        // 포커스 이동(내용도 같이 삭제)

// 2) 동의 체크가 되지 않은 경우 -> "탈퇴 동의하시면 체크를 눌러주세요." alert 출력 후
//                                    포커스 이동

// 3) 1번, 2번이 모두 유효할 때
//    정말 탈퇴를 진행할 것인지 확인하는 confirm 출력
//    (확인 클릭 -> 탈퇴 / 취소 -> 탈퇴 취소) 


// 표준 이벤트 모델(권장)
// const memberDeleteForm = document.getElementById("memberDeleteForm");

// if(memberDeleteForm != null) {

//     memberDeleteForm.addEventListener("submit",function(event){

//         console.log(event);

//         const memberPw = document.getElementById("memberPw");
        
//         if(memberPw.value.trim().length == 0){
//             alert("현재 비밀번호를 입력하세요.");
//             memberPw.focus();
//             memberPw.value="";
//             event.preventDefault(); // 기본 이벤트 제거
//             return;
//         }
        
//         // 동의 체크박스
//         const agree = document.getElementById("agree");
//         if(!agree.checked){
//             alert("탈퇴 동의하시면 체크를 눌러주세요.");
//             agree.focus();
//             event.preventDefault(); // 기본 이벤트 제거
//             return false;
//         } 
        
//         // 정말 탈퇴할 것인지 검사
//         if(!confirm("정말 탈퇴하시겠습니까?")){ // 취소한 경우
//             alert("탈퇴취소");
//             event.preventDefault();
//             memberPw.value="";  // 비밀번호 친거 삭제
//             return;
//         }
        

        
//     });
// }


// 인라인 이벤트 모델
function memberDeleteValidate(){

    // 비밀번호 입력 검사
    const memberPw = document.getElementById("memberPw");

    if(memberPw.value.trim().length == 0){
        alert("비밀번호를 입력해주세요.")
        memberPw.focus();
        memberPw.value = "";
        return false;
    }

    // 체크 여부 검사
    const agree = document.getElementById("agree");

    if(!agree.checked){
        alert("탈퇴 동의하시면 체크를 눌러주세요.");
        agree.focus();
        return false;
    }

    // 탈퇴 여부 확인
    if(!confirm("정말로 탈퇴 하시겠습니까?")){
        alert("탈퇴 취소");
        return false;
    }

    return true;
}
