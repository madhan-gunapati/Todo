import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../../state/TaskSlice"

const Home = ()=>{
    const [taskList, changeTask] = useState({task:''})
    const dispatch = useDispatch()
    const changeInputTask = (e)=>{
        changeTask({task:e.target.value})
        
    }
    return <div>
       <form onClick={(e)=>{e.preventDefault()}}>
            <input type="text" value={taskList.task} onChange={changeInputTask} />
            <button type="button" onClick={()=>{dispatch(addTask(taskList.task))}}>Add Task</button>
       </form>
    </div>
}

export default Home