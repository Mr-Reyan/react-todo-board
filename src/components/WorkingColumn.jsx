import { useContext } from "react";
import { allTasksContext } from "./context/context";
import { Droppable, Draggable } from "@hello-pangea/dnd";



function WorkingColumn({ tasks, openTask, openEdit }) {

    const { moveTask, deleteTask } = useContext(allTasksContext)


    return (
        <>
            {/* <ul className="working column">
                <h2>WORKING</h2>
                {tasks.map((task) => (

                    <li key={task.id} className="task">
                        <div className="title">{task.title}</div>
                        {task.desc && <div className="desc">{task.desc}</div>}
                        <div className="Taskbtns">
                            <button className="read-btn btn" onClick={() => openTask(task)}>Read</button>
                            <button className="edit-btn btn" onClick={() => openEdit(task)}>Edit</button>
                            <button className="del-btn btn" onClick={() => deleteTask(task.id)}>Delete</button>
                        </div>
                        <button onClick={() => moveTask(task.id, "todo")}>Todo</button>
                        <button onClick={() => moveTask(task.id, "completed")}>Completed</button>
                    </li>
                ))}


            </ul> */}
            <div className="column">
            <h2>In-Progress</h2>

            <Droppable droppableId="working">

                {(provided) => (
                    
                    <ul
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="working column"
                        >
                        {tasks.map((task, index) => (
                            <Draggable
                                key={task.id}
                                draggableId={task.id.toString()}
                                index={index}
                            >

                                {(provided) => (
                                    
                                    <li ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    
                                    className="task"
                                    >
                                        <div className="title">{task.title}</div>
                                        {task.desc && <div className="desc">{task.desc}</div>}
                                        <div className="Taskbtns">
                                            <button className="read-btn btn" onClick={() => openTask(task)}>Read</button>
                                            <button className="edit-btn btn" onClick={() => openEdit(task)}>Edit</button>
                                            <button className="del-btn btn" onClick={() => deleteTask(task.id)}>Delete</button>
                                        </div>
                                        {/* <button onClick={() => moveTask(task.id, "todo")}>todo</button>
                                        <button onClick={() => moveTask(task.id, "completed")}>Completed</button> */}
                                    </li>
                                )}
                            </Draggable>
                        ))}

                        {provided.placeholder}

                    </ul>
                )}
            </Droppable>
            </div>
        </>
    )
}


export default WorkingColumn