import React from 'react';

const Project = (props) => {
    
    return (
        <div className='card'>
        <p className='title'>{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p>{props.children}</p>
        </div>
    )
}

export default Project;
