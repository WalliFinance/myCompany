import styles from './styles/benefits.module.scss'
import Image from "next/image";
import emailIcon from '@/public/assets/email-icon.svg'
import phoneIcon from '@/public/assets/phone-icon.svg'
import scheduleIcon from '@/public/assets/schedule-icon.svg'
import wppLogo from '@/public/assets/wpp.svg'
import fbLogo from '@/public/assets/fb-icon.svg'
import ttLogo from '@/public/assets/tt-icon.svg'
import instaLogo from '@/public/assets/ig-icon.svg'
import Link from 'next/link';
import useWindowSize from '@/src/utils/useWindowSize';

export default function Benefits(){
    const size = useWindowSize()
    return(
        <main className={styles.main}>
            <section>
            <h1>Beneficios ao fechar conosco</h1>
         <ul>
            <li>Expertise e Experiência: Contamos com uma equipe experiente e qualificada no mercado, oferecendo conhecimento profundo e orientação especializada.</li>
            <li>Atendimento Personalizado: Nosso foco é oferecer um atendimento personalizado e próximo, garantindo que suas necessidades específicas sejam atendidas de maneira eficiente.</li>
            <li>Variedade de Opções: Oferecemos uma ampla gama de produtos/serviços para atender diferentes necessidades e preferências dos clientes.</li>
            <li>Transparência e Credibilidade: Operamos com transparência em todas as etapas do processo, garantindo credibilidade e confiança nas nossas relações comerciais.</li>
            <li>Suporte Contínuo: Proporcionamos suporte contínuo ao longo de todo o processo, desde o início até a conclusão do negócio, assegurando que você esteja sempre bem assistido.</li>
            <li>Inovação e Tecnologia: Utilizamos tecnologia de ponta e práticas inovadoras para otimizar nossos serviços e proporcionar uma experiência mais eficiente e satisfatória.</li>
            <li>Compromisso com a Qualidade: Comprometemo-nos com altos padrões de qualidade em todos os aspectos do nosso trabalho, assegurando que cada cliente receba o melhor serviço possível.</li>
            <li>Flexibilidade e Adaptabilidade: Adaptamo-nos às necessidades do cliente e oferecemos soluções flexíveis que podem ser ajustadas conforme necessário.</li>
            <li>Valor Agregado: Além do produto ou serviço principal, oferecemos valor agregado através de benefícios adicionais, como consultoria especializada, treinamentos, ou outras vantagens exclusivas.</li>
            <li>Reputação no Mercado: Desfrutamos de uma sólida reputação no mercado, baseada em feedback positivo de clientes anteriores e em nossa trajetória de sucesso.</li>
         </ul>
            </section>

         <footer>
        <div className={styles.firstContainer}>
            <h2>Logo</h2>
            <div>
                <Image
                width={20}
                height={20}
                alt="Icone de email"
                src={emailIcon}
                />
                <p>kaiques.goncalves@gmail.com</p>
            </div>
            <div>
                <Image
                width={20}
                height={20}
                alt="Icone de Telefone"
                src={phoneIcon}
                />
                <p>(11) 95045-3953</p>
            </div>
            <div>
                <Image
                width={20}
                height={20}
                alt="Icone de horário de funcionamento"
                src={scheduleIcon}
                />
                <p>Segunda a Sexta 8:00 as 17:00</p>
                <p>Sábado 8:00 as 12:00</p>
            </div>
           
        </div>
        <div className={styles.secondContainer}>
            <div>
                <Link href={'/'}>
                {size.width<1000?(
                    <Image
                    width={30}
                    height={30}
                    alt="Icone do whatsapp"
                    src={wppLogo}
                    />
                ):(
                    <Image
                    width={40}
                    height={40}
                    alt="Icone do whatsapp"
                    src={wppLogo}
                    />
                )}
                
                </Link>
            </div>
            <div>
                <Link href={'/'}>
                    {size.width<1000?(
                         <Image
                         width={30}
                         height={30}
                         alt="Icone do facebook"
                         src={fbLogo}
                         />
                    ):(
                        <Image
                        width={40}
                        height={40}
                        alt="Icone do facebook"
                        src={fbLogo}
                        />
                    )}
                </Link>
            </div>
            <div>
            <Link href={'/'}>
                {size.width<1000?(
                    <Image
                    width={30}
                    height={30}
                    alt="Icone do twitter"
                    src={ttLogo}
                    />
                ):(
                    <Image
                    width={40}
                    height={40}
                    alt="Icone do twitter"
                    src={ttLogo}
                    />
                )}
                </Link>
            </div>
            <div>
            <Link href={'/'}>
                {size.width<1000?(
                    <Image
                    width={30}
                    height={30}
                    alt="Icone do instagram"
                    src={instaLogo}
                    />
                ):(
                    <Image
                    width={40}
                    height={40}
                    alt="Icone do instagram"
                    src={instaLogo}
                    />
                )}
                </Link>
            </div>
        </div>
         </footer>
        </main>
    )
}