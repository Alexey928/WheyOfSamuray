import React from 'react';
import style from "./Header.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../State/reduxStore";
import {usersStateType} from "../../ActionCreators/usersAC";
import {UserAuthStateType} from "../../Resduscers/authUserReduser";
import isAuthed from "../../asets/free-icon-approved-1478873.png"
import logo from "../../asets/—Pngtree—hand-painted japanese samurai knife_4236036 (1).png"
type HeaderPropstype = {
    logo:string
}

const Header = (props:HeaderPropstype)=>{
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