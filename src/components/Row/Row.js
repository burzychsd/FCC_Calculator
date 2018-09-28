import React from 'react';

const Row = (props) => {
    return (
        <div className={props.classes} style={{ height: '18%' }}>
        {props.children}
        </div>
    );
};

export default Row;
