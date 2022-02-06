import {v1} from "uuid";

// Typing for basic  Data__________________
export type DialogsItem = {
    user:string
    target:string
    message:string
};

export type PostsItem  = {
    id:string
    avatarURL:string
    time:string
    post:string
};

export type StoreType ={
   State: StateType
   addPosts:(post:string)=>void
   subscribe:(subscriber:()=>void)=>void
    _callSubscriber:()=>void
};

export type StateType  = {
    dialogs:Array<DialogsItem>
    posts:Array<PostsItem>

};
//____________________________________________>

export const store:StoreType = {
    State:{
        dialogs:[
            {user:"вася",target:"1",message:"lkaklsma;m;ma"},
            {user:"Aася",target:"2",message:"kzzzzma;lkaklsma;m;ma"},
            {user:"Крася",target:"3",message:"kzzzzma;a"},
            {user:"Мася",target:"4",message:"kzzzzma;lkaklsma;m;ma"},
            {user:"Сяся",target:"5",message:"kzzzzma;lkaklsma;m;ma"},
        ],
        posts:[
            {
                id:v1(),
                avatarURL:"https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png",
                time:"11:20",
                post:"Hi may name Alexey"
            },
            {
                id:v1(),
                avatarURL:"https://russia-dropshipping.ru/800/600/https/proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-22.jpg",
                time:"1:20",
                post:"Hi, may name Alexey"
            },

            {
                id:v1(),
                avatarURL:"https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma.jpg",
                time:"16:20",
                post:"Hi may name Alexey"
            },

            {id:v1(),
                avatarURL:"https://www.meme-arsenal.com/memes/9bb114f1b7db21ba4c66d77ab08f6cf1.jpg",
                time:"17:20",
                post:"Hi may name Alexey"
            },
        ],
    },
    _callSubscriber(){

    },

    subscribe(subscriber){
        this._callSubscriber = subscriber;
    },

    addPosts:function(post){
        console.log(this);
        this.State.posts  = [ {
            id:v1(),
            avatarURL:urlRandomiser(this.State.posts),
            time:"16:20",
            post:post
        },...this.State.posts
        ];
        this._callSubscriber();
    },



}



// To broaden your horizons  --- [для  разширения кругозора]<-- Перевод ______________

export const urlRandomiser = (urls:Array<PostsItem>):string=>{
     const random:number = Math.round((urls.length-1)*Math.random())
     return urls[random].avatarURL
};



//___________________________________________________________________________________>

