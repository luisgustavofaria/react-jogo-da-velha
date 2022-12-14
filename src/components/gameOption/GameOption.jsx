import classNames from "classnames"

import styles from "./GameOption.module.css"
import Icon from "../icon/Icon"

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px"/> /*feito GampeIcon para nao ficar repetindo o size*/

function GameOption ({status, onClick, isWinner, isDraw }) {
    return (
        <div className={
            classNames(styles.gameOption, {[styles.winner]: isWinner, [styles.draw]: isDraw})
        } 
        onClick={onClick}>
            {
                status === 1 && <GameIcon iconName="circle"></GameIcon>
            }
            {
                status === -1 && <Icon iconName="x"></Icon>
            }
            
        </div>
    )
}

export default GameOption