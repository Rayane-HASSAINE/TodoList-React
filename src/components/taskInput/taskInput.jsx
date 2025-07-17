import { useState } from 'react';
import styles from './TaskInput.module.css'

const TaskInput = ({ addTask }) => {

    const [taskTitle, setTaskTitle] = useState("");

    const handleInputChange = (e) => {
        setTaskTitle(e.target.value);
    };

    const handleAddtask = (e) => {
        e.preventDefault();
        if (taskTitle.trim()) {
            addTask(taskTitle);
            setTaskTitle("");
        }
        else {
            console.log("taskTitle is empty");
        }
    };



return (

    <div className={`box ${styles.element}`}>
        <h2 className={styles.title}>
            Ajoute la prochaine tâche
        </h2>
        <form className={styles.container} onSubmit={handleAddtask}>
            <input type="text"
                className={styles.input}
                placeholder='Indiquez un titre de tache explicite.'
                onChange={handleInputChange}
                value={taskTitle}
            />

            <button className='button-primary' type="submit">
                Ajouter
            </button>
        </form>
    </div>
)
}

export default TaskInput