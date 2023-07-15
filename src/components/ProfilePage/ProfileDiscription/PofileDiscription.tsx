import React from 'react';
import style from "./ProfileDiscription.module.css"
import {profileDataType} from "../../../Resduscers/ProfileReducer";
import avatar from "../../../asets/avatar.jpg"

type profileDescriptionType = {
    profileData:profileDataType|null
}
const PofileDiscription = (props:profileDescriptionType) => {
    return (
        <div >
            <div>Myposts</div>
            <div className={style.profilDiscription}>
                <img className={style.avatar} src={props.profileData?.photos.large||avatar}/>
                <div className={style.description}>{props.profileData?.aboutMe||"About mee"}</div>
                
            </div>
        </div>
    );
};

export default PofileDiscription;