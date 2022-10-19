import styles from "./GameOption.module.css"

function GameOption ({children}) {
    return (
        <div className={styles.gameOption}>
            {children}
        </div>
    )
}

export default GameOption