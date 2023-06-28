import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./State/reduxStore";
import {addPostAC, remuveNewPostAC, updateEnteredPostsValueAC} from "./ActionCreators/profilePageAC"
import {addDialogAC, remuveDialogAC, updateEnteredDialogValueAC} from "./ActionCreators/dialogsPageAC"


const App = ()=>{
    const { profilePage,dialogsPage} = useSelector<AppRootStateType ,AppRootStateType>(state => state)
    const dispatch = useDispatch();

    const addPost = (newPost:string)=>{
        dispatch(addPostAC(newPost));
    }
    const remuvePost =(postID:string)=>{
        dispatch(remuveNewPostAC(postID))
    }
    const updateNewPostValue = (currentValue:string)=>{
        dispatch(updateEnteredPostsValueAC(currentValue))
    }
    const addDialog = (newDialog:string)=>{
        dispatch(addDialogAC(newDialog))
    }
   const removeDialog = (dialogID:string)=>{
        dispatch(remuveDialogAC(dialogID))
   }

    return(
        <Router>
            <div className={"app-wraper"}>
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

                </Routes>
            </div>

        </Router>
    )
}



export default App;
