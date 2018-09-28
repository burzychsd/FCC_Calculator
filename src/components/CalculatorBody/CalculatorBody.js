import React from 'react';

const CalculatorBody = (props) => {
    return (
        <div id="calculator-body" className="w-90 flex flex-column justify-between pa3">
        {props.children}
        </div>
    );
};

export default CalculatorBody;
