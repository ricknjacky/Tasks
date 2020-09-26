import React from 'react';


const validation =(props) => {
    let validationMessage = "text too long";

    if(props.inputLength<=5){
        validationMessage = "text too short";
    }
    
    return(
        <div>
        <p>{validationMessage} </p>
    </div>
    )
}

export default validation;