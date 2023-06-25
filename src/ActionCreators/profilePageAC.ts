
 export  type addNewPostActionType = {
    type:"ADD_NEW_POST"
    newPost:string
};
export type removePost = {
    type:"REMOVE_NEW_POST"
    postID:string
}

export const addPostAC = (newPost:string):addNewPostActionType=>{
  return   {type:"ADD_NEW_POST",newPost};
}
export const remuveNewPost = (postID:string):removePost=>{
    return {type:"REMOVE_NEW_POST",postID}
}

