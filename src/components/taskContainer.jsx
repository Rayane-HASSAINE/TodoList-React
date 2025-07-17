import React, { useState } from 'react'
import Header from './header/header.jsx'
import TaskInput from './taskInput/taskInput.jsx'
import TaskList from './taskList/TaskList.jsx'
import Footer from './footer/footer.jsx'

const TaskContainer = () => {

  const [tasksList, setTasksList] = useState([]);


  const addTask = (title) => {
    const newTask = {
      id: tasksList.length ? tasksList[tasksList.length -1].id+1:1,
      title: title,
      completed: false,
    };
    setTasksList([...tasksList, newTask])
  };

  //editer
  const editTask = (id, completedValue) => {
    setTasksList(tasksList.map((task) =>
      task.id === id ? { ...task, completed: completedValue } : task
    )
    );
  };

  //supprimer
  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  }

  //Avec TaskFlow tu as éliminé X taches
  const getTaskCounts = () => {
    const completedTasks = tasksList.filter((task) => task.completed === true).length;
    const incompletedTasks = tasksList.length - completedTasks;

    return {
      completedTasks,
      incompletedTasks,
    };
  };

  // permet d'utiliser separement completedTasks et incompletedTasks hors de la fonction getTaskCounts
  const { completedTasks, incompletedTasks } = getTaskCounts();

  console.log(completedTasks, incompletedTasks);

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList tasksList={tasksList}
        editTask={editTask}
        deleteTask={deleteTask}
        incompletedTasks={incompletedTasks} />
      <Footer completedTasks={completedTasks}/>
    </main>
  )
}

export default TaskContainer