'use client'

import Presentation from '../Presentation2/page'
import styles from './styles/card.module.scss'

export default function Card(){
    return(
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <Presentation />
            </div>
        </div>
    )
}