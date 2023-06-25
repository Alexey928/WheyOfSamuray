import {PostsItem} from "../State/Store";

export const urlRandomiser = (urls:Array<PostsItem>):string=>{
    const random:number = Math.round((urls.length-1)*Math.random())
    return urls[random].avatarURL
};