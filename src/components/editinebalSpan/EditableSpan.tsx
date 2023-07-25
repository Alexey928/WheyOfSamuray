import React, {KeyboardEvent,ChangeEvent, useState} from 'react';


type EditableSpanPropsType = {
    titlle: string
    type:string
}

export function EditableSpan(props: EditableSpanPropsType){

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState("");

    const activateEditMode = () => {
        setEditMode(true);
    }
    const activateViewMode = () => {
        setEditMode(false);

    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode ?
        <input  type={props.type}
            value={title}
                  onChange={changeTitle}
                  autoFocus onBlur={activateViewMode}
                  onKeyDown={(e:KeyboardEvent<HTMLInputElement>)=>e.key==="Enter"&&activateViewMode()}
        /> :
        <span onClick={activateEditMode}>{title?title:props.titlle}</span>
}
