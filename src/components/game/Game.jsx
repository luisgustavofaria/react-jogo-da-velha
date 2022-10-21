import { useState, useEffect } from "react"
import styles from "./Game.module.css"
import GameOption from "../gameOption/GameOption"
import GameInfo from "../gameInfo/GameInfo"

const winnerTable = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function Game () {
    const [gameState, setGameState] = useState(Array(9).fill(0)) // Array(9) criar um Array de 9 posiçoes - fill: todos com valor zero
    const [currentPlayer, setCurrentPlayer] = useState(-1)
    const [winner, steWinner] = useState(0)
    

    const handleCLick = (pos) => {
        if (gameState[pos] === 0 && winner === 0 ) {
            let newGameState = [...gameState]
            newGameState[pos] = currentPlayer
            setGameState(newGameState)
        }
    }

    const verifyGame = () => {
        winnerTable.forEach((line) => {
            const values = line.map((pos) => gameState[pos])
            const sum = values.reduce((sum, value) => sum + value)
            if (sum === 3 || sum === -3 ) steWinner( sum / 3)
        })
    }

    const handleReset = () => {
        setGameState(Array(9).fill(0))
        steWinner(0)
        setCurrentPlayer(-1)
    }

    /*useEffect: primeira pos function, segunda pos Array (se alguma coisa do Array for modificada ele chama a function*/
    useEffect( () => {
        setCurrentPlayer(currentPlayer * -1)
        verifyGame()
    }, [gameState] ) 

    return (
        <div className={styles.gameContent}>
            <div className={styles.game}>
                {
                    gameState.map((value, pos) =>
                        <GameOption
                            key={`game-option-pos-${pos}`}
                            status={value}
                            onClick={ () => handleCLick(pos) }
                        />  
                    )
                } 
            </div>
            <GameInfo
                currentPlayer={currentPlayer}
                winner={winner}
                onReset={handleReset}
            />
        </div>
        
    )
}

export default Game