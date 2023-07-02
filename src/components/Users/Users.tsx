import React from 'react';
import User from "./User";
import {userType} from "../../ActionCreators/usersAC";

export type UsersPropsType = {
    users:Array<userType>
}
const Users = (props:UsersPropsType) => {


    return (
        <div>
            {props.users.map((user)=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;