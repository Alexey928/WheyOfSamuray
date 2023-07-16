import axios from "axios";

const axiosInstanse = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"e5f7a28d-5af7-4c3f-9534-8b1e9889bba1"
    }
})
export const usersAPI = {
    getUsers(curentPage:string, pageSize:number){
        return axiosInstanse.get(`users?page=${curentPage}&count=${pageSize}`).then(response=>response.data)
    },


}