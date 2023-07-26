import React from 'react';
import style from './login.module.css';
import {EditableSpan} from "../UIcomponets/editinebalSpan/EditableSpan";



const LoginPage = () => {


    return (
        <div className={style.loginFormContayner}>
            <form className={style.form}>
                <EditableSpan handler={(t:string)=>{}} title={"Yor login"} type={"text"} placeholder={""}/>
                <EditableSpan handler={(t:string)=>{}} title={"Yor Password"} type={"password"}/>
                <button onClick={(e:any)=>{e.preventDefault()}} className={style.button}>Sing In</button>
            </form>
        </div>

    );
};

export default LoginPage;