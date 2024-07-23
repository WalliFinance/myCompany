import Link from "next/link"
import styles from './styles/header.module.scss'

export default function Header(){
    return(
        <header className={styles.header}>
          <nav>
          <h1>LOGO</h1>
            <ul>
                <Link href={'/'}>Inicio</Link>
                <Link href={'/sobre'}>Sobre</Link>
                <Link href={'/contate'}>Contate-nos</Link>
            </ul>
            <button><Link href={'/simular'}>Simular</Link></button>
          </nav>
        </header>
    )
}