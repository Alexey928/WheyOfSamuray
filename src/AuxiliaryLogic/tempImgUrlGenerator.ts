import {PostsItem as PostItemType} from "../State/Store";

export const urlRandomiser = (urls:Array<PostItemType>):string=>{
    const random:number = Math.round((urls.length-1)*Math.random())
    return urls[random].avatarURL
};