import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
type DialigItemPropsType = {
    user:string
    target:string
}
const DialigsItem:React.FC<DialigItemPropsType> = ({user,target}) => {
    const location  = useLocation()
    console.log(location)
    return (
        <div>
            <NavLink to={`/DialogesPage/${target}`}>{user}</NavLink>
        </div>

    );
};

export default DialigsItem;