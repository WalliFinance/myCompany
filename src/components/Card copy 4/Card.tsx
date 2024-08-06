'use client'

import styles from './styles/card.module.scss'
import Modalyts3 from '../Modalyts3/page'


export default function Card5(){
    return(
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <Modalyts3/>
            </div>
        </div>
    )
}