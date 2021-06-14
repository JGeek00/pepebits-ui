import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import TelegramLoginButton from 'react-telegram-login';
import Loader from "react-loader-spinner";

import Logo from '../assets/logo-pepebits.png';
import TextField from '../components/TextField';
import Toast from '../components/Toast';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const [flipped, setFlipped] = useState(false);
    
    const [emailInvalid, setEmailInvalid] = useState(false);

    const [loggingIn, setLoggingIn] = useState(false);
    const [showToast, setShowToast] = useState(false);

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
            setLoggingIn(true);
            setShowToast(true)
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
            <Toast type="error" text="Login failed. Try it again." showToast={showToast} hideToast={setShowToast} duration={3000} />
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
                <div className="card login">
                    <div className={loggingIn ? "proccessMessage show" : "proccessMessage"}>
                        <Loader type="Oval" color="rgb(34, 41, 55)" height={75} width={75} />
                        <span>Logging in...</span>
                    </div>
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <span>Login</span>
                    </div>
                    <div className="form">
                        <TextField type="email" label="Email" value={loginEmail} invalid={emailInvalid} onChange={(value) => setLoginEmail(value)} />
                        <TextField type="password" label="Password" value={loginPassword} onChange={(value) => setLoginPassword(value)} />
                        <div className="buttons">
                            <button className="loginBtn" disabled={!loginEmail || !loginPassword} onClick={login}>Login</button>
                            <TelegramLoginButton dataOnauth={telegramLogin} botName="Pepebits_bot" usePic={false} />
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