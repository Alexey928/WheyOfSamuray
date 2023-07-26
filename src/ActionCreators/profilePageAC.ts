import {profileDataType} from "../Resduscers/ProfileReducer";
import {DispatchType} from "../State/reduxStore";
import {setIsRequestProcessingStatusAC} from "../ActionCreators/authUserAC"
import {profileApi} from "../API/dalAPI";

export  type addNewPostActionType = {
    type:"ADD_NEW_POST"
    newPost:string
};
export type removePostActionType = {
    type:"REMOVE_POST"
    postID:string
}
export type setProfileDataActionType = {
    type:'SET_PROFILE_DATA'
    data:profileDataType
}
export type setIsLoadActionType = {
    type:"SET-REQUST-PROCESSING-STATUS"
    flag:boolean
}

export const addPostAC = (newPost:string):addNewPostActionType=>{
  return   {type:"ADD_NEW_POST",newPost};
}
export const remuveNewPostAC = (postID:string):removePostActionType=>{
    return {type:"REMOVE_POST",postID}
}
// export const updateEnteredPostsValueAC = (currentValue:string):updateEnteredPostValueActionType=>{
//     return {type:"UPDATE_ENTERED_POST",currentValue}
// }

// export const setIsLoadAC = (flag:boolean):setIsLoadActionType=>{
//     return{type:"SET_IS_LOAD",flag}
// }

export const setProfileDataAC = (data:profileDataType):setProfileDataActionType=>{
 return {type:'SET_PROFILE_DATA', data}
}

export const updateUserProfileDataTC = (id:number) => async (dispatch:DispatchType)=>{
    dispatch(setIsRequestProcessingStatusAC(true));
try {
    const data:profileDataType = await profileApi.getUserProfile(id);
   dispatch(setProfileDataAC(data))
    console.log(data)
}catch (e) {
    console.log(e)
}finally {
    dispatch(setIsRequestProcessingStatusAC(false));
}
}