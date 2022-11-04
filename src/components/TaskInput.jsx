import {tasksContext} from "../context/TaskContext"

function TaskInput(){
    return(
    <tasksContext.Consumer>{
        ({Tasks, setTasks}) => {
            return (
                <form>
                    <input type="text" id="texto" />
                    <button onClick={(e) => {
                        e.preventDefault()
                        setTasks([...Tasks,{
                            contenido: document.getElementById("texto").value,
                            estado: false
                        }])
                    }}>+</button>
                </form>
            )
        }
        }
    </tasksContext.Consumer>
    )
}

export {TaskInput}