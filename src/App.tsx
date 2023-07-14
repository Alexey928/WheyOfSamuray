import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./State/reduxStore";
import {addPostAC, remuveNewPostAC} from "./ActionCreators/profilePageAC"
import {addDialogAC, remuveDialogAC} from "./ActionCreators/dialogsPageAC"
import Users from "./components/Users/Users";
import {
    followUnfollowAC, setCurentPageAC,
    setIsLoadAC,
    setTotalUserCountAC,
    setUsersAC,
    userType
} from "./ActionCreators/usersAC";
import {dialogsStateType} from "./Resduscers/dialogsReduser";
import {ProfilePageStateType} from "./Resduscers/ProfileReducer";

const App = ()=>{

    const profilePage  = useSelector<AppRootStateType ,ProfilePageStateType>(state => state.profilePage)
    const dialogsPage = useSelector<AppRootStateType,dialogsStateType>(state => state.dialogsPage)
    const dispatch = useDispatch();
    //profilePage calbaks
    const addPost = (newPost:string)=>{
        dispatch(addPostAC(newPost));
    }
    const remuvePost =(postID:string)=>{
        dispatch(remuveNewPostAC(postID))
    }
    //dialogPage colbacks
    const addDialog = (newDialog:string)=>{
        dispatch(addDialogAC(newDialog))
    }
   const removeDialog = (dialogID:string)=>{
        dispatch(remuveDialogAC(dialogID))
   }
   //userPage colbacks
   const followUnfolowUser = (usreID:string)=>{
        dispatch(followUnfollowAC(usreID))
   }
   const setUsers = (users:Array<userType>)=>{
        dispatch(setUsersAC(users))
   }
   const setUsersIsload = (flaf:boolean)=>{
        dispatch(setIsLoadAC(flaf))
   }
   const setUserTotalCount = (count:number)=>{
        dispatch(setTotalUserCountAC(count))
   }
    const setCurentPage = (pageNumber:number)=>{
        dispatch(setCurentPageAC(pageNumber))
    }




    console.log("app is coled")
    return(
        <Router>
            <div className={"app-wraper"} >
                <Header logo={"https://w7.pngwing.com/pngs/705/877/png-transparent-house-painter-and-decorator-building-home-highways-poster-banner-background-building-text-logo.png"}/>
                <Navigation/>
                <Routes>
                    <Route  path = {""} element={<ProfilePage
                                                              addPost={addPost}
                                                              posts = {profilePage.postItems}
                                                              removePost={remuvePost}

                        />
                    }/>
                    <Route path = {"/DialogesPage/*"} element={<DialogsPage addDialog={addDialog}
                                                                            dialogItems = {dialogsPage.dialogs}
                                                                            removeDialog={removeDialog}
                    />
                    }/>

                    <Route path = {"/Users/*"} element={<Users setUsers={setUsers}
                                                               followUnfolowUser={followUnfolowUser}
                                                               setUsersIsload={setUsersIsload}
                                                               setUserTotalCount={setUserTotalCount}
                                                               setCurentPage={setCurentPage}
                    />}/>
                </Routes>
            </div>
        </Router>
    )
}
export default App;
