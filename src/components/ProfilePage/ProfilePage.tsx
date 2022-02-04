import React from 'react';
import style from "./ProfilePage.module.css"
import PofileDiscription from "./ProfileDiscription/PofileDiscription";
import MyPpsts from "./MyPosts/MyPpsts";
import {PostsItem} from "../../State/Store";

type ProfilePostType = {
    posts:Array<PostsItem>
}

function ProfilePage(props:ProfilePostType){

    return(
        <div className={style.content}>
            <div className={style.contentHeder}><span>Profile page</span></div>
            <PofileDiscription/>
            <MyPpsts posts = {props.posts}/>
        </div>

    )
}

export  default ProfilePage;