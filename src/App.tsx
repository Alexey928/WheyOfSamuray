import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ProfilePage from "./components/ProfilePage/ProfilePage";


function App() {
    return (
        <div className={"app-wraper"}>
            <Header/>
            <Navigation/>
            <ProfilePage/>
        </div>
    );
}

export default App;
