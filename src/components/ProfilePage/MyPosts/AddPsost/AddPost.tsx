import React from 'react';
type AddPostPropsType  = {
    addPosts:(post:string)=>void
}

 const AddPost = (props:AddPostPropsType) => {

     const textareaNode  = React.createRef<HTMLTextAreaElement>();


     //const addTas =  props.addPosts
     //   const text = textereaNode.current?.value;//
     //    console.log(text);
     //    props.addPosts(text?text:"!!!")


      return (
        <>
            <textarea ref={textareaNode} />
            <button onClick={()=>{
                const text = textareaNode.current?.value;
                props.addPosts(text?text:"!!!")
            } }>Add</button>
        </>
    );
};

export default AddPost;