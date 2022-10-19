import Icon from '../icon/Icon'
import styles from './Header.module.css'

import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"

function Header () {
    return (
        <div className={styles.header}>
            <Title>JOGO DA VELHA</Title>
            <Subtitle>Criado por Luis Gustavo Faria</Subtitle>
            <div className={styles.iconContent}>
                <Icon iconName="github" link="https://github.com/luisgustavofaria" size="40px"/>
            </div>
        </div>
    )
}

export default Header