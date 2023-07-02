import {followUnfollowActionType, usersStateType} from "../ActionCreators/usersAC";
import {v1} from "uuid";


const initialState:usersStateType = {users:[
        {
            id:v1(),
            isFollow:true,
            fullName:"Alex",
            status:"i wont to bee a fullstac",
            avatar:"https://static6.tgstat.ru/channels/_0/25/25824776e87d56e44c2030701da30596.jpg",
            location:{city:"Kharkiv",country:"Ukraine"}
        },
        {
            id:v1(),
            isFollow:true,
            fullName:"Alex",
            status:"i wont to bee a fullstac",
            avatar:"https://static6.tgstat.ru/channels/_0/25/25824776e87d56e44c2030701da30596.jpg",
            location:{city:"Kharkiv",country:"Ukraine"}
        },
        {
            id:v1(),
            isFollow:true,
            fullName:"Alex",
            status:"i wont to bee a fullstac",
            avatar:"https://static6.tgstat.ru/channels/_0/25/25824776e87d56e44c2030701da30596.jpg",
            location:{city:"Kharkiv",country:"Ukraine"}
        },
    ]}




export const userReducer = (state=initialState, action:followUnfollowActionType):usersStateType=>{
    switch (action.type) {
        case "FOLLOW_UNFOLLOW":
            return {users:state.users.map((user)=>action.Userid===user.id?
                    {...user,isFollow:!user.isFollow}:user)}
        default:
            return state
    }
}

