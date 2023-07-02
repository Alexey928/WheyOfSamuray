import React from 'react';
import style from "./user.module.css"

const User = () => {
    return (
        <div className={style.userContayner}>
            <img className={style.avatar} src={"https://w7.pngwing.com/pngs/1024/983/png-transparent-albert-einstein-thumbnail.png"}/>
            <div className={style.userContent}>
                <div className={style.name}>Alex</div>
                <div className={style.location}>
                    <div>Ukrain</div>
                    <div>Harkiv</div>
                </div>
                helo i am heare ) kjbdwkjsb kjsdbcksjbdck kjsdbckjsd cksjdbcsudbxc ksjdbclsd cksduclsdbxc
            </div>
        </div>
    );
};

export default User;