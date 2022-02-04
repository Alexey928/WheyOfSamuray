import React from 'react';
import style from "./dialogs.module.css"
import DialigsItem from "./DialogsItem/DialigsItem";
import {DialogsItem} from "../../State/Store";

type DialogsPagePropstype = {
    dialogItems:Array<DialogsItem>
}

const DialogsPage = (props:DialogsPagePropstype) => {
    return (
        <div className={style.dialogsContent}>
            <div>
                {props.dialogItems.map((elem,i)=><DialigsItem
                  key={i}
                  mesege = {elem.mesege}
                  user={elem.user}
                  target={elem.target}/>)}
            </div>
        </div>
    );
};

export default DialogsPage;