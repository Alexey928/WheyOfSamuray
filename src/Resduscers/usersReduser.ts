import {
    followUnfollowActionType,
    setIsLoadActionType,
    setTotalUserCountType,
    setUsersActionType,
    usersStateType
} from "../ActionCreators/usersAC";

const initialState:usersStateType = {
    users:[],
    pageSize:9,
    totalUsersCount:100,
    curentPage:3,
    isLoading:false,
}

type actionType = followUnfollowActionType |
                 setUsersActionType|
                 setIsLoadActionType|setTotalUserCountType;

export const userReducer = (state=initialState, action:actionType):usersStateType=>{
    switch (action.type) {
        case "FOLLOW_UNFOLLOW":
            return {...state, users:state.users.map((user)=>action.Userid===user.id?
                    {...user,followed:!user.followed}:user)}
        case "SET_USERS":
            return {...state, users:[...action.users]}
        case "SET_IS_LOAD":
            return {...state,isLoading:action.flag}
        case "SET_TOTAL_USER_COUNT":
            return {...state,totalUsersCount:action.count}
        default:
            return state
    }
}

