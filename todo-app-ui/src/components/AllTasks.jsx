import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const AllTasks = () => {
    const [tasks,setTasks] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/api")
            .then(data => data.json())
            .then(data => {
                setTasks(data)
            })
    }, [tasks])

    const handleDelete = (id) =>{
        fetch("http://localhost:8080/api/"+id,{
            method:"DELETE"
        })
    }
    return (
        <div className='taskContainer'>
            {tasks.map(task => {
                return (
                    <div className="taskItemContainer" key={task._id}>
                        <p className={task.completed ? "done taskName" : "taskName"}>{task.name}</p>
                        <p className="controllersBtn">
                            <Link to={"taskItem/"+task._id}>
                                <span className='editBtn'><i className="ri-edit-line"></i></span>
                            </Link>
                            <span className='deleteBtn' onClick={()=>handleDelete(task._id)}><i className="ri-delete-bin-line"></i></span>
                        </p>
                    </div>
                )
            })}
        </div>
    );
};

export default AllTasks;