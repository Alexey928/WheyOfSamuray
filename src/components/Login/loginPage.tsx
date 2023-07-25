import React from 'react';
import style from './login.module.css';



const LoginPage = () => {


    return (
        <div className={style.loginFormContayner}>
            <div>
                <span>Sing In</span>
                <span>Log In</span>
            </div>
            <form>
                <input type={"text"}/> <span>login</span>
                <input type={"text"}/> <span>Password</span>
            </form>
        </div>

    );
};

export default LoginPage;