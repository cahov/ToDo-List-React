import {tasksContext, TaskProvider} from "../context/TaskContext"

function TaskList(){
    return(

        <ul>
            <tasksContext.Consumer>
                {({Tasks}) => (
                    Tasks.map((e,i) => {
                        return <li key={i}>{e.contenido}</li> 
                    })
                )}

            </tasksContext.Consumer>

        </ul>
)
}

export {TaskList}