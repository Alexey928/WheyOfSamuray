import React from 'react';
import style from "./ProfilePage.module.css"
import PofileDiscription from "./ProfileDiscription/PofileDiscription";
import MyPpsts from "./MyPosts/MyPpsts";
import {PostsItem} from "../../Resduscers/ProfileReducer";

type ProfilePostType = {
    posts:Array<PostsItem>
    addPost:(newPost:string)=>void
    removePost:(postID:string)=>void
}

function ProfilePage(props:ProfilePostType){
    return(
        <div className={style.content}>
            <div className={style.contentHeder}><span>Profile page</span></div>
            <PofileDiscription/>
            <MyPpsts removePost={props.removePost} addPost={props.addPost} posts = {props.posts}/>
        </div>
    )
}

export  default ProfilePage;