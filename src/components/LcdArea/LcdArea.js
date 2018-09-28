import React from 'react';

const LcdArea = (props) => {

    return (
        <div id="lcd-area" className="w-100 flex justify-center items-center">
        	<div id="lcd" className="flex flex-column justify-between items-end ph2 pv1">
        		<p id="calculation">{props.calculation.length > 19 ? props.message : props.calculation}</p>
        		<p id="display">{props.value.length > 14 ? props.message : props.value}</p>
        	</div>
        </div>
    );
};

export default LcdArea;
