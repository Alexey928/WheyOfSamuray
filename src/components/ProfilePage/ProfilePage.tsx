import React from 'react';
import style from "./ProfilePage.module.css"
import PofileDiscription from "./ProfileDiscription/PofileDiscription";
import MyPpsts from "./MyPosts/MyPpsts";
import {AddPostActionType, PostsItem, UpdatePostCreatorType} from "../../State/Store";

type ProfilePostType = {
    posts:Array<PostsItem>
    addPosts:(post:string)=>void
    dispatch:(action:UpdatePostCreatorType | AddPostActionType)=>void
}

function ProfilePage(props:ProfilePostType){

    return(
        <div className={style.content}>
            <div className={style.contentHeder}><span>Profile page</span></div>
            <PofileDiscription/>
            <MyPpsts dispatch = {props.dispatch} addPosts={props.addPosts} posts = {props.posts}/>
        </div>

    )
}

export  default ProfilePage;