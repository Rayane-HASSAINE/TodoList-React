import React from 'react'
import Header from './header/header.jsx'
import TaskInput from './taskInput/taskInput.jsx'
import TaskList from './taskList/TaskList.jsx'
import Footer from './footer/footer.jsx'

const TaskContainer = () => {
  return (

    <main>
        <Header/>
        <TaskInput/>
        <TaskList />
        <Footer />
    </main>
  )
}

export default TaskContainer