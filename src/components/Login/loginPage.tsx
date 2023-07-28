import React from 'react';
import style from './login.module.css';
import {EditableSpan} from "../UIcomponets/editinebalSpan/EditableSpan";
import {sestIsMenuActiveAC} from "../../ActionCreators/navigationMenuAC";
import {useAppDispatch} from "../../State/reduxStore";



const LoginPage = () => {
    const dispatch = useAppDispatch()

    return (
        <div className={style.loginFormContayner}>
            {/*<button onClick={()=>dispatch(sestIsMenuActiveAC())} className={style.button}>menu</button>*/}
            <form className={style.form}>
                <EditableSpan  title={"Yor login ?"} type={"text"} placeholder={"Enter Login"} handler={(tittle:string)=>console.log(tittle)}/>
                <EditableSpan  title={"Yor Password ?"} type={"password"} placeholder={"Enter Password"}/>
                <span> remember me <input type={"checkbox"}/></span>
                <button onClick={(e:any)=>{e.preventDefault()}} className={style.button}>Sing In</button>
            </form>
        </div>

    );
};

export default LoginPage;