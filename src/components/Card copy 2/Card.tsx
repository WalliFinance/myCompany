'use client'

import styles from './styles/card.module.scss'
import Banks from '../Banks 2/page'

export default function Card3(){
    return(
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <Banks/>
            </div>
        </div>
    )
}