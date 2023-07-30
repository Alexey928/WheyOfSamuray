import React from 'react';
import style from './login.module.css';
import {EditableSpan} from "../UIcomponets/editinebalSpan/EditableSpan";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

//import {useAppDispatch} from "../../State/reduxStore";

type FormDataType = {
    login?: string;
    password?: string;
};

const LoginForm = (props:InjectedFormProps)=>{
    console.log(props)
    return(
        <form className={style.form} onSubmit={props.handleSubmit}>
            <EditableSpan  title={"Yor login ?"} type={"text"} placeholder={"Enter Login"}
                           handler={(tittle:string)=>console.log(tittle)}/>

            <EditableSpan  title={"Yor Password ?"} type={"password"} placeholder={"Enter Password"}/>
            <span> remember me <Field name={"rememberMe"} type={"checkbox"} component="input"/></span>
            <button type={"submit"} className={style.button}>Sing In</button>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form:"login",
})(LoginForm)

const LoginPage = () => {
    // const dispatch = useAppDispatch()
    const onSubmit = (formData:FormDataType)=>{
        console.log("onSubmit handler")
        console.log(formData)
    }
    return (
        <div className={style.loginFormContayner}>
            {/*<button onClick={()=>dispatch(sestIsMenuActiveAC())} className={style.button}>menu</button>*/}
            <ReduxLoginForm onSubmit = {onSubmit}/>
        </div>

    );
};

export default LoginPage;