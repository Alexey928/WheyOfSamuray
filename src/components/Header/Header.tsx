import React from 'react';
import style from "./Header.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../State/reduxStore";
import {UserAuthStateType} from "../../Resduscers/authUserReduser";
import isAuthed from "../../asets/free-icon-approved-1478873.png"
import notAused from "../../asets/free-icon-x-button-458594.png"
import logo from "../../asets/—Pngtree—hand-painted japanese samurai knife_4236036 (1).png"
import {useNavigate} from "react-router-dom";


const Header = ()=>{
    const auth = useSelector<AppRootStateType,UserAuthStateType>(state => state.userAuth);
    const navigate = useNavigate();
    const navigateTologin = ()=>{
        navigate("/Login")
    }
    const logAut = ()=>{
        alert("log aut is run")
    }
    return (
        <header className={style.header}>
            <img src={logo} alt={"img"}/>
            <div className={style.auth}>
                <span onClick={auth.data.isAuth?navigateTologin:logAut}>{auth.data.isAuth?"log-aut":"login"}</span>
                <img src={auth.data.isAuth?isAuthed:notAused} alt={"img"}/>
            </div>
         </header>
    )
}
export default Header;