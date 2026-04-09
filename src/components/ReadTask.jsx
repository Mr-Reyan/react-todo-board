function ReadTask({openTask,task}){
    return(
        <>
        <div className="read-overlay">
            <div className="read-box">
                <div className="edit-head">
                        <h1>TASK</h1>
                        <button className='close-btn' onClick={()=>openTask(null)}>X</button>
                </div>
                <h1 className="read-title">Title: {task.title}</h1>
                <h2 className="read-desc">Desc: {task.desc}</h2>
            </div>
        </div>
        </>
    )
}

export default ReadTask