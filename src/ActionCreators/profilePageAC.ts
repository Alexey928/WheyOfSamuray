import {profileDataType} from "../Resduscers/ProfileReducer";

export  type addNewPostActionType = {
    type:"ADD_NEW_POST"
    newPost:string
};
export type removePostActionType = {
    type:"REMOVE_POST"
    postID:string
}
export type updateEnteredPostValueActionType = {
    type:"UPDATE_ENTERED_POST"
    currentValue:string
}
export type setProfileDataActionType = {
    type:'SET_PROFILE_DATA'
    data:profileDataType
}

export const addPostAC = (newPost:string):addNewPostActionType=>{
  return   {type:"ADD_NEW_POST",newPost};
}
export const remuveNewPostAC = (postID:string):removePostActionType=>{
    return {type:"REMOVE_POST",postID}
}
export const updateEnteredPostsValueAC = (currentValue:string):updateEnteredPostValueActionType=>{
    return {type:"UPDATE_ENTERED_POST",currentValue}
}
export const setProfileDataAC = (data:profileDataType):setProfileDataActionType=>{
 return {type:'SET_PROFILE_DATA', data}
}
