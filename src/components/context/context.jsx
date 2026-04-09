import { createContext, useState, useEffect } from 'react'

export const allTasksContext = createContext()

export const AllTasksProvider = ({ children }) => {

    const [allTasks, setAllTasks] = useState(() => {
        const savedTasks = localStorage.getItem('allTasks')
        if (savedTasks) {
            return JSON.parse(savedTasks)
        } else {
            return []
        }
    })


    const deleteTask = (id) => {

        const updatedTasks = allTasks.filter(task => task.id !== id);
        setAllTasks(updatedTasks);
            

    };

    useEffect(() => {
        localStorage.setItem('allTasks', JSON.stringify(allTasks))
    }, [allTasks])

    const moveTask = (clickedId, newStatus) => {
        setAllTasks(prevTasks =>
            prevTasks.map(task => {

                if (task.id === clickedId) {
                    return { ...task, status: newStatus }
                } else {
                    return task
                }
            }
            )
        )
    }







    return (
        <allTasksContext.Provider value={{ allTasks, setAllTasks, moveTask, deleteTask }}>
            {children}
        </allTasksContext.Provider>
    )
}

