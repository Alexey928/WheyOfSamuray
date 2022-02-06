import React from 'react';
type AddPostPropsType  = {
    addPosts:(post:string)=>void
}

 const AddPost = (props:AddPostPropsType) => {

     const textereaNode  = React.createRef<HTMLTextAreaElement>();


     //const addTas =  props.addPosts.bind()
     //   const text = textereaNode.current?.value;//
     //    console.log(text);
     //    props.addPosts(text?text:"!!!")


      return (
        <>
            <textarea ref={textereaNode} />
            <button onClick={()=>{
                const text = textereaNode.current?.value;
                props.addPosts(text?text:"!!!")
            } }>Add</button>
        </>
    );
};

export default AddPost;