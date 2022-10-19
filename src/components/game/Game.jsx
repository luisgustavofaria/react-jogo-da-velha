import styles from "./Game.module.css"
import GameOption from "../gameOption/GameOption"

function Game () {
    return (
        <div className={styles.game}>
            <GameOption>X</GameOption>
            <GameOption>X</GameOption>
            <GameOption>X</GameOption>
            <GameOption>X</GameOption>
            <GameOption>X</GameOption>
            <GameOption>X</GameOption>
            <GameOption>X</GameOption>
            <GameOption>X</GameOption>
            <GameOption>X</GameOption>
        </div>
    )
}

export default Game