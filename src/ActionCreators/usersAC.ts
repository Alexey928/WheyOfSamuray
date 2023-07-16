import {usersAPI} from "../API/dallAPI";
import {DispatchType} from "../State/reduxStore";

export type userType = {
    id:string
    followed:boolean
    name:string
    status:string|null
    photos:
    {
        large:string|null
        small:string|null
    }
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
export type setIsLoadActionType = {
    type:"SET_IS_LOAD"
    flag:boolean
}
export type setTotalUserCountType = {
    type:"SET_TOTAL_USER_COUNT"
    count:number
}
export type setCurentPageType =  {
    type:"SET_CURENT_PAGE"
    pageNumber:number
}


export const followUnfollowAC = (Userid:string):followUnfollowActionType =>{
    return {type:"FOLLOW_UNFOLLOW",Userid}
}
export const setUsersAC = (users:Array<userType>):setUsersActionType=>{
    return {type:"SET_USERS",users}
}
export const setIsLoadAC = (flag:boolean):setIsLoadActionType=>{
    return{type:"SET_IS_LOAD",flag}
}
export const setTotalUserCountAC = (count:number):setTotalUserCountType=>{
    return{type:"SET_TOTAL_USER_COUNT", count}
}
export const setCurentPageAC = (pageNumber:number):setCurentPageType=>{
    return {type:"SET_CURENT_PAGE",pageNumber}
}


export const getUsersThunkCreator = (curentPage:number,pageSize:number) => async (dispatch:DispatchType)=>{
    try {
        dispatch(setIsLoadAC(true))
        const {items,totalCount} =  await usersAPI.getUsers(curentPage,pageSize);
        dispatch(setUsersAC(items))
        dispatch(setIsLoadAC(false))
        dispatch(setTotalUserCountAC(totalCount))

    }catch(e){
        dispatch(setIsLoadAC(false))
        window.alert(e);
    }
}