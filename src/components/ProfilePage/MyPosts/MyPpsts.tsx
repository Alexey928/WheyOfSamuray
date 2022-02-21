import React from 'react';
import Post from "./Posts/Post";
import AddPost from "./AddPsost/AddPost";
import {AddPostActionType, PostsItem, UpdatePostCreatorType} from "../../../State/Store";
type MyposPropsType = {
    posts:Array<PostsItem>
    addPosts:(post:string)=>void
    dispatch:(action:UpdatePostCreatorType|AddPostActionType)=>void
}

const MyPpsts = (props: MyposPropsType) => {
    console.log(props)
    return (
        <div>
            <AddPost dispatch = {props.dispatch} addPosts = {props.addPosts}/>
            <div>
                {props.posts.map((el)=><Post dispatch = {props.dispatch} key={el.id} post={el} />)}
            </div>
        </div>
    );
};

export default MyPpsts;