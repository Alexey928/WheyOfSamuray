import React from 'react';
import style from "./Post.module.css"
import {AddPostActionType, PostsItem, UpdatePostCreatorType} from "../../../../State/Store";
type PostPropsType = {
    post:PostsItem
    dispatch:(action:UpdatePostCreatorType|AddPostActionType)=>void
}

const Post = (props:PostPropsType) => {



    return (
        <div className={style.message}>
            <img alt={"avatar"} src={props.post.avatarURL}/>
            <div className={style.MasegeContentWrapper}>
                {props.post.post}
                <div className={style.time}>{props.post.time}</div>
                <div className={style.userName}>MtheFacer</div>
                <span className={style.deleteWrapper}>
                    <span className={style.deleteItem}>
                        X
                    </span>
                </span>
            </div>

        </div>
    );
};

export default Post;