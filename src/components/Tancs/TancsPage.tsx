import React from 'react';
import style from "./Tanks.module.css"
import Tank from "./Tank";

const TanksPage = () => {
    return (
        <div className={style.content} >
            <div className={style.contentHeader}><span>Tank fuel level</span></div>
            <div className={style.contentWrapper}>
                <Tank/>
                <Tank/>
                <Tank/>
                <Tank/>
            </div>
        </div>
    );
};

export default TanksPage;