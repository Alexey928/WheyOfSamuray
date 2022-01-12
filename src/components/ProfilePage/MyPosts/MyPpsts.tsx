import React from 'react';
import Post from "./Posts/Post";
import AddPost from "./AddPsost/AddPost";

const MyPpsts = () => {
    return (
        <div>
            <AddPost/>
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPpsts;