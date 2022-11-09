import{ React, createContext, useState} from "react"
import { useLocalStorage } from "../components/useLocalStorage"
const tasksContext = createContext()



function TaskProvider(props){

    const [Tasks, setTasks] = useLocalStorage("Localttv2", [])
    const [countTasks, setCountTasks] = useState(Tasks.length)
    const [countTaskCompleted, setCountTaskCompleted] = useState((Tasks.filter(task => task.estado == true)).length)

    return(
        <tasksContext.Provider value = {{Tasks, setTasks, countTasks, setCountTasks, countTaskCompleted, setCountTaskCompleted}}>
            {props.children}
        </tasksContext.Provider>
    )
}

export {tasksContext, TaskProvider}