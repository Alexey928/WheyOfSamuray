import React, {useEffect} from 'react';
import User from "./User";
import style from "./users.module.css"
import {usersStateType, userType} from "../../ActionCreators/usersAC";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../State/reduxStore";
import axios, { AxiosResponse } from 'axios';
import Preloader from "../Preloader/Preloader";


export type UsersPropsType = {
    followUnfolowUser:(userID:string)=>void
    setUsers:(users:Array<userType>)=>void
}
const Users = (props:UsersPropsType) => {
    const usersPage = useSelector<AppRootStateType,usersStateType>(state => state.usersPage);
    console.log("users")

    useEffect(  ()=>{
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
            (response:AxiosResponse) => {
                console.log(response)
                props.setUsers(response.data.items)
            }
           ).catch((e:Error)=>{
               window.alert(e.message)
           }
           ).finally(()=>{
           console.log("finely = > for some case ;)");
        })
        console.log("preloader")


        return ()=>props.setUsers([])
    },[]);

    return (
        <div className={style.usersContayner}>
            {usersPage.isLoading?<Preloader/>:usersPage.users.map((user)=><User
                followUnfolowUser={props.followUnfolowUser}
                key={user.id}
                user={user}/>)}


        </div>
    );
};

export default Users;