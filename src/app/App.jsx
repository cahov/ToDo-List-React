import { useState } from 'react'
import './App.css'
import {TaskInput} from "../components/TaskInput"
import {TaskList} from '../components/TaskList'
import {tasksContext, TaskProvider} from "../context/TaskContext"

function App() {


  return (
    <div className="App">
      <TaskInput />
      <TaskList/>
{/*       <tasksContext.Consumer>
        {({Tasks}) => (
          <TaskList tasks={Tasks}/>
        )}
        
      </tasksContext.Consumer> */}
    </div>
  )
}

export default App
