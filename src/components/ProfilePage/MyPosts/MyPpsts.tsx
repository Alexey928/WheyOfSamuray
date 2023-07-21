import React from 'react';
import Post from "./Posts/Post";
import AddItemForm from "../../AddItemForm/AddItemForm";
import {PostsItem} from "../../../State/Store";
type MyposPropsType = {
    posts:Array<PostsItem>
    addPost:(newPost:string)=>void
    removePost:(postID:string)=>void
}

const MyPpsts = (props: MyposPropsType) => {
    console.log(props)
    return (
        <div>
            <div style={{paddingTop:80}}>

            </div>
            <AddItemForm addItem={props.addPost}/>
            <div>
                {props.posts.map((el)=><Post removePost={()=>props.removePost(el.id)} key={el.id} post={el}/>)}
            </div>
        </div>
    );
};

export default MyPpsts;