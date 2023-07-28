import React, {KeyboardEvent,ChangeEvent, useState} from 'react';
import style from "./editinebalSpan.module.css"
import aie from "../../../asets/eye256x256_114396.png"

type EditableSpanPropsType = {
    title: string
    type:"password"|"text"
    handler?:(value:string)=>void
    placeholder?:string
}
export function EditableSpan(props: EditableSpanPropsType){
    let [editMode, setEditMode] = useState<boolean>(false);
    let [title, setTitle] = useState<string>("");
    let [visible, setVisible] = useState<boolean>(false);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.handler && props.handler(title)

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
        <span className={style.spanContainer}>
            {title&& <span className={style.fieldName}
                           style={{left:props.type==="password"?-90:-60}}>
                           {props.type==="password"?"password ➤":"login ➤"}
                      </span>}
            <span className={style.span}
                onClick={activateEditMode}>
                {
                    title&&props.type==="password"?
                    hiddenPassword(title):
                    title?title:
                    props.title
                }
            </span>{props.type==="password" && title &&
            <span className={style.triger}
                onClick={()=>setVisible(!visible)}
                style={{ backgroundImage:`url(${aie})`}}>
            </span>}
        </span>

}
