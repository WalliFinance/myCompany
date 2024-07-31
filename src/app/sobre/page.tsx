'use client'
import Image from 'next/image'
import styles from './styles/sobre.module.scss'
import companyImage from '@/public/images/toa-heftiba-FV3GConVSss-unsplash.jpg'
import companyImage2 from '@/public/images/angela-bailey-GfUk_pFtjz0-unsplash.jpg'
import companyImage3 from '@/public/images/lycs-architecture-U2BI3GMnSSE-unsplash (1).jpg'
import companyImage4 from '@/public/images/jason-goodman-Oalh2MojUuk-unsplash (1).jpg'
import joaoImage from '@/public/images/joao.svg'
import mariaImage from '@/public/images/maria.svg'
import pedroImage from '@/public/images/pedro.svg'
import { useEffect } from 'react'
import useWindowSize from '@/src/utils/useWindowSize'
import Lenis from 'lenis'
import {useKeenSlider} from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"


export default function Sobre(){
    const size = useWindowSize()
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
    },
    [
        (slider) =>{
            let timeOut: ReturnType<typeof setTimeout>

            function clearNextTimeOut(){
                clearTimeout(timeOut)
            }

            function nextTimeOut(){
                clearTimeout(timeOut)
                return timeOut = setTimeout(() => {
                    slider.next()
                }, 2000);
            }

            slider.on("created", ()=>{
                slider.container.addEventListener("mouseout", ()=>{
                    clearNextTimeOut()
                    nextTimeOut()
                })
            })

            slider.on("dragStarted", clearNextTimeOut)
            slider.on("animationEnded", nextTimeOut)
            slider.on("updated",nextTimeOut)
        },
    ]
)
    useEffect(()=>{
        document.title = 'Sobre-nos'

        const lenis = new Lenis()

        function raf(time:any){
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
    },[])
    return(
        <>
        <section className={styles.main}>
            <article className={styles.info}>
                <h2 tabIndex={5}>Nossa história</h2>
                <p tabIndex={6}>Em 2021, em uma pequena sala em São Paulo, um grupo de amigos de infância, apaixonados por tecnologia e finanças, se reuniram para discutir um problema que enfrentavam em comum: a dificuldade de acessar e entender os processos de financiamento imobiliário. Sabiam que muitas pessoas compartilhavam dessa mesma frustração, o que os levou a imaginar uma solução que pudesse revolucionar o setor.
                Desses encontros nasceu a [Nome da Empresa]. Combinando suas habilidades em tecnologia, análise de dados e finanças, eles criaram uma plataforma inovadora que simplificava todo o processo de financiamento imobiliário, tornando-o mais transparente e acessível para todos. Desde o início, a missão da empresa foi clara: transformar o mercado imobiliário, proporcionando às pessoas as ferramentas e informações necessárias para tomar decisões financeiras mais informadas e seguras.
                Em poucos meses, a plataforma ganhou tração, atraindo a atenção de investidores e parceiros estratégicos. A equipe expandiu, e a pequena sala em São Paulo deu lugar a um moderno escritório, cheio de energia e inovação. Hoje, a [Nome da Empresa] continua a crescer, impactando positivamente a vida de milhares de pessoas que buscam realizar o sonho da casa própria.</p>
                {size.width<1000?(
                    <Image
                    width={350}
                    height={600}
                    alt='Foto da nossa empresa'
                    src={companyImage}                
                    />
                ):(
                   <div ref={sliderRef} className='keen-slider'>
                    <div className="keen-slider__slide number-slide1"> 
                    <Image
                    width={800}
                    height={600}
                    alt='Foto da nossa empresa'
                    src={companyImage} 
                    objectFit='cover'               
                    /></div>
                    <div className="keen-slider__slide number-slide2">
                        <Image
                        width={800}
                        height={600}
                        alt='Foto da nossa empresa'
                        src={companyImage2} 
                        objectFit='cover'               

                        />
                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <Image
                        width={800}
                        height={600}
                        alt='Foto da nossa empresa'
                        src={companyImage3} 
                        objectFit='cover'               
                        />
                    </div>
                    <div className="keen-slider__slide number-slide4">
                    <Image
                        width={800}
                        height={600}
                        alt='Foto da nossa empresa'
                        src={companyImage4} 
                        objectFit='cover'               
                        />
                    </div>
                   </div>
                )}
            </article>

            <article className={styles.team}>
                <h2 tabIndex={7}>Nossa missão</h2>
                <p tabIndex={8}>Na [Nome da Empresa], acreditamos que todos têm o direito de acessar o mercado imobiliário de maneira simples e eficiente. Nosso principal objetivo é descomplicar o financiamento imobiliário, proporcionando uma experiência digital intuitiva e transparente.</p>

                <h4 tabIndex={9}>Queremos:</h4>
                <ul>
                    <li tabIndex={10}>1. Simplificar Processos: Tornar o financiamento imobiliário um processo descomplicado e acessível, utilizando tecnologia de ponta para eliminar burocracias desnecessárias.</li>
                    <li tabIndex={11}>2. Empoderar Usuários: Oferecer ferramentas e informações que permitam aos nossos clientes tomar decisões financeiras com confiança e segurança.</li>
                    <li tabIndex={12}>3. Promover a Transparência: Garantir que todos os aspectos do financiamento sejam claros e compreensíveis, sem surpresas ou custos ocultos.</li>
                    <li tabIndex={13}>4. Facilitar o Acesso: Democratizar o acesso ao financiamento imobiliário, permitindo que mais pessoas realizem o sonho da casa própria, independentemente de sua situação financeira inicial.</li>
                    <li tabIndex={14}>5. Inovar Constantemente: Manter um ambiente de inovação contínua, sempre buscando novas formas de melhorar e facilitar a jornada do financiamento imobiliário para nossos clientes.</li>
                </ul>
            </article>

        <article className={styles.employees}>
            <h2 tabIndex={15}>Nossa equipe</h2>
            <p tabIndex={16}>A equipe da [Nome da Empresa] é formada por profissionais apaixonados e dedicados, com uma diversidade de experiências e habilidades que contribuem para nosso sucesso. Conheça alguns dos nossos principais integrantes:</p>

            <div className={styles.teamContainer}>
            <div className={styles.employee}>
                <div className={styles.image}>
                {size.width<1000?(
                    <Image
                    width={350}
                    height={400}
                    alt='Foto do nosso ceo João'
                    src={joaoImage}
                    />
                ):(
                    <Image
                    width={500}
                    height={600}
                    alt='Foto do nosso ceo João'
                    src={joaoImage}
                    />
                )}
                </div>
                <div className={styles.employeeInfos}>
                <h3 tabIndex={17}>João Silva - CEO</h3>
                <p tabIndex={18}>Com vasta experiência em tecnologia e finanças, João é o visionário por trás da [Nome da Empresa]. Ele lidera a equipe com sua paixão por inovação e compromisso com a excelência.</p>
                </div>
            </div>
            
            <div className={styles.employee2}>
                <div className={styles.image}>
                {size.width<1000?(
                    <Image
                    width={350}
                    height={500}
                    alt='Foto da nossa cto Maria'
                    src={mariaImage}
                    />
                ):(
                    <Image
                    width={500}
                    height={700}
                    alt='Foto da nossa cto Maria'
                    src={mariaImage}
                    />
                )}
                </div>
                <div className={styles.employeeInfos}>
                <h3 tabIndex={19}>Maria Oliveira - CTO</h3>
                <p tabIndex={20}>Maria é a mente brilhante responsável pela arquitetura tecnológica da nossa plataforma. Sua expertise em desenvolvimento de software e segurança cibernética garante que ofereçamos um serviço robusto e confiável.</p>
                </div>
            </div>
            
            <div className={styles.employee3}>
                <div className={styles.image}>
                    {size.width<1000?(
                        <Image
                        width={350}
                        height={400}
                        alt='Foto do nosso cfo Pedro'
                        src={pedroImage}
                        />
                    ):(
                        <Image
                        width={500}
                        height={600}
                        alt='Foto do nosso cfo Pedro'
                        src={pedroImage}
                        />
                    )}
                </div>
                <div className={styles.employeeInfos}>
                <h3 tabIndex={21}>Pedro Santos - CFO</h3>
                <p tabIndex={22}>Pedro traz sua vasta experiência em finanças para garantir que nossas operações sejam eficientes e sustentáveis. Ele cuida das estratégias financeiras e da relação com investidores.</p>
                </div>
            </div>

            </div>


            <p tabIndex={23}>Cada membro da nossa equipe compartilha da mesma visão: tornar o financiamento imobiliário acessível e descomplicado para todos. Juntos, trabalhamos diariamente para transformar essa visão em realidade, sempre colocando nossos clientes em primeiro lugar.</p>
        </article>
        </section>
        </>
    )
}