'use client'

import Card from '@/src/components/Card/Card'
import Card2 from '@/src/components/Card copy/Card'
import Card3 from '@/src/components/Card copy 2/Card'
import Card4 from '@/src/components/Card copy 3/Card'
import Card5 from '@/src/components/Card copy 4/Card'
import styles from './styles/teste.module.scss'

export default function Teste(){
    return(
        <main className={styles.main}>
            <Card/>
            <Card2/>
            <Card5/>
            <Card3/>
            <Card4/>
        </main>
    )
}