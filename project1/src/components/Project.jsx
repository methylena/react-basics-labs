import React from 'react';

const Task = (props) => {
    

    
    return (
        <div className='card'>
        <p className='title'>{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p>{props.description}</p>
        <p>{props.children}</p>
        <p className='task-priority'>{props.priority}</p>
        </div>
    )
}

export default Task;
