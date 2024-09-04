const Task = (props) => {
    return (
        <div className="Tasks">
            <h1
            style={{color:props.complete?"lightgreen":"black"}}
            >{props.taskname}</h1>
            <div className="btns">
             <button id="del" onClick={() => props. DeleteTask(props.id)} >
                <i className="fas fa-trash"></i>
             </button>
             <button id="com" onClick={()=>props.CompleteTask(props.id)}>
             <i className="fas fa-check"></i>
             </button>
            </div>
             </div>
    )
}
export default Task