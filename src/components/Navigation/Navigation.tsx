import React from 'react';
import style from "./Nawigation.module.css"
import {NavLink, useLocation} from "react-router-dom";
import {AppRootStateType, useAppDispatch} from "../../State/reduxStore";
import {useSelector} from "react-redux";
import {navigationStateType} from "../../Resduscers/navigationMenuReduser";
import {sestIsMenuActiveAC} from "../../ActionCreators/navigationMenuAC";


const Navigation = ()=>{
 const location  = useLocation()
    console.log(location);//<---- interesting object ))
    const navigationStaete = useSelector<AppRootStateType,navigationStateType>(state => state.navigation);
    const dispatch = useAppDispatch();


const f = style.navigation
    console.log(f)
    return (
       <div>
           <nav className={navigationStaete.shoveIt?`${style.navigation} ${style.navigationSelected} `:style.navigation}>
               <div>
                   <NavLink onClick={()=>{dispatch(sestIsMenuActiveAC(false))}} to={"/Profile"} className={({ isActive }) => (isActive ? `${style.active} ${style.act}` :'')}>Profile</NavLink>
               </div>
               <div>
                   <NavLink to={"/DialogesPage"}  className={({ isActive }) => (isActive ? `${style.active} ${style.act}` :'')}>Messages</NavLink>
               </div>
               <div>
                   <NavLink to={"/Users"} onClick={()=>{dispatch(sestIsMenuActiveAC(false))}}  className={({ isActive }) => (isActive ? `${style.active} ${style.act}` :'')}>Users</NavLink>
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