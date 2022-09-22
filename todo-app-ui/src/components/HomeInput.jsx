import React from 'react';
import { createRef } from 'react';

const HomeInput = () => {
    const name = createRef();
    const submitHandler =  (e) =>{
        e.preventDefault();
        const nameValue = name.current.value
         fetch("http://localhost:8080/api",{
            method:"POST",
            body:JSON.stringify({name:nameValue}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
             },
        })
         name.current.value=""  
    }
    return (
        <>
            <h1 className="homeTitle">Task Manager</h1>
            <form className='homeForm' onSubmit={submitHandler}>
                <input type="text" placeholder='Add a task' ref={name}/>
                <button type='submit' className='submitButton'>Submit</button>
            </form>
        </>
    );
};

export default HomeInput;