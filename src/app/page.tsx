'use client'
import Presentation from "../components/Presentation/page";
import { useEffect, useRef } from "react";
import styles from './page.module.scss'
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import SecondLayout from "../components/SecondLayout/SecondLayout";
import ThirdLayout from "../components/ThirdLayout/ThirdLayout";
import useWindowSize from "../utils/useWindowSize";


export default function Home() {
  const size = useWindowSize()
  const container = useRef<HTMLElement>(null)
  const{scrollYProgress} = useScroll({
    target:container,
    offset:['start start', 'end end']
  })
  
  useEffect(()=>{
    document.title = 'Home'

    const lenis = new Lenis()

    function raf(time:any){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <>
    <main className={styles.main} ref={container}>
        <Presentation scrollYProgress={scrollYProgress}/>
        <SecondLayout/>
        <ThirdLayout/>
    </main>   
    </>
  );
}
