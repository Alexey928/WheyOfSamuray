import React from 'react';
import style from "./Nawigation.module.css"


const Navigation = ()=>{
    return (
       <nav className={style.navigation}>
           <div>
               <a href={"*"}>Profie</a>
           </div>
           <div>
               <a href={"*"}>Meseges</a>
           </div>
           <div>
               <a href={"*"}>News</a>
           </div>
           <div>
               <a href={"*"}>Music</a>
           </div>
           <div>
               <a href={"*"}>Setings</a>
           </div>
       </nav>
    )
}
export default Navigation;