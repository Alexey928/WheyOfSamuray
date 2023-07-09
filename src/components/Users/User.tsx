import React from 'react';
import style from "./user.module.css"
import {userType} from "../../ActionCreators/usersAC";
export type userPropsType = {
    user:userType
    followUnfolowUser:(userID:string)=> void
}

const User = React.memo((props:userPropsType) => {//
    console.log("user is coled");
    return (
        <div className={style.userContayner}>
               <div>
                   <img alt={"img"} className={style.avatar} src={props.user.photos}/>
                   <button onClick={()=>props.followUnfolowUser(props.user.id)}>{props.user.followed?"Unfollow":"Follow"}</button>
               </div>

               <div className={style.userContent}>
                   <div className={style.name}>{props.user.name}</div>
                   <div className={style.location}>
                       <div>{"user.location.country"}</div>
                       <div>{"user.location.city"}</div>
                   </div>
                   {props.user.status}
               </div>
           </div>
    );
});

export default User;