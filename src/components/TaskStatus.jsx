import { useContext } from "react"
import { allTasksContext } from "./context/context"
function TaskStatus({todo,working,completed, setAddTask}){
    const {allTasks} = useContext(allTasksContext)
    return (
        <>
        <div className="task-status">
                    <button className='add-task-btn btn' onClick={()=>setAddTask(1)}>Add Task</button>
                    <p>
                        Total Tasks: {allTasks.length}
                    </p>
                    <p>
                        Todo: {todo.length}
                    </p>
                    <p>
                        Working: {working.length}
                    </p>
                    <p>
                        Completed: {completed.length}
                    </p>
                </div>
        </>
    )
}

export default TaskStatus