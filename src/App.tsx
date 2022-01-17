import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className={"app-wraper"}>

                <Header logo={"https://w7.pngwing.com/pngs/705/877/png-transparent-house-painter-and-decorator-building-home-highways-poster-banner-background-building-text-logo.png"}/>
                <Navigation/>
                <Routes>
                    <Route path={"/ProfilePage"} element={<ProfilePage/>}/>
                    <Route path={"/DialogesPage"} element={<DialogsPage/>}/>

                </Routes>

            </div>
        </Router>
    );
}

export default App;
