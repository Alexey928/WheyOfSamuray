import React from 'react';
import style from './login.module.css';
import {EditableSpan} from "../editinebalSpan/EditableSpan";



const LoginPage = () => {


    return (
        <div className={style.loginFormContayner}>
            <form className={style.form}>
                <EditableSpan titlle={"Yor login"} type={"text"}/>
                <EditableSpan titlle={"Yor Password"} type={"password"}/>
            </form>
        </div>

    );
};

export default LoginPage;