import React from 'react';
import style from "./Nawigation.module.css"
import {Link, NavLink, useLocation} from "react-router-dom";


const Navigation = ()=>{
 const location  = useLocation()
    console.log(location);//<---- interesting object ))
    return (
       <div>
           <nav className={style.navigation}>
               <div>
                   <NavLink to={"/Profile"} className={({ isActive }) => (isActive ? `${style.active} ${style.act}` :'')}>Profile</NavLink>
               </div>
               <div>
                   <NavLink to={"/DialogesPage"}  className={({ isActive }) => (isActive ? `${style.active} ${style.act}` :'')}>Messages</NavLink>
               </div>
               <div>
                   <NavLink to={"/Users"}  className={({ isActive }) => (isActive ? `${style.active} ${style.act}` :'')}>Users</NavLink>
               </div>
               <div>
                   <a href={"/Music"}>Music</a>
               </div>
               <div>
                   <a href={"/Setings"}>Setings</a>
               </div>
           </nav>
           <div className={style.frendsCotayner}>Friends</div>
       </div>


    )
}
export default Navigation;