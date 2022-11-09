import {tasksContext} from "../context/TaskContext"
import { AiOutlineDeleteColumn } from 'react-icons/ai';

function TaskInput(){
    const handleDeletAll = (e,Tasks, setTasks, countTasks, setCountTasks, setCountTaskCompleted) =>{
        e.preventDefault()
        const newsTasks = [...Tasks]
        newsTasks.length=0
        setTasks(newsTasks)
        setCountTasks(0)
        setCountTaskCompleted(0)
    }
    const handleAddTasks = (e,Tasks, setTasks, countTasks, setCountTasks) => {
        e.preventDefault()
        setTasks([...Tasks,{
            contenido: document.getElementById("texto").value,
            estado: false
        }])
        setCountTasks(countTasks+1)
        document.getElementById("texto").value=""
    }
    return(
    <tasksContext.Consumer>{
        ({Tasks, setTasks, countTasks, setCountTasks, setCountTaskCompleted}) => {
            return (
                <form>
                    <input type="text" id="texto" />
                    <button onClick={(e) => handleAddTasks(e,Tasks, setTasks, countTasks, setCountTasks)}>+</button>
                    <button onClick={(e) => handleDeletAll(e,Tasks, setTasks, countTasks, setCountTasks, setCountTaskCompleted)
                    }><AiOutlineDeleteColumn/></button>
                </form>
            )
        }
        }
    </tasksContext.Consumer>
    )
}

export {TaskInput}