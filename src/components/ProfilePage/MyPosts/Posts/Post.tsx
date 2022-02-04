import React from 'react';
import style from "./Post.module.css"
import {PostsItem} from "../../../../State/Store";
type PostPropsType = {
    post:PostsItem
}

const Post = (props:PostPropsType) => {
    return (
        <div className={style.message}>
            <img src={props.post.avatarURL}/>
            <div className={style.MesegeContentWraper}>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores ducimus exercitationem id laudantium maxime molestiae non quaerat qui! Animi asperiores assumenda, corporis, inventore ipsa maiores modi nemo, nesciunt obcaecati optio pariatur porro possimus quos ratione rem rerum sequi veritatis voluptate! Aut cum fuga ipsa ipsam laborum maxime, nesciunt nisi.
                <div className={style.time}>{props.post.tyme}</div>
                <div className={style.userName}>MtheFacer</div>
            </div>

        </div>
    );
};

export default Post;