import{ React, createContext, useState} from "react"

const tasksContext = createContext()



function TaskProvider(props){
    const [Tasks, setTasks] = useState([{
        contenido: "Hola mundo122",
        estado: false
    }])

    function AddTask(texto){
        console.log(Tasks)
        setTasks([...Tasks,{
            contenido: texto,
            estado: false
        }])
        console.log(Tasks)
    }

    return(
        <tasksContext.Provider value = {{Tasks, setTasks, AddTask}}>
            {props.children}
        </tasksContext.Provider>
    )
}

export {tasksContext, TaskProvider}