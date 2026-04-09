import React, { useEffect, useState, useContext } from 'react'
import AddTask from './AddTask'
import './Home.css'
import { DragDropContext } from 'react-beautiful-dnd'
import { allTasksContext } from './context/context'
import TodoColumn from './TodoColumn'
import WorkingColumn from "./WorkingColumn";
import CompletedColumn from "./CompletedColumn";
import ReadTask from './ReadTask'
import TaskStatus from './TaskStatus'
import EditTask from './EditTask'



function Home() {
    const { allTasks, setAllTasks } = useContext(allTasksContext)
    const [addTask, setAddTask] = useState(null)
    const [selectedTask, setSelectedTask] = useState(null)
    const [edit, setEdit] = useState(null)

    const handleDragEnd = (result) => {

        
    const { destination, draggableId } = result
   
    if (!destination) return

    const updatedTasks = allTasks.map(task => {
        if (task.id.toString() === draggableId) {
            return { ...task, status: destination.droppableId }
        }
        return task
    })

    setAllTasks(updatedTasks)
    localStorage.setItem("allTasks", JSON.stringify(updatedTasks))
}


const todoTasks = allTasks.filter(task => task.status === "todo")
const workingTasks = allTasks.filter(task => task.status === "working")
const completedTasks = allTasks.filter(task => task.status === "completed")



    return (
        <>

            {addTask &&
                <AddTask openAddTask={setAddTask}/>
            }
            {selectedTask && 
                <ReadTask openTask={setSelectedTask} task={selectedTask} />
            }
            {edit &&
            <EditTask openEdit={setEdit} task={edit}/>
            }

            <div className="app-heading">TODO APP</div>
            <div className='home-body'>

            <DragDropContext onDragEnd={handleDragEnd}>

                <div className="columns">

                    <TodoColumn tasks={todoTasks} openTask={setSelectedTask} openEdit={setEdit}/>
                    <WorkingColumn tasks={workingTasks} openTask={setSelectedTask} openEdit={setEdit}/>
                    <CompletedColumn tasks={completedTasks} openTask={setSelectedTask} openEdit={setEdit}/>

                </div>
            </DragDropContext>
                <TaskStatus todo={todoTasks} working={workingTasks} completed={completedTasks} setAddTask={setAddTask}/>
            </div>
        </>
    )
}

export default Home