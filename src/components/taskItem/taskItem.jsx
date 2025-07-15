import styles from "./TaskItem.module.css";

const TaskItem = () => {
    return (
        <li className={`${styles.container} ${styles.default}`}>
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idDefault}`}>
                    1
                </div>

                <div className={styles.contentDefault}>
                    Ranger mon bureau et finir d'apprendre React !
                </div>
            </div>

            <button>

            </button>
        </li>
    )
}

export default TaskItem