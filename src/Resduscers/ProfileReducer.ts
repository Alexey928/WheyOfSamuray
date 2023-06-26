import {addNewPostActionType,removePostActionType} from "../ActionCreators/profilePageAC"
import {v1} from "uuid";
import {urlRandomiser} from "../AuxiliaryLogic/tempImgUrlGenerator";


export type PostsItem  = {
    id:string
    avatarURL:string
    time:string
    post:string
};

export type ProfilePageStateType = {
    enteredPostValue:string
    postItems:Array<PostsItem>
}

export  type ActionType  = addNewPostActionType | removePostActionType;


export const profileReducer = (state:ProfilePageStateType,action:ActionType):ProfilePageStateType=>{
    switch (action.type) {
        case "ADD_NEW_POST":
            return {...state,postItems:
                    [...state.postItems,{id:v1(),avatarURL:urlRandomiser(state.postItems),time:"10:00",post:action.newPost}]}
        case "REMOVE_POST":
            return {...state,postItems:state.postItems.filter((p)=>p.id!==action.postID)}

        default:
           return  state

    }
}



