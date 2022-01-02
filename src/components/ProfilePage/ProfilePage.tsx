import React from 'react';
import style from "./ProfilePage.module.css"

function ProfilePage(){

    return(
        <div className={style.content}>
            <div className={style.contentHeder}><span>Profile page</span></div>
            <div className={style.profilDiscription}>
                <img className={style.avatar} srcSet={"https://vjoy.cc/wp-content/uploads/2020/10/foto-dlya-avatarki-dlya-parnej-v-vk011.jpg"}/>
                <div className={style.description}>discription</div>
            </div>
        </div>

    )
}

export  default ProfilePage;