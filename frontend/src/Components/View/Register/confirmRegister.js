// 유효성검사 규칙 설정
import { Alert_Email, Alert_ID, Alert_PW, Alert_PWCheck } from "./elements/alert_messeage";
import React from "react";
// 비밀번호 - 영문대문자
const regExpEm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; 
const regExpPw = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/; //비밀번호 8자리~ 16자리 숫자, 문자,특수기호 최소 1회
const regExpId = /^[0-9a-z]{5,20}$/; //5~20자리 영문 숫자만 입력가능


//ID 유효성 검사
export const ValidateID = (props) =>{
    const userID = props.userID
    if (userID == null) {
        return null
    }
    if (regExpId.test(userID)) {
        return <Alert_ID isPassed={true}/>
    }
    else {
        return <Alert_ID isPassed={false}/>
    }
}

//비밀번호 유효성 검사 type0 -> null, type2 -> 유효성검사 통과, type1 -> 유효성검사 미통과
export const ValidatePW = (props) => {
    const userPW = props.userPW
    if (userPW == null) {
        return null
    }
    if (regExpPw.test(userPW)) {
        return <Alert_PW isPassed={true}/>
    }
    else {
        return <Alert_PW isPassed={false}/>
    }
}

//비밀번호 확인 체크
export const ConfirmPW = (props) => {
    const userPW = props.userPW
    const userCheckPW = props.userCheckPW
    if (userCheckPW == null) {
        return null
    }
    if (userPW == userCheckPW) {
        console.log('확인되었습니다.')
        return <Alert_PWCheck isPassed={true}/>
    }
    return <Alert_PWCheck isPassed={false}/>
}

//이메일 유효성 검사 type0 -> null type2 -> 유효성검사 통과 type1 -> 유효성검사 미통과
export const ValidateEmail = (props) => {
    const userEmail = props.userEmail
    if (userEmail == null) {
        return null
    }
    if (regExpEm.test(userEmail)) {
        return <Alert_Email isPassed={true}/>
    }
    else {
        return <Alert_Email isPassed={false}/>
    }
}