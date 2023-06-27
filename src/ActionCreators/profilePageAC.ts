
export  type addNewPostActionType = {
    type:"ADD_NEW_POST"
    newPost:string
};
export type removePostActionType = {
    type:"REMOVE_POST"
    postID:string
}



export type updateEnteredPostValue = {
    type:"UPDATE_ENTERED_POST"
    currentValue:string

}

export const addPostAC = (newPost:string):addNewPostActionType=>{
  return   {type:"ADD_NEW_POST",newPost};
}
export const remuveNewPostAC = (postID:string):removePostActionType=>{
    return {type:"REMOVE_POST",postID}
}
export const updateEnteredPostsValueAC = (currentValue:string):updateEnteredPostValue=>{
    return {type:"UPDATE_ENTERED_POST",currentValue}
}


