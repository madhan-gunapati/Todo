import { useSelector } from "react-redux"

const Display = ()=>{
    const list_of_tasks = useSelector((state)=>state.tasks)
    console.log(list_of_tasks)

    return <div>
        <h1>Not tasks Yet</h1>
    </div>
}

export default Display