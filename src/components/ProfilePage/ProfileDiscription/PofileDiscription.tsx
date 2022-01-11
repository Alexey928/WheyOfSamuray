import React from 'react';
import style from "./ProfileDiscription.module.css"

const PofileDiscription = () => {
    return (

        <div className={style.profilDiscription}>
            <img className={style.avatar}
                 srcSet={"https://vjoy.cc/wp-content/uploads/2020/10/foto-dlya-avatarki-dlya-parnej-v-vk011.jpg"}/>
            <div className={style.description}>discription</div>
        </div>

    );
};

export default PofileDiscription;