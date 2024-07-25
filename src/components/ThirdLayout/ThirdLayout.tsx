'use client'

import { useScroll } from "framer-motion"
import { useRef } from "react"
import styles from './styles/thirdLayout.module.scss'
import Benefits from "../Benefits/page"
import Banks from "../Banks/page"

export default function ThirdLayout(){
    const container = useRef<HTMLElement>(null)
    const{scrollYProgress} = useScroll({
      target:container,
      offset:['start start', 'end end']
    })
    
    return(
    <main className={styles.main} ref={container}>
        <Banks scrollYProgress={scrollYProgress}/>
        <Benefits/>
    </main>
    )
}