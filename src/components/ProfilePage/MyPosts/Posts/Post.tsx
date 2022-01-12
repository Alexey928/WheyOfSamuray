import React from 'react';
import style from "./Post.module.css"

const Post = () => {
    return (
        <div className={style.message}>
            <img src={"https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png"}/>
            <div className={style.MesegeContentWraper}>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores ducimus exercitationem id laudantium maxime molestiae non quaerat qui! Animi asperiores assumenda, corporis, inventore ipsa maiores modi nemo, nesciunt obcaecati optio pariatur porro possimus quos ratione rem rerum sequi veritatis voluptate! Aut cum fuga ipsa ipsam laborum maxime, nesciunt nisi.
                <div className={style.time}>11:22</div>
                <div className={style.userName}>MtheFacer</div>
            </div>

        </div>
    );
};

export default Post;