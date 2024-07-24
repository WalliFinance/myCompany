'use client'
import Link from "next/link"
import styles from './styles/header.module.scss'
import { useEffect,useRef, useState } from "react"
import Image from "next/image"
import menuIcon from '@/public/assets/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'


export default function Header(){
  const firstLink = useRef<HTMLAnchorElement>(null)
  const secondLink = useRef<HTMLAnchorElement>(null)
  const thirdLink = useRef<HTMLAnchorElement>(null)
  const refUl = useRef<HTMLUListElement>(null)
  const [currentPath, setCurrentPath] = useState<string>('')

  function expandMenu(){
    if(refUl.current){
      if(refUl.current.style.display === 'none'){
        refUl.current.style.display = 'flex'
      }else{
        refUl.current.style.display = 'none'
      }
    }
  }
  const handlePathChange = (newPath:string) =>{
    if(refUl.current){
      const allA = refUl.current.querySelectorAll('a')
      const allDividers = refUl.current.querySelectorAll('span')
      allDividers.forEach(divider=>{
        divider.style.display = 'none'
      })

      allA.forEach(anchors=>{
        anchors.style.color= '#ffffff'
      })
    if(newPath === '/'){
       const firstLi = refUl.current.querySelector('div')
       const firstA = firstLi?.querySelector('a')
         const firstDivider = firstLi?.querySelector('span')
         if(firstDivider && firstA){
           firstDivider.style.display = 'block'
           firstA.style.color = '#00A3F6'
         }  
     }else if(newPath === '/sobre'){
         const firstLi = refUl.current.querySelector('div:nth-child(2)')
         const firstA = firstLi?.querySelector('a')
         const firstDivider = firstLi?.querySelector('span')
         if(firstDivider && firstA){
           firstDivider.style.display = 'block'
           firstA.style.color = '#00A3F6'
         } 
      }else if(newPath === '/contate'){
         const firstLi = refUl.current.querySelector('div:nth-child(3)')
         const firstA = firstLi?.querySelector('a')
         const firstDivider = firstLi?.querySelector('span')
         if(firstDivider && firstA){
           firstDivider.style.display = 'block'
           firstA.style.color = '#00A3F6'
         } 
     }else{
     }
    }
  }

  useEffect(()=>{
    const handleClick = (ev: MouseEvent)=> {
      const targetClick = ev.target as HTMLAnchorElement

      if(targetClick.tagName === 'A' && targetClick.href){
        const newPath = new URL(targetClick.href).pathname
        setCurrentPath(newPath)
        handlePathChange(newPath)
      }
    }

    window.addEventListener('click', handleClick)

    handlePathChange(window.location.pathname)

    return ()=>{
      window.removeEventListener('click', handleClick)
    }
  },[])

    return(
        <header className={styles.header}>
        <Image
        width={30}
        height={30}
        src={menuIcon}
        alt="Icone de menu"
        onClick={expandMenu}
        />
          <nav>
          <h1>LOGO</h1>
            <ul ref={refUl}>
              <div>
              <Link href={'/'} ref={firstLink}>
                Inicio
                </Link>
              <span className={styles.divisor}></span>
              </div>
               
               <div>
               <Link href={'/sobre'} ref={secondLink}>Sobre</Link>
               <span className={styles.divisor}></span>
               </div>
                
                <div>
                <Link href={'/contate'} ref={thirdLink}>Contate-nos</Link>
                <span className={styles.divisor}></span>
                </div>
            </ul>
            <button><Link href={'/simular'}>Simular</Link></button>
          </nav>
        </header>
    )
}