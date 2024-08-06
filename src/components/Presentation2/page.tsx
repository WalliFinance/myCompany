import Link from "next/link";
import styles from './styles/presentation.module.scss'
import { useTransform } from "framer-motion";
import {motion } from "framer-motion";
import useWindowSize from "@/src/utils/useWindowSize";

const Presentation = () =>{
    const size = useWindowSize()
    return(
        <>
        {size.width<1000?(
        <main className={styles.main}>
        <article>
            <h1>Inovação financeira para o seu imóvel dos sonhos</h1>
            <h2>Transformando o Financiamento Imobiliário com Tecnologia de Ponta</h2>
            <p>Somos uma fintech dedicada a revolucionar o mercado de financiamento imobiliário através da inovação tecnológica. Nosso objetivo é simplificar e agilizar o processo de obtenção de crédito para compra de imóveis, oferecendo soluções personalizadas que atendem às necessidades individuais de cada cliente. Combinamos expertise financeira com o poder da tecnologia para proporcionar uma experiência transparente, eficiente e acessível, garantindo que cada pessoa possa realizar o sonho de adquirir sua própria casa de forma descomplicada e segura.</p>
            <button><Link href={'/simular'}>Simular</Link></button>
        </article>
        </main>
        ):(
        <main className={styles.main}>
            <article>
                <h1 tabIndex={5}>Inovação financeira para o seu imóvel dos sonhos</h1>
                <h2 tabIndex={6}>Transformando o Financiamento Imobiliário com Tecnologia de Ponta</h2>
                <p  tabIndex={7}>Somos uma fintech dedicada a revolucionar o mercado de financiamento imobiliário através da inovação tecnológica. Nosso objetivo é simplificar e agilizar o processo de obtenção de crédito para compra de imóveis, oferecendo soluções personalizadas que atendem às necessidades individuais de cada cliente. Combinamos expertise financeira com o poder da tecnologia para proporcionar uma experiência transparente, eficiente e acessível, garantindo que cada pessoa possa realizar o sonho de adquirir sua própria casa de forma descomplicada e segura.</p>
                <button><Link href={'/simular'} tabIndex={8} aria-label="Link que leva a página de simulação">Simular</Link></button>
            </article>
        </main>
        )}
        </>
        
    )
}

export default Presentation