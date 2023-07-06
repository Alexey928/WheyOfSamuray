import React from 'react';
import style from "./user.module.css"
import {userType} from "../../ActionCreators/usersAC";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../State/reduxStore";
export type userPropsType = {
    user:userType
    followUnfolowUser:(userID:string)=> void
}



const User = (props:userPropsType) => {


    return (
        <div className={style.userContayner}>
               <div>
                   <img alt={"img"} className={style.avatar} src={props.user.avatar}/>
                   <button onClick={()=>props.followUnfolowUser(props.user.id)}>{props.user.isFollow?"Unfollow":"Follow"}</button>
               </div>

               <div className={style.userContent}>
                   <div className={style.name}>{props.user.fullName}</div>
                   <div className={style.location}>
                       <div>{props.user.location.country}</div>
                       <div>{props.user.location.city}</div>
                   </div>
                   {props.user.status}
               </div>
           </div>
    );
};

export default User;