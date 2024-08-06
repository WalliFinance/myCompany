'use client'

import styles from './styles/card.module.scss'
import Benefits from '../Benefits 2/page'


export default function Card4(){
    return(
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <Benefits/>
            </div>
        </div>
    )
}