import React, {useState, useContext} from "react"
import { allTasksContext } from "./context/context"

function EditTask({openEdit, task}){
    

    const { allTasks, setAllTasks } = useContext(allTasksContext)

    const [title, setTitle] = useState(task.title)
    const [desc, setDesc] = useState(task.desc)

    const updateTask = (e) =>{
        e.preventDefault()
        const updatedTasks = allTasks.map((t)=>{
            if(t.id==task.id){
                return {...t,title:title,desc:desc}
            }
            return t

        })
            setAllTasks(updatedTasks)
            openEdit(null)
        }   
    return(
        <>
            <div className="edit-task-overlay">

                <form onSubmit={updateTask} className='edit-task-form'>
                    <div className="edit-head">
                        <h1>EDIT</h1>
                        <button className='close-btn' type="button" onClick={()=>openEdit(null)}>X</button>
                    </div>
                    <input className='task-title' onChange={(e)=>setTitle(e.target.value)}  type="text" name="title" id="title" placeholder='Title' required defaultValue={task.title} />
                    <textarea className='task-desc' onChange={(e)=>setDesc(e.target.value)} type="text" name="desc" id="desc" placeholder='Description (optional)' defaultValue={task.desc} ></textarea>
                    <input className='add-task-btn btn' type="submit" name="submit" id="submit" value="Edit Task" />
                </form>
            </div>
        </>
    )
}
export default EditTask