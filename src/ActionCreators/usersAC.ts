
export type userType = {
    id:string
    isFollow:boolean
    fullName:string
    status:string
    avatar:string
    location:{
        city:string
        country:string
    }
}
export type usersStateType = {
    users:Array<userType>
}

export type followUnfollowActionType = {
    type:"FOLLOW_UNFOLLOW"
    Userid:string
}
export type setUsersActionType = {
    type:"SET_USERS"
    users:Array<userType>
}



export const followUnfollowAC = (Userid:string):followUnfollowActionType =>{
    return {type:"FOLLOW_UNFOLLOW",Userid}
}
export const setUsersAC = (users:Array<userType>):setUsersActionType=>{
    return {type:"SET_USERS",users}
}
