import React from 'react';
import style from "./user.module.css"

const User = () => {
    return (
        <div className={style.userContayner}>
               <div>
                   <img alt={"img"} className={style.avatar} src={"https://static6.tgstat.ru/channels/_0/25/25824776e87d56e44c2030701da30596.jpg"}/>
                   <button>follow</button>
               </div>

               <div className={style.userContent}>
                   <div className={style.name}>Alex</div>
                   <div className={style.location}>
                       <div>Ukraine</div>
                       <div>Harkiv</div>
                   </div>
                   helo i am heare
               </div>
           </div>
    );
};

export default User;