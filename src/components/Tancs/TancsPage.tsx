import React from 'react';
import style from "./Tanks.module.css"
import Tank from "./Tank";

const TanksPage = () => {
    return (
        <div className={style.content} >
            <div className={style.contentHeader}><span>Tank fuel level</span></div>
            <div className={style.contentWrapper}>
                <div className={style.flexWraper}>
                    <Tank level={50}/>
                    <Tank level={120}/>
                    <Tank level={100}/>
                    <Tank level={150}/>
                    <Tank level={70}/>
                    <Tank level={75}/>
                    <Tank level={150}/>
                    <Tank level={65}/>
                    <Tank level={55}/>
                    <Tank level={55}/>
                    <Tank level={55}/>

                </div>

            </div>
        </div>
    );
};

export default TanksPage;