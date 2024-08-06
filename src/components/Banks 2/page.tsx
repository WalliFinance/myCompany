import Image from 'next/image'
import styles from './styles/banks.module.scss'
import santanderLogo from '@/public/images/banco-santander-logo.svg'
import bradescoLogo from '@/public/images/bradesco.svg'
import itauLogo from '@/public/images/itau-fundo-azul.svg'
import interLogo from '@/public/images/inter.svg'
import Link from 'next/link'
import useWindowSize from '@/src/utils/useWindowSize'
import { useTransform ,motion} from 'framer-motion'

export default function Banks(){
    const size = useWindowSize()
    
    return(
        <>
        {size.width<1000?(
            <section className={styles.container}>
            <div>
                <article>
                    <Link href={'/simular'}>
                    <Image
                         width={60}
                         height={60}
                         alt='Logotipo itau'
                         src={itauLogo}
                    />
                    </Link>
                </article>

                <article>
                    <Link href={'/simular'}>
                    <Image
                        width={60}
                        height={60}
                        alt='Logotipo bradesco'
                        src={bradescoLogo}
                    /> 
                    </Link>
                </article>

                <article>
                    <Link href={'/simular'}>
                    <Image
                        width={60}
                        height={60}
                        alt='Logotipo santander'
                        src={santanderLogo}
                        />
                    </Link>
                </article>

                <article>
                    <Link href={'/simular'}>
                    <Image
                        width={60}
                        height={60}
                        alt='Logotipo inter'
                        src={interLogo}
                    />
                    </Link>
                </article>
            </div>
        </section>
        ):(
        <section className={styles.container}>
            <div>
                <article>
                    <Link href={'/simular'} tabIndex={44} aria-label='Link que leva a página de simução'>
                    <Image
                        width={300}
                        height={300}
                        alt='Logotipo itau'
                        src={itauLogo}
                        />
                    </Link>
                </article>

                <article>
                    <Link href={'/simular'} tabIndex={45} aria-label='Link que leva a página de simução'>
                    <Image
                        width={300}
                        height={300}
                        alt='Logotipo bradesco'
                        src={bradescoLogo}
                        />
                    </Link>
                </article>

                <article>
                    <Link href={'/simular'} tabIndex={46} aria-label='Link que leva a página de simução'>
                    <Image
                        width={300}
                        height={300}
                        alt='Logotipo santander'
                        src={santanderLogo}
                        />
                    </Link>
                </article>

                <article>
                    <Link href={'/simular'} tabIndex={47} aria-label='Link que leva a página de simução'>
                    <Image
                        width={300}
                        height={300}
                        alt='Logotipo inter'
                        src={interLogo}
                    />
                    </Link>
                </article>
            </div>
        </section>
        )}
        </>
        
    )
}