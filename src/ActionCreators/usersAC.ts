
export type userType = {
    id:string
    followed:boolean
    name:string
    status:string|null
    photos?:string
    uniqueUrlName?:string|null
    location:{
        city:string
        country:string
    }
}
export type usersStateType = {
    users:Array<userType>
    pageSize:number
    totalUsersCount:number
    curentPage:number
    isLoading:boolean
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

