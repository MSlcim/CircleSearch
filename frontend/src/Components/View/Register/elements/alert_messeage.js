import React from "react";

export function Alert_ID(props) {
    const isPassed = props.isPassed;
    if (isPassed) {
        return (
            <p>사용할 수 있는 아이디입니다.</p>
        )
    } else {
        return (
            <p>아이디는 5~20자리 영문,숫자로 입력해주세요.</p>
        )
    }
}

export function Alert_PW(props) {
    const isPassed = props.isPassed;
    if (isPassed) {
        return (
            <p>사용할 수 있는 비밀번호입니다.</p>
        )
    } else {
        return (
            <p>비밀번호 형식은 8~16자리 영문,숫자,특수기호 조합입니다.</p>
        )
    }
}

export function Alert_PWCheck(props) {
    const isPassed = props.isPassed;
    if (isPassed) {
        return (
            <p>확인되었습니다.</p>
        )
    } else {
        return (
            <p>비밀번호와 일치하지 않습니다.</p>
        )
    }
}

export function Alert_Email(props) {
    const isPassed = props.isPassed;
    if (isPassed) {
        return (
            <p>사용가능한 이메일입니다.</p>
        )
    } else {
        return (
            <p>이메일 형식을 올바르게 입력해주세요.</p>
        )
    }
}