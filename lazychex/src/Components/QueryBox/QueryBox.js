import './QueryBox.css';
import React from 'react';

function QueryBox(props)
{
    return (
        <div className = 'QueryBox'>
            <h1>{props.fileContent}</h1>
        </div>
    );
}

export default QueryBox;