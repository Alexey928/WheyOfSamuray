import React from 'react';
import style from "./dialogs.module.css"
import DialigsItem from "./DialogsItem/DialigsItem";
import Mesege from "./Mesege/Mesege";


const DialogsPage = () => {
    return (
        <div className={style.dialogsContent}>
            <div>
                <DialigsItem user={"Ura"}  target={"1"}/>
                <DialigsItem user={"Svetka"} target={"2"}/>
                <DialigsItem user={"Vitalya"} target={"3"}/>
                <DialigsItem user={"Miha"} target={"4"}/>
            </div>
            <div>
                <Mesege mesege={"Bla bla bla"}/>
                <Mesege mesege={"la la la --> du du du ))"}/>
                <Mesege mesege={"la la la --> du du du ))"}/>
                <Mesege mesege={"oy moroz morooooz ne moroz menya... ))" }/>
            </div>

        </div>
    );
};

export default DialogsPage;