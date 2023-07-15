import {
    followUnfollowActionType,
    setCurentPageType,
    setIsLoadActionType,
    setTotalUserCountType,
    setUsersActionType,
    usersStateType
} from "../ActionCreators/usersAC";

const initialState:usersStateType = {
    users:[],
    pageSize:10,
    totalUsersCount:0,
    curentPage:1,
    isLoading:false,
}

type actionType = followUnfollowActionType |
                 setUsersActionType|
                 setIsLoadActionType|
                 setTotalUserCountType|
                 setCurentPageType;

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
            console.log(action.count)
            return {...state,totalUsersCount:action.count}
        case "SET_CURENT_PAGE":
            return {...state,curentPage:action.pageNumber}
        default:
            return state
    }
}

