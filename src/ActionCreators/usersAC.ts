
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



export const followUnfollowAC = (Userid:string):followUnfollowActionType =>{
    return {type:"FOLLOW_UNFOLLOW",Userid}
}
