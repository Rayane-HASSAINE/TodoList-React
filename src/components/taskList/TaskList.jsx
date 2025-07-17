import TaskItem from "../taskItem/taskItem"
import styles from "./TaskList.module.css"

const TaskList = ({
  tasksList,
  editTask,
  deleteTask,
  incompletedTasks }) => {

  const taskList = tasksList.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      editTask={editTask}
      deleteTask={deleteTask} />
  ));

  if (taskList && taskList.length > 0) {
    return (
      <div className="box">
      <h2 className={styles.title}>

        {incompletedTasks > 0 && (
            <>Il te reste encore <span className="important">{incompletedTasks}</span> taches à accomplir !</>
        )}

                {incompletedTasks > 0 && (
          <>
            Genial tu as accompli toutes tes taches
          </>
        )}
        </h2>


        {tasksList && tasksList.length > 0 && (
          <ul className={styles.container}>
            {taskList}
          </ul>
        )}
      </div>
    );
  }
  return (
    <div className="box">
      <h2 className={styles.title}>
        Salut, tu n'as rien à faire ! Profite de ton temps libre</h2>
    </div>


  )

}

export default TaskList