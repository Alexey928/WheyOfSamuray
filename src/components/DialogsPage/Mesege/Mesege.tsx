import React from 'react';
type MesegePropsType = {
    mesege:string
}
const Mesege:React.FC<MesegePropsType> = ({mesege}) => {
    return (
        <div>
            {mesege}
        </div>
    );
};

export default Mesege;