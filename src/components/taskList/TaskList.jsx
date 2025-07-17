import TaskItem from "../taskItem/taskItem"
import styles from "./TaskList.module.css"

const TaskList = ({
  tasksList, 
  editTask, 
  deleteTask, 
  incompletedTasks }) => {
  return (
    <div className="box">
        <h2 className={styles.title}>
            Il te reste encore {incompletedTasks} taches à accomplir !
        </h2>

        <ul className={styles.container}>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />


        </ul>
    </div>
  )
}

export default TaskList