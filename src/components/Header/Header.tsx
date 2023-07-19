import React from 'react';
import style from "./Header.module.css"
type HeaderPropstype = {
    logo:string
}

const Header = (props:HeaderPropstype)=>{
    return (
        <header className={style.header}>

            <img src={props.logo} alt={"fone"}/>
         </header>
    )
}
export default Header;