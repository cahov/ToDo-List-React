import {tasksContext, TaskProvider} from "../context/TaskContext"
import { TbTrashOff } from 'react-icons/Tb';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';



function TaskList(){
    const HandleRemove = (i, Tasks, setTasks, countTasks, setCountTasks, setCountTaskCompleted) =>{
        const newsTasks = [...Tasks]
        newsTasks.splice(i,1)
        setTasks(newsTasks)
        setCountTasks(countTasks-1)
        setCountTaskCompleted((newsTasks.filter(task => task.estado == true)).length)
    }

    const HandleCompleted = (i, Tasks, setTasks, setCountTaskCompleted) => {
        const newsTasks = [...Tasks]
        if (!newsTasks[i].estado){
            newsTasks[i].estado = true
            setCountTaskCompleted((newsTasks.filter(task => task.estado == true)).length)
        }else{
            newsTasks[i].estado = false
            setCountTaskCompleted((newsTasks.filter(task => task.estado == true)).length)
        }
        
        setTasks(newsTasks)
    }
    return(
        <ul>
            <tasksContext.Consumer>
                {({Tasks, setTasks, countTasks, setCountTasks, setCountTaskCompleted}) => (
                    Tasks.map((e,i) => {
                        return <li key={i} className={e.estado ? "completed" : "incompleted"}>
                            {e.estado ? <AiFillCheckCircle onClick={() => HandleCompleted(i, Tasks, setTasks, setCountTaskCompleted)}/> :<AiOutlineCheckCircle onClick={() => HandleCompleted(i, Tasks, setTasks, setCountTaskCompleted)}/>}
                             {e.contenido} 
                             <TbTrashOff onClick={() => HandleRemove(i, Tasks, setTasks, countTasks, setCountTasks, setCountTaskCompleted)}/>
                             </li> 
                    })
                )}
            </tasksContext.Consumer>
        </ul>
)
}

export {TaskList}