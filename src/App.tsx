import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import MainContent from "./MainContent/MainContent";


function App() {
    return (
        <div className={"app-wraper"}>
            <Header/>
            <Navigation/>
            <MainContent/>
        </div>
    );
}

export default App;
