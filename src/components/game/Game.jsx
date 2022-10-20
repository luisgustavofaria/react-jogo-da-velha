import { useState } from "react"
import styles from "./Game.module.css"
import GameOption from "../gameOption/GameOption"

function Game () {
    const [gamestate, setGameState] = useState(Array(9).fill(0)) // Array(9) criar um Array de 9 posiçoes - fill: todos com valor zero
    return (
        <div className={styles.game}>
            {
                gamestate.map((value, pos) =>
                    <GameOption
                        key={`game-option-pos-${pos}`}
                        status={value}
                    />  
                )
            } 
        </div>
    )
}

export default Game