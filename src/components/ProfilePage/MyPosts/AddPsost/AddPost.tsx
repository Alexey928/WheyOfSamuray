import React from 'react';
import {

    AddPostActionType,
    updateNewPostActionCreator,
    UpdatePostCreatorType
} from '../../../../State/Store'


type AddPostPropsType  = {
    addPosts:(post:string)=>void
    dispatch:(action:UpdatePostCreatorType | AddPostActionType)=>void
}

 const AddPost = (props:AddPostPropsType) => {

    const textareaNode  = React.createRef<HTMLTextAreaElement>();

     const onClickCoolBack  = ()=>{
         const text = textareaNode.current?.value;
        props.dispatch( updateNewPostActionCreator(text?text:"Ref is Shit!"))
    }

    return (
        <>
            <textarea  ref={textareaNode} />
            <button onClick={onClickCoolBack}>Add</button>
        </>
    );
};

export default AddPost;