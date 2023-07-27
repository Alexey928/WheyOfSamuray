import React from 'react';
import style from './login.module.css';
import {EditableSpan} from "../UIcomponets/editinebalSpan/EditableSpan";



const LoginPage = () => {


    return (
        <div className={style.loginFormContayner}>
            <form className={style.form}>
                <EditableSpan  title={"Yor login ?"} type={"text"} placeholder={"Enter Login"}/>
                <EditableSpan  title={"Yor Password ?"} type={"password"} placeholder={"Enter Password"}/>
                <button onClick={(e:any)=>{e.preventDefault()}} className={style.button}>Sing In</button>
            </form>
        </div>

    );
};

export default LoginPage;