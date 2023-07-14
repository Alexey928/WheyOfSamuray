import React, {useEffect} from 'react';
import User from "./User";
import style from "./users.module.css"
import {usersStateType, userType} from "../../ActionCreators/usersAC";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../State/reduxStore";
import axios, { AxiosResponse } from 'axios';
import Preloader from "../Preloader/Preloader";
import PaginationBlock from "../PaginationBlock/PaginationBlock";


export type UsersPropsType = {
    followUnfolowUser:(userID:string)=>void
    setUsers:(users:Array<userType>)=>void
    setUsersIsload:(flag:boolean)=>void
    setUserTotalCount:(count:number)=>void
}
const Users = (props:UsersPropsType) => {
    const usersPage = useSelector<AppRootStateType,usersStateType>(state => state.usersPage);

    console.log("users")

    useEffect(  ()=>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=8&page=${usersPage.curentPage}`).then(
            (response:AxiosResponse) => {
                console.log(response)
                props.setUsers(response.data.items)
                props.setUsersIsload(false);
                props.setUserTotalCount(response.data.totalCount)
            }
           ).catch((e:Error)=>{
                props.setUsersIsload(false);
                window.alert(e)
           }
           ).finally(()=>{
           console.log("finely = > for some case ;)");
        })
        console.log("preloader");
        props.setUsersIsload(true);
        return ()=>props.setUsers([])
    },[]);

    return (
        <div className={style.usersContayner}>
            <PaginationBlock pagesCount={Math.ceil(usersPage.totalUsersCount/usersPage.pageSize)}
                             curentPage={usersPage.curentPage}
            />
            {usersPage.isLoading?<Preloader/>:usersPage.users.map((user)=><User
                followUnfolowUser={props.followUnfolowUser}
                key={user.id}
                user={user}/>)}
            <PaginationBlock pagesCount={Math.ceil(usersPage.totalUsersCount/usersPage.pageSize)}
                             curentPage={usersPage.curentPage}
            />

        </div>
    );
};

export default Users;