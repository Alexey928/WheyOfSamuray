import axios, {AxiosResponse} from "axios";
import {usersStateType, userType} from "../ActionCreators/usersAC";

const axiosInstanse = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"e5f7a28d-5af7-4c3f-9534-8b1e9889bba1"
    }
})
export const authUserAPI = {
    authMe(){
        return axiosInstanse.get("auth/me").then((response:AxiosResponse)=>response.data)
    }
}
export const usersAPI = {
    getUsers(curentPage:number, pageSize:number){
        return axiosInstanse.get(`users?page=${curentPage}&count=${pageSize}`).then((response:AxiosResponse)=>response.data)
    },
}






export const usersUpdater = async (setUsersIsload:(flag:boolean)=>void,
                                   setUsers:(users:Array<userType>)=>void,
                                   setUserTotalCount:(count:number)=>void,
                                   usersPage:usersStateType)=>{
    let count:number|null=null
    try {
        setUsersIsload(true);
        const {items,totalCount} =  await usersAPI.getUsers(usersPage.curentPage,usersPage.pageSize);
        setUsers(items)
        setUsersIsload(false);
        setUserTotalCount(totalCount)
        count=totalCount
    }catch(e){
        setUsersIsload(false);
        window.alert(e);
    }
    return count
}