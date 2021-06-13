import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import TelegramLoginButton from 'react-telegram-login';

import Logo from '../assets/logo-pepebits.png';
import TextField from '../components/TextField';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const [flipped, setFlipped] = useState(false);
    
    const [emailInvalid, setEmailInvalid] = useState(false);

    let interval;

    const flipCard = () => {
        setLoginEmail("");
        setLoginPassword("");
        setRegisterEmail("");
        setRegisterPassword("");
        setName("");
        setSurname("");

        setFlipped(!flipped);
    }

    const login = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emailRegex.test(loginEmail) && loginPassword) {
            
        }
        else {
            clearInterval(interval);
            setEmailInvalid(true);
            interval = setInterval(() => {
                setEmailInvalid(false);
                clearInterval(interval);
            }, 3000);
        }
    }

    const telegramLogin = (response) => {
        console.log(response)
    }

    return (
        <div className="loginPage">
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
                <div className="card login">
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <span>Login</span>
                    </div>
                    <div className="form">
                        <TextField type="email" label="Email" value={loginEmail} invalid={emailInvalid} onChange={(value) => setLoginEmail(value)} />
                        <TextField type="password" label="Password" value={loginPassword} onChange={(value) => setLoginPassword(value)} />
                        <div className="buttons">
                            <TelegramLoginButton dataOnauth={telegramLogin} botName="Pepebits_bot" />
                            <button className="loginBtn" disabled={!loginEmail || !loginPassword} onClick={login}>Login</button>
                            <button className="registerBtn" onClick={() => setFlipped(true)}>Register</button>
                        </div>
                    </div>
                </div>
                <div className="card register">
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <span>Register</span>
                    </div>
                    <div className="form">
                        <TextField type="email" label="Email" value={registerEmail} onChange={(value) => setRegisterEmail(value)} />
                        <TextField type="password" label="Password" value={registerPassword} onChange={(value) => setRegisterPassword(value)} />
                        <TextField type="text" label="Name" value={name} onChange={(value) => setName(value)} />
                        <TextField type="text" label="Surname" value={surname} onChange={(value) => setSurname(value)} />
                        <div className="buttons">
                            <button className="loginBtn" disabled={!registerEmail || !registerPassword || !name || !surname}>Register</button>
                            <button className="registerBtn" onClick={() => flipCard()}>Login</button>
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
}
 
export default Login;