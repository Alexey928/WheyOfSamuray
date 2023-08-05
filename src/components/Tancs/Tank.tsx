import React from 'react';
import style from "./Tank.module.css"

const Tank = () => {
    return (
        <div className={style.glass}>
            <div className={style.inner}>
                <div className={style.tankDescription}>
                    <span>Level</span><span>1200</span>
                </div>
                <div className={style.liquid}></div>
            </div>
            
        </div>
    );
};

export default Tank;