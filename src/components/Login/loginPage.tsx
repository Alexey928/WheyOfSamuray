import React from 'react';
import style from './login.module.css';
import {EditableSpan} from "../UIcomponets/editinebalSpan/EditableSpan";
import {Field, InjectedFormProps, reduxForm} from "redux-form";



type FormDataType = {
    login?: string;
    password?: string;
    rememberMe?:boolean
};
export const RenderedField = ({input,meta ,...props}:{input:any,meta:any})=>{
    console.log(meta);
return(
    <div>
        <input {...input} {...props} />
    </div>

)
}


const LoginForm = (props:InjectedFormProps)=>{
    console.log(props)
    return(
        <form className={style.form} onSubmit={props.handleSubmit}>
            <EditableSpan input={Field} title={"Yor login ?"} type={"text"} placeholder={"'test' - for testing"}
                           handler={(tittle:string) => console.log(tittle)}/>

            <EditableSpan input={Field} title={"Yor Password ?"} type={"password"} placeholder={"'test' - for testing"}/>
            <span> remember me <Field name={"rememberMe"} type={"checkbox"} component="input"/></span>
            <button   className={style.button}>Sing In</button>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form:"login",
})(LoginForm)

const LoginPage = () => {
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