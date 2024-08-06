'use client'
import styles from './styles/card.module.scss'
import Modalyts from '../Modalyts 2/page'

export default function Card2(){
    return(
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <Modalyts/>
            </div>
        </div>
    )
}