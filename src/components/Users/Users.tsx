import React, {useEffect} from 'react';
import User from "./User";
import style from "./users.module.css"
import {getUsersThunkCreator, usersStateType, userType} from "../../ActionCreators/usersAC";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../State/reduxStore";

import Preloader from "../Preloader/Preloader";
import PaginationBlock from "../PaginationBlock/PaginationBlock";
import {usersUpdater} from "../../API/dallAPI"


export type UsersPropsType = {
    followUnfolowUser:(userID:string)=>void
    setUsers:(users:Array<userType>)=>void
    setUsersIsload:(flag:boolean)=>void
    setUserTotalCount:(count:number)=>void
    setCurentPage:(pageNumber:number)=>void
}

const Users:React.FC<UsersPropsType> = ({   followUnfolowUser,
                                            setUsers,
                                            setUsersIsload,
                                            setUserTotalCount,
                                            setCurentPage}) => {
    const dispatch = useAppDispatch();
    const usersPage = useSelector<AppRootStateType,usersStateType>(state => state.usersPage);

    const getUsers = (curentPage:number,pageSize:number)=>{
        dispatch(getUsersThunkCreator(curentPage,pageSize))// КОЛБЕК ДИСПАЧАЧЕШИЙ САНКУ
    }

useEffect(  ()=>{
    //usersUpdater(setUsersIsload,setUsers,setUserTotalCount,usersPage)//CАМОПИСНЫЙ АНАЛОГ ))
    getUsers(usersPage.curentPage,usersPage.pageSize)
    return ()=>setUsers([])
},[usersPage.curentPage, usersPage.pageSize]);

return (
        <div className={style.usersContayner}>
            <PaginationBlock setCurentPage={setCurentPage}
                             pagesCount={Math.ceil(usersPage.totalUsersCount/usersPage.pageSize)}
                             curentPage={usersPage.curentPage}

            />
            {usersPage.isLoading?<Preloader/>:usersPage.users.map((user)=><User
                followUnfolowUser={followUnfolowUser}
                key={user.id}
                user={user}/>)}
            <PaginationBlock setCurentPage={setCurentPage}
                             pagesCount={Math.ceil(usersPage.totalUsersCount/usersPage.pageSize)}
                             curentPage={usersPage.curentPage}
            />
        </div>
    );
};

export default Users;