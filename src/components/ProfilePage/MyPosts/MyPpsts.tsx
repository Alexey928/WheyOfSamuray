import React from 'react';
import Post from "./Posts/Post";
import AddPost from "./AddPsost/AddPost";
import {PostsItem} from "../../../State/Store";
type MyposPropsType = {
    posts:Array<PostsItem>
    addPosts:(post:string)=>void
}

const MyPpsts = (props: MyposPropsType) => {
    console.log(props)
    return (
        <div>
            <AddPost addPosts = {props.addPosts}/>
            <div>
                {props.posts.map((el)=><Post key={el.id} post={el} />)}
            </div>
        </div>
    );
};

export default MyPpsts;