import React, {KeyboardEvent,ChangeEvent, useState} from 'react';


type EditableSpanPropsType = {
    titlle: string
    type:string
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
        return password.split("").map(el=>"*").join("");
    }

    return editMode ?
        <input  type={props.type}
            value={title}
                  onChange={changeTitle}
                  autoFocus onBlur={activateViewMode}
                  onKeyDown={(e:KeyboardEvent<HTMLInputElement>)=>e.key==="Enter"&&activateViewMode()}
        /> :
        <span onClick={activateEditMode}>{title&&props.type==="password"?hiddenPassword(title):title?title:props.titlle}</span>
}
