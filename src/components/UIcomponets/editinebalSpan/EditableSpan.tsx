import React, {KeyboardEvent,ChangeEvent, useState} from 'react';
import style from "./editinebalSpan.module.css"


type EditableSpanPropsType = {
    title: string
    type:"password"|"text"
    handler:(value:string)=>void
    placeholder?:string
}
export function EditableSpan(props: EditableSpanPropsType){
    let [editMode, setEditMode] = useState<boolean>(false);
    let [title, setTitle] = useState<string>("");
    let [visible, setVisible] = useState<boolean>(false)

    const activateEditMode = () => {
        setEditMode(true);
    }
    const activateViewMode = () => {
        setEditMode(false);

    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const hiddenPassword = (password:string):string=>{
        return visible ? password : password.split("").map(()=>"*").join("");
    }

    return editMode ?
        <input className={style.input}
            type={props.type}
                    placeholder={props.placeholder?props.placeholder:""}
                    value={title}
                    onChange={changeTitle}
                    autoFocus
                    onBlur={activateViewMode}
                    onKeyDown={(e:KeyboardEvent<HTMLInputElement>)=>e.key==="Enter"&&activateViewMode()}
        />:
        <span className={style.span}>
            <span
                onClick={activateEditMode}>{
                title&&props.type==="password"?
                hiddenPassword(title):
                title?title:
                props.title
            }</span>{props.type==="password" &&title&&
            <span
            onClick={()=>setVisible(!visible)}
            style={{marginLeft:8,backgroundColor:"blue"}}>
            se
            </span>}
        </span>

}
