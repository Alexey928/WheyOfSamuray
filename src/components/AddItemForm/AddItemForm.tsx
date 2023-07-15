import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {validateInputValue as validator} from "../../AuxiliaryLogic/validate"
import style from "./adItemForm.module.css"

type AddItemFormPropsType ={
    addItem:(title:string)=>void
}

const AddItemForm:React.FC<AddItemFormPropsType> = ({addItem}) => {
    const [inputValue,setInputValue]=useState<string>("");
    const [error,setError] = useState<boolean>(false);
    const [isEnterPressed, setIsEnterPressed] = useState(false);

const onClickHandler = ()=>{
    validator(inputValue,setError) &&
    addItem(inputValue);
    setInputValue("");
}



    return (
        <div>
            <div className={style.container}>
            <textarea autoFocus={true} placeholder={isEnterPressed ? "" : "Enter Massage..."} className={style.input}
                   value={inputValue}
                   onChange={(e:ChangeEvent<HTMLTextAreaElement>)=> {
                       setInputValue(e.currentTarget.value);
                       setError(false);
                   }}
                  onKeyDown={(e:KeyboardEvent<HTMLTextAreaElement>)=> {
                       e.key==="Enter" &&
                       onClickHandler()
                  }}
            />
            <span className={style.underline}></span>
        </div>
        <button onClick={onClickHandler}>add</button>
        </div>
    );
};
export default AddItemForm;