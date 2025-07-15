import React from 'react'
import Header from './header/header.jsx'
import TaskInput from './taskInput/taskInput.jsx'
import TaskList from './taskList/TaskList.jsx'

const TaskContainer = () => {
  return (

    <main>
        <Header/>
        <TaskInput/>
        <TaskList />
    </main>
  )
}

export default TaskContainer