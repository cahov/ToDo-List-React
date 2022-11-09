import { useState } from 'react'
import './App.css'
import {TaskInput} from "../components/TaskInput"
import {TaskList} from '../components/TaskList'
import {TasksCounter} from "../components/TasksCounter"

function App() {


  return (
    <div className="App">
      <TasksCounter/>
      <TaskInput />
      <TaskList/>
    </div>
  )
}

export default App
