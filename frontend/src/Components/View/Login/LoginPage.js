import React , {useState, useEffect} from 'react';

function LoginPage() {
    const [userID, setuserID] = useState("");
    const [userPW, setuserPW] = useState("");
    
    const onIDHandler = (event) => {
        setuserID(event.currentTarget.value)
    }
    const onPWHandler = (event) => {
        setuserPW(event.currentTarget.value)
    }
    const onsubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
    <div>
        <div style={{
                display: 'flex', justifyContent: 'center'
                , width: '100%', height: '100vh'
            }}>
                <form style={{display:'flex', flexDirection: 'column'}}>
                    <h2>로그인</h2>
                    <label>ID</label>
                    <input type="ID" value={userID} onChange={onIDHandler}/>
                    <label>PW</label>
                    <input type="password" value={userPW} onChange={onPWHandler}/>
                    <br/>
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
    </div>
    );
}

export default LoginPage;
