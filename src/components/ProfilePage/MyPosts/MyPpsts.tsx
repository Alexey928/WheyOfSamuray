import React from 'react';
import Post from "./Posts/Post";
import AddItemForm from "../../AddItemForm/AddItemForm";
import {AddPostActionType, PostsItem, UpdatePostCreatorType} from "../../../State/Store";
type MyposPropsType = {
    posts:Array<PostsItem>
    addPost:(newPost:string)=>void
}

const MyPpsts = (props: MyposPropsType) => {
    console.log(props)
    return (
        <div>
            <AddItemForm addItem={props.addPost}/>
            <div>
                {props.posts.map((el)=><Post  key={el.id} post={el} />)}
            </div>
        </div>
    );
};

export default MyPpsts;