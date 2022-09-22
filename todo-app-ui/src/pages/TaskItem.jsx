import React, { useState } from 'react';
import { createRef } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const TaskItem = () => {
    const [nameValue, setNameValue] = useState("")
    const [completedValue, setCompletedValue] = useState(false)
    const [successText,setSuccesText] = useState("")
    const { id } = useParams()
    useEffect(() => {
        fetch("http://localhost:8080/api/" + id)
            .then(task => task.json())
            .then(task => {
                setNameValue(task.name)
                setCompletedValue(task.completed)
            })
    }, [id])
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/api/" + id, {
            method: "PUT",
            body: JSON.stringify({
                name:nameValue ,
                completed:completedValue
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        setSuccesText("Edit successful")
        setTimeout(() => {
            setSuccesText("")
        }, 3000);
    }
    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.type==="checkbox" ? e.target.checked : e.target.value
        name === "nameValue" ? setNameValue(value) : setCompletedValue(value)
    }
    return (
        <div className='singleTask home'>
            <div className="singleTaskContainer">
                <h1 className='homeTitle editTitle'>Edit Task</h1>
                <p className="singleTaskDetail">
                    <span className='taskItemLabel'>Task ID</span>
                    <span>{id}</span>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="singleTaskDetail">
                        <label htmlFor="name" className='taskItemLabel'>Name</label>
                        <input type="text" name='nameValue' value={nameValue} onChange={handleChange} />
                    </div>
                    <div className="singleTaskDetail">
                        <label htmlFor="completed" className='taskItemLabel'>Completed</label>
                        <input type="checkbox" name='completedValue' id="completed" checked={completedValue} onChange={handleChange} />
                    </div>
                    <button type='submit' className='editBtnSubmit'>Edit</button>
                </form>
                <p className='successText'>{successText}</p>
            </div>
            <div>
                <Link to="/" className='backLink'>Back To Tasks</Link>
            </div>
        </div>
    );
};

export default TaskItem;