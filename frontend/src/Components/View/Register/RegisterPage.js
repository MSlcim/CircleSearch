import React, {useState} from 'react';
import { ConfirmPW, ValidateEmail, ValidateID, ValidatePW } from './confirmRegister';


function RegisterPage() {

    const [userID, setuserID] = useState("");
    const [userPW, setuserPW] = useState("");
    const [userCheckPW, setuserCheckPW] = useState("");
    const [userName, setuserName] = useState("");
    const [userBirth, setuserBirth] = useState("");
    const [userEmail, setuserEmail] = useState("");

    const onIdHandler = (event) => { 
        setuserID(event.currentTarget.value)
        console.log('id핸들러러 실행됨 id =', userID)
    }
    const onPwHandler = (event) => {
        setuserPW(event.currentTarget.value)
    }
    const onCheckPwHandler = (event) => {
        setuserCheckPW(event.currentTarget.value)
    }
    const onEmailHandler = (event) => {
        setuserEmail(event.currentTarget.value)
    }
    const onNameHandler = (event) => {
        setuserName(event.currentTarget.value)
    }
    const onBirthHandler = (event) => {
        setuserBirth(event.currentTarget.value)
    }
    

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(userID, userPW)
        let body = {
            ID : userID,
            PW : userPW,
            name : userName,
            birth : userBirth,
            email : userEmail,
        }
        console.log(body)
    }
  return (
  <div>
      <div style={{
                display: 'flex', justifyContent: 'center'
                , width: '100%', height: '100vh'
            }}>
                <form style={{display:'flex', flexDirection: 'column'}}
                onSubmit = {onSubmitHandler}>
                <label>아이디</label>
                <input type="ID" value={userID} onChange={onIdHandler}/>
                <ValidateID userID={userID}/>
                <label>비밀번호</label>
                <input type="password" value={userPW} onChange={onPwHandler}/>
                <ValidatePW userPW={userPW}/>
                <label>비밀번호확인</label>
                <input type="password" value={userCheckPW} onChange={onCheckPwHandler}/>
                <ConfirmPW userPW={userPW} userCheckPW={userCheckPW}/>
                <label>이름</label>
                <input type="name" value={userName} onChange={onNameHandler}/>
                <label>생년 월일</label>
                <input type="date" value={userBirth} onChange={onBirthHandler}/>
                <label>이메일</label>
                <input type="email" value={userEmail} onChange={onEmailHandler}/>
                <ValidateEmail userEmail={userEmail} />
                <br/>
                <button typt="submit">
                    회원가입
                </button>
            </form>
            </div>
    </div>
    )
}
export default RegisterPage;