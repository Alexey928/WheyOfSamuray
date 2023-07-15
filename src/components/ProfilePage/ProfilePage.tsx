import React, {useEffect} from 'react';
import style from "./ProfilePage.module.css"
import PofileDiscription from "./ProfileDiscription/PofileDiscription";
import MyPpsts from "./MyPosts/MyPpsts";
import {profileDataType, ProfilePageStateType} from "../../Resduscers/ProfileReducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../State/reduxStore";
import {useParams} from "react-router-dom";
import axios, {AxiosResponse} from "axios";

type ProfilePageType = {
    addPost:(newPost:string)=>void
    removePost:(postID:string)=>void
    setProfileData:(data:profileDataType)=>void
}

function ProfilePage(props:ProfilePageType){
    const profilePage  = useSelector<AppRootStateType ,ProfilePageStateType>(state => state.profilePage)

    const myProfileID = 2//пока так )
    const id  = useParams<'*'>();
    const userID = Number(id["*"])?Number(id["*"]):myProfileID


useEffect(()=>{
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
        .then((response:AxiosResponse) => {
            console.log(response.data);
            props.setProfileData(response.data);

        });



},[])
    return(
        <div className={style.content}>
            <>
                <div className={style.contentHeder}><span>Profile page</span></div>
                <PofileDiscription profileData={profilePage.profileData}/>
                <MyPpsts removePost={props.removePost} addPost={props.addPost} posts = {profilePage.postItems}/>
            </>
        </div>
    )
}

export  default ProfilePage;