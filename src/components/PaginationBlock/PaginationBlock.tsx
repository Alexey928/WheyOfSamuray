import React from 'react';

export type paginationPropsType= {
    pagesCount:number
    curentPage:number
}


const PaginationBlock = (props:paginationPropsType) => {

    console.log(props.pagesCount)
    const fulRange:Array<number> = []
    const firstButons:Array<number> = [];
    const lastButtons:Array<number> = [];




    return (
        <div>
            <span style={{backgroundColor:"red",marginLeft:5,marginTop:3}}>{"<<"}</span>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            ...
            <button>perLast</button>
            <button>last</button>
            <span style={{backgroundColor:"red",marginLeft:5,marginTop:3}}>{">>"}</span>
        </div>
    );
};

export default PaginationBlock;