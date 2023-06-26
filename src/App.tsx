import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {AddPostActionType, StateType, UpdatePostCreatorType} from "./State/Store";


// import {store} from "./State/Store"
type AppPropsType  = {
    data:StateType
    addPost:(post:string)=>void
    changePost:(instantaneousValue:string)=>void
    dispatch:(action:UpdatePostCreatorType | AddPostActionType)=>void
}

function App(props:AppPropsType) {



    return (
        <Router>
            <div className={"app-wraper"}>
                <Header logo={"https://w7.pngwing.com/pngs/705/877/png-transparent-house-painter-and-decorator-building-home-highways-poster-banner-background-building-text-logo.png"}/>
                <Navigation/>
                <Routes>
                    <Route  path = {""} element={<ProfilePage dispatch = {props.dispatch}  addPosts = {props.addPost} posts = {props.data.posts}/>  }/>
                    <Route path = {"/DialogesPage/*"} element={<DialogsPage dialogItems = {props.data.dialogs} />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
