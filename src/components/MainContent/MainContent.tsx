import React from 'react';

function MainContent(){

    return(
        <div className={"content"}>
            <div className={"content-heder"}><span>Profile page</span></div>
            <div className={"profil-discription"}>
                <img className={"avatar"} srcSet={"https://vjoy.cc/wp-content/uploads/2020/10/foto-dlya-avatarki-dlya-parnej-v-vk011.jpg"}/>
                <div className={"description"}>Profil + discription</div>
            </div>
        </div>

    )
}
export  default MainContent;