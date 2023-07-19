import React, {useEffect} from 'react';
import User from "./User";
import style from "./users.module.css"
import {getUsersThunkCreator, setUsersAC, usersStateType} from "../../ActionCreators/usersAC";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../State/reduxStore";
import Preloader from "../Preloader/Preloader";
import PaginationBlock from "../PaginationBlock/PaginationBlock";

export type UsersPropsType = {
    followUnfolowUser:(userID:string)=>void
    setCurentPage:(pageNumber:number)=>void
}


const Users:React.FC<UsersPropsType> = ({followUnfolowUser,setCurentPage}) => {
    const dispatch = useAppDispatch();
    const usersPage = useSelector<AppRootStateType,usersStateType>(state => state.usersPage);

    const getUsers = (curentPage:number,pageSize:number)=>{
        dispatch(getUsersThunkCreator(curentPage,pageSize))// КОЛБЕК ДИСПАЧАЧЕШИЙ САНКУ
    }

useEffect(  ()=>{
    getUsers(usersPage.curentPage,usersPage.pageSize)
    return ()=>{dispatch(setUsersAC([]))}
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