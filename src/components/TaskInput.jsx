import {tasksContext} from "../context/TaskContext"

function TaskInput(){
    return(
    <tasksContext.Consumer>{
        ({AddTask}) => {
            return (
                <form>
                    <input type="text" id="texto" />
                    <button onClick={(e) => {
                        e.preventDefault()
                        AddTask(document.getElementById("texto").value)
                    }}>+</button>
                </form>
            )
        }
        }
    </tasksContext.Consumer>
    )
}

export {TaskInput}