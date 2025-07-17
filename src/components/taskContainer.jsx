import React, { useState } from 'react'
import Header from './header/header.jsx'
import TaskInput from './taskInput/taskInput.jsx'
import TaskList from './taskList/TaskList.jsx'
import Footer from './footer/footer.jsx'

const TaskContainer = () => {

  const [tasksList, setTasksList] = useState([
    // {
    //   id: 1,
    //   title: "Faire la vaisselle",
    //   completed: false,
    // },

    // {
    //   id: 2,
    //   title: "Sortir le chien",
    //   completed: true,
    // }
  ]);

    const addTask = (title) => {
      const newTask = {
        id: 5,
        title: title,
        completed: false,
      }
      setTasksList([...tasksList, newTask])
    }

  console.log(tasksList);

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList />
      <Footer />
    </main>
  )
}

export default TaskContainer