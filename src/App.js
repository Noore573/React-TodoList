import { useState } from "react";
// import "./App.css"
import "./style.css"
import Task from "./Tasks";
function App() {
  const [todolist, setTODOlist] = useState([]);
  const [newTask, setNewTask] = useState("")

  const HandleChange = (e) => { setNewTask(e.target.value) }
  const addtask = () => {
    const task = {
      id: todolist.length == 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskname: newTask,
      complete: false
    }
    // method 1
    // const newtodolist=[...todolist,newTask]
    // setTODOlist(newtodolist)

    // method 2
    setTODOlist([...todolist, task])
  }
  const DeleteTask = (tid) => {

    // filter function in javascript
    // const arr=["noore","moh","ahmad"]
    // const newarr=arr.filter((name)=>{
    //   name=="noore"?console.log("True"):console.log("false");
    // })

    const newtodolist = todolist.filter((task) => task.id !== tid)
    setTODOlist(newtodolist)
  }
  const CompleteTask = (id) => {
    setTODOlist(todolist.map((task) => {

      if (task.id == id) { return { ...task, complete: true } }
      else { return task }
    })
    )
  }
  return (
    <div className="App">
      <div id="top"><div id="circle"></div></div>
      <div className="container">
        <div id="side"></div>
        <div id="middle">
          <div className="list">
            {todolist.map((task) => {
              return <Task taskname={task.taskname} id={task.id} DeleteTask={DeleteTask} CompleteTask={CompleteTask} complete={task.complete} ></Task>
            })}
          </div>
          <div className="addtask">
            <input onChange={HandleChange}></input>
            <button onClick={addtask}>Add</button>
          </div>
        </div>
      </div>

    </div>


    // <div className="App">

    //   <div id="top"><div id="circle"> </div></div>
    //   <div id="side"></div>
    //   <div id="bottom"></div>
    // <div className="addtask">
    //   <input onChange={HandleChange}></input>
    //   <button onClick={addtask}>Add task</button>
    // </div>

    // <div className="list">
    //   {todolist.map((task) => {
    //     return <Task taskname={task.taskname} id={task.id} DeleteTask={DeleteTask} CompleteTask={CompleteTask} complete={task.complete} ></Task>
    //   })}
    // </div>
    // </div>
  )
}

export default App;
