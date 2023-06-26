
 export  type addNewPostActionType = {
    type:"ADD_NEW_POST"
    newPost:string
};
export type removePostActionType = {
    type:"REMOVE_POST"
    postID:string
}

export type updateEnteredPostValue = {

}

export const addPostAC = (newPost:string):addNewPostActionType=>{
  return   {type:"ADD_NEW_POST",newPost};
}
export const remuveNewPost = (postID:string):removePostActionType=>{
    return {type:"REMOVE_POST",postID}
}

