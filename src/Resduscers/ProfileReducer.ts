import {addNewPostActionType, removePostActionType, setProfileDataActionType} from "../ActionCreators/profilePageAC"
import {v1} from "uuid";
import {urlRandomiser} from "../AuxiliaryLogic/tempImgUrlGenerator";

export type PostsItemType = {
    id:string
    avatarURL:string
    time:string
    post:string
};
export type profileDataType = {
    aboutMe:string|null
    contacts:{
        facebook:string|null
        website:string|null
        vk:string|null
        twitter:string|null
        instagram:string|null
    }
    fullName:string
    lookingForAJob:boolean|null
    photos:{small:string|null , large:string|null}
    userId:number
}

export type ProfilePageStateType = {
    postItems:Array<PostsItemType>
    profileData:profileDataType|null
    isLoading:boolean,
}

export  type ActionType  = addNewPostActionType |
                           removePostActionType |
                           setProfileDataActionType;

const initialProfileState:ProfilePageStateType  ={postItems:[],profileData:null,isLoading:true};

export const profileReducer = (state:ProfilePageStateType = initialProfileState,action:ActionType):ProfilePageStateType=>{
    switch (action.type) {
        case "ADD_NEW_POST":
            return {...state,postItems:
                    [...state.postItems,{id:v1(),avatarURL:urlRandomiser(),time:"10:00",post:action.newPost}]}
        case "REMOVE_POST":
            return {...state,postItems:state.postItems.filter((p)=>p.id!==action.postID)}
        case "SET_PROFILE_DATA":
            return {...state,profileData:action.data}
        default:
           return  state

    }
}



