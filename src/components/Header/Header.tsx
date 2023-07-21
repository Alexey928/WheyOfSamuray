import React from 'react';
import style from "./Header.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../State/reduxStore";
import {usersStateType} from "../../ActionCreators/usersAC";
import {UserAuthStateType} from "../../Resduscers/authUserReduser";
import isAuthed from "../../asets/free-icon-approved-1478873.png"
import logo from "../../asets/png-clipart-samurai-holding-sword-graphic-onna-bugeisha-samurai-woman-bushido-katana-samurai-computer-wallpaper-sports-equipment.png"
type HeaderPropstype = {
    logo:string
}

const Header = ()=>{
    const auth = useSelector<AppRootStateType,UserAuthStateType>(state => state.userAuth);
    console.log("header");

    return (
        <header className={style.header}>
            <img src={logo} alt={"img"}/>
            <div className={style.auth}>
                <img src={isAuthed} alt={"img"}/>
            </div>
         </header>
    )
}
export default Header;