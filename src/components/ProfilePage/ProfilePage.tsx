import React, {useEffect} from 'react';
import style from "./ProfilePage.module.css"
import PofileDiscription from "./ProfileDiscription/PofileDiscription";
import MyPpsts from "./MyPosts/MyPpsts";
import {profileDataType, ProfilePageStateType} from "../../Resduscers/ProfileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../State/reduxStore";
import {useParams} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import Preloader from "../UIcomponets/generalPreloader/Preloader";
import {sestIsMenuActiveAC} from "../../ActionCreators/navigationMenuAC";
import background from "../../asets/1653409714_38-celes-club-p-beskonechnii-fon-dlya-saita-krasivie-39.jpg"
import {updateUserProfileDataTC} from "../../ActionCreators/profilePageAC";


type ProfilePageType = {
    addPost:(newPost:string)=>void
    removePost:(postID:string)=>void
    setProfileData:(data:profileDataType)=>void
    setProfileIsLoad:(flag:boolean)=>void
}

function ProfilePage(props:ProfilePageType){
    const profilePage  = useSelector<AppRootStateType ,ProfilePageStateType>(state => state.profilePage);

    const myProfileID = 2//пока так )
    const id  = useParams<'*'>();
    let userID = Number(id["*"])?Number(id["*"]):myProfileID
    const dispatch = useAppDispatch()



useEffect(()=>{
    dispatch(updateUserProfileDataTC(userID))

    },[])
    return(
        <div className={style.content}>
            <button onClick={()=>dispatch(sestIsMenuActiveAC())} className={style.button}>menu</button>
            <div className={style.contentHeder}><span>Profile page</span></div>
            {profilePage.isLoading?<Preloader/>:
            <div style={{backgroundImage:`url(${background})`}} className={style.descriptionAndPostWraper}>
                <PofileDiscription profileData={profilePage.profileData}/>
                <MyPpsts removePost={props.removePost} addPost={props.addPost} posts = {profilePage.postItems}/>
            </div>}
        </div>
    )
}

export  default ProfilePage;