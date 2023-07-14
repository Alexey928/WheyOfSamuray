import {addNewPostActionType,removePostActionType} from "../ActionCreators/profilePageAC"
import {v1} from "uuid";
import {urlRandomiser} from "../AuxiliaryLogic/tempImgUrlGenerator";
import {dialogsStateType} from "./dialogsReduser";


export type PostsItem  = {
    id:string
    avatarURL:string
    time:string
    post:string
};

export type ProfilePageStateType = {
    postItems:Array<PostsItem>
}

export  type ActionType  = addNewPostActionType | removePostActionType;

const initialProfileState:ProfilePageStateType  ={postItems:[]};


export const profileReducer = (state:ProfilePageStateType = initialProfileState,action:ActionType):ProfilePageStateType=>{
    switch (action.type) {
        case "ADD_NEW_POST":
            return {...state,postItems:
                    [...state.postItems,{id:v1(),avatarURL:urlRandomiser(),time:"10:00",post:action.newPost}]}
        case "REMOVE_POST":
            return {...state,postItems:state.postItems.filter((p)=>p.id!==action.postID)}

        default:
           return  state

    }
}



