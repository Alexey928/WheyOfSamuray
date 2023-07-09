import React from 'react';
import style from "./user.module.css"
import {userType} from "../../ActionCreators/usersAC";
import avatar from "../../asets/avatar.jpg"
export type userPropsType = {
    user:userType
    followUnfolowUser:(userID:string)=> void
}

const User = React.memo((props:userPropsType) => {//
    return (
        <div className={style.userContayner}>
               <div>
                   <img alt={"img"} className={style.avatar} src={props.user.photos.small||avatar}/>
                   <button onClick={()=>props.followUnfolowUser(props.user.id)}>{props.user.followed?"Unfollow":"Follow"}</button>
               </div>
               <div className={style.userContent}>
                   <div className={style.name}>{props.user.name}</div>
                   <div className={style.location}>
                       <div>{"country"}</div>
                       <div>{"city"}</div>
                   </div>
                   {props.user.status}
               </div>
           </div>
    );
});

export default User;