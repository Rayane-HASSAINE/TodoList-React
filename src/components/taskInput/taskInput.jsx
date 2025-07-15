import styles from './TaskInput.module.css'

const TaskInput = () => {
    return (

        <div className={`box ${styles.element}`}>
            <h2 className={styles.title}>
                Ajoute la prochaine tâche
            </h2>
            <form className={styles.container}>
                <input type="text" className={styles.input} placeholder='Indiquez un titre de tache explicite.' />
                <button className='button-primary' type="submit">
                    Ajouter
                </button>
            </form>
        </div>
    )
}

export default TaskInput