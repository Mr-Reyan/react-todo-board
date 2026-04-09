import React, { useState, useContext, useReducer } from 'react'
import { allTasksContext } from './context/context'


function AddTask({openAddTask}) {

    const { allTasks, setAllTasks } = useContext(allTasksContext)

    const [task, setTask] = useState({ id: Date.now() ,title: "", desc: "", status: "todo" })

    const onChange = (e) => {

        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!task.title.trim()) return; 
        setAllTasks(prevTasks => [...prevTasks, task])
        setTask({ id: Date.now(), title: "", desc: "", status: "todo" })
        openAddTask(null)
    }

    return (
        <>
            <div className="add-task-overlay">

                <form className='add-task-form' onSubmit={handleSubmit}>
                    <button className='close-btn' type='button' onClick={()=>openAddTask(null)}>X</button>
                    <input className='task-title' onChange={onChange} type="text" name="title" id="title" placeholder='Title' required value={task.title} />
                    <textarea className='task-desc' onChange={onChange} type="text" name="desc" id="desc" placeholder='Description (optional)' value={task.desc} ></textarea>
                    <input className='add-task-btn btn' type="submit" name="submit" id="submit" value="Add Task" />
                </form>
            </div>
        </>
    )
}

export default AddTask

