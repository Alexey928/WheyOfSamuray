import React from 'react';
import style from "./dialogs.module.css"
import DialigsItem from "./DialogsItem/DialigsItem";
import {DialogsItemType} from "../../Resduscers/dialogsReduser";
import AddItemForm from "../AddItemForm/AddItemForm";


type DialogsPagePropstype = {
    dialogItems:Array<DialogsItemType>
    addDialog:(nevDialog:string)=>void
    removeDialog:(dialogID:string)=>void
}

const DialogsPage = (props:DialogsPagePropstype) => {
    return (
        <div className={style.dialogsContent}>
            <AddItemForm addItem={props.addDialog}/>
            <div>
                {props.dialogItems.map((elem,i)=><DialigsItem
                      removeDialog={()=>props.removeDialog(elem.id)}
                      target={elem.target}
                      key={elem.id}
                      mesege = {elem.message}
                      user={elem.userFirstName}/>)}
            </div>
        </div>
    );
};

export default DialogsPage;