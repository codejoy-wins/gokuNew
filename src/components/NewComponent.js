import React from 'react';

function NewComponent(props){
    console.log(props);
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <img src={props.imgUrl} style={{width:"100%"}} alt=""></img>
        </div>
    )
}

export default NewComponent;