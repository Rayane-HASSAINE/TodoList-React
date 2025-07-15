import TaskItem from "../taskItem/taskItem"
import styles from "./TaskList.module.css"

const TaskList = () => {
  return (
    <div className="box">
        <h2 className={styles.title}>
            Il te reste encore x taches à accomplir !
        </h2>

        <ul className={styles.container}>
            <TaskItem />
        </ul>
    </div>
  )
}

export default TaskList