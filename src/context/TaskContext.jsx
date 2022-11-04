import{ React, createContext, useState} from "react"
import { useLocalStorage } from "../components/useLocalStorage"
const tasksContext = createContext()



function TaskProvider(props){

    const [Tasks, setTasks] = useLocalStorage("Localttv2", [])


    return(
        <tasksContext.Provider value = {{Tasks, setTasks}}>
            {props.children}
        </tasksContext.Provider>
    )
}

export {tasksContext, TaskProvider}