import {v1} from "uuid";

export type DialogsItem = {
    user:string
    target:string
    mesege:string
};
export type PostsItem  = {
    id:string
    avatarURL:string
    tyme:string

}
export type storType ={
    dialogs:Array<DialogsItem>
    posta:Array<PostsItem>
}


export const store:storType = {
    dialogs:[
        {user:"вася",target:"1",mesege:"lkaklsma;m;ma"},
        {user:"Aася",target:"2",mesege:"kzzzzma;lkaklsma;m;ma"},
        {user:"Крася",target:"3",mesege:"kzzzzma;a"},
        {user:"Мася",target:"4",mesege:"kzzzzma;lkaklsma;m;ma"},
        {user:"Сяся",target:"5",mesege:"kzzzzma;lkaklsma;m;ma"},
    ],
    posta:[
         {id:v1(),
         avatarURL:"https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png",
         tyme:"11:20"},
        // :))

        {id:v1(),avatarURL:"https://russia-dropshipping.ru/800/600/https/proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-22.jpg",tyme:"11:20"},
        {id:v1(),avatarURL:"https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma.jpg",tyme:"11:20"},
        {id:v1(),avatarURL:"https://www.meme-arsenal.com/memes/9bb114f1b7db21ba4c66d77ab08f6cf1.jpg",tyme:"11:20"},
    ],

}