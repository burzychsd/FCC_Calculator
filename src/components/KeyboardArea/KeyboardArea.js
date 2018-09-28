import React from 'react';

const KeyboardArea = (props) => {
    return (
        <div id="keyboard-area" className="relative flex flex-column justify-between">
        {props.children}
        </div>
    );
};

export default KeyboardArea;
