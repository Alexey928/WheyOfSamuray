import React from 'react';
import User from "./User";
import {usersStateType} from "../../ActionCreators/usersAC";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../State/reduxStore";


export type UsersPropsType = {
    followUnfolowUser:(userID:string)=>void
}

const Users = (pros:UsersPropsType) => {
    const usersPage = useSelector<AppRootStateType,usersStateType>(state => state.usersPage);
    

    return (
        <div>
            {usersPage.users.map((user)=><User followUnfolowUser={pros.followUnfolowUser} key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;