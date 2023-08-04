import React from 'react';
import style from "./Tanks.module.css"

const TanksPage = () => {
    return (
        <div className={style.content} >
            <div className={style.contentHeader}><span>Tank fuel level</span></div>
        </div>
    );
};

export default TanksPage;