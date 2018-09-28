import React from 'react';

const Button = (props) => {
    return (
        <button id={props.id} style={props.style} value={props.value} ref={props.numRef} onClick={props.clicked}>{props.value}</button>
    );
};

export default Button;

