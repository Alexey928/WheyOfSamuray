import {addNewPostActionType,removePost} from "../ActionCreators/profilePageAC"


export type PostsItem  = {
    id:string
    avatarURL:string
    time:string
    post:string
};