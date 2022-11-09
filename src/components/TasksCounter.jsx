import {tasksContext} from "../context/TaskContext"

function TasksCounter(){
    return (
        <tasksContext.Consumer>
            {({countTasks, countTaskCompleted}) => {
                return <h1>Has completado {countTaskCompleted} de {countTasks} tareas</h1>
            }}
        </tasksContext.Consumer>
    )
}

export {TasksCounter}