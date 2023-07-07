import {followUnfollowActionType, setUsersActionType, usersStateType} from "../ActionCreators/usersAC";

const initialState:usersStateType = {users:[]}

type actionType = followUnfollowActionType | setUsersActionType

export const userReducer = (state=initialState, action:actionType):usersStateType=>{
    switch (action.type) {
        case "FOLLOW_UNFOLLOW":
            return {users:state.users.map((user)=>action.Userid===user.id?
                    {...user,followed:!user.followed}:user)}
        case "SET_USERS":
            return {users:[...action.users]}
        default:
            return state
    }
}

