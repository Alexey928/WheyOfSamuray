import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import Mesege from "../Mesege/Mesege";
type DialigItemPropsType = {
    user:string
    target:string
    mesege:string
}
const DialigsItem:React.FC<DialigItemPropsType> = ({user,target,mesege}) => {
    console.log(useLocation())
    return (
        <div>
            <NavLink to={`/DialogesPage/${target}`}>{user}</NavLink>
            <Mesege mesege={mesege}/>
        </div>

    );
};

export default DialigsItem;