'use client'

import { useScroll } from "framer-motion"
import { useRef } from "react"
import styles from './styles/secondLayout.module.scss'
import Modalyts from "../Modalyts/page"

export default function SecondLayout(){
    const container = useRef<HTMLElement>(null)
    const{scrollYProgress} = useScroll({
      target:container,
      offset:['start start', 'end end']
    })
    
    return(
    <main className={styles.main} ref={container}>
        <Modalyts scrollYProgress={scrollYProgress}/>
    </main>
    )
}