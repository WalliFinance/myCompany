'use client'
import Image from 'next/image'
import styles from './styles/contate.module.scss'
import { useEffect } from 'react'
import emailIcon from '@/public/assets/email-icon.svg'
import phoneIcon from '@/public/assets/phone-icon.svg'
import wppIcon from '@/public/assets/wpp2.svg'


export default function Contate(){
    
useEffect(()=>{
document.title = 'Contate-nos'
},[])


    return(
        <main className={styles.main}>
        <h1>Tem alguma duvida ou sugestão?</h1>
        <h2>Fale conosco</h2>

        <section className={styles.container}>
            <form>
                <label htmlFor="name">Nome</label>
                <input type="text" name='name' id='name' placeholder='Seu nome'/>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' placeholder='Seu email'/>
                <label htmlFor="about">Assunto</label>
                <input type="text" name='about' id='about' placeholder='O assunto da mensagem'/>
                <label htmlFor="message">Mensagem</label>
                <textarea name="message" id="message" placeholder='Deixe sua mensagem aqui.'>
                </textarea>
                <button>Enviar mensagem</button>
            </form>

            <article>
                <h3>Deseja nos contatar por outros meios?</h3>

                <div className={styles.containerContact}>
                    <div className={styles.iconContainer}>
                    <Image
                    width={40}
                    height={40}
                    src={emailIcon}
                    alt='Icone de email'
                    />
                    <p>email@email.com</p>
                    </div>
                    <p>Para um atendimento mais detalhado e formal, você pode contar com nosso suporte via e-mail. Nossa equipe de atendimento está pronta para responder suas perguntas e auxiliar em todas as etapas do seu financiamento imobiliário. Envie suas dúvidas, solicitações ou documentos para nosso e-mail e garantimos uma resposta dentro de 24 horas úteis. Estamos disponíveis de segunda a sexta-feira, das 9h às 18h. Entre em contato conosco e tenha um atendimento personalizado e completo.</p>
                </div>

                <div className={styles.containerContact}>
                    <div className={styles.iconContainer}>
                    <Image
                    width={40}
                    height={40}
                    src={phoneIcon}
                    alt='Icone de telefone'
                    />
                    <p>(11)99999-9999</p>
                    </div>
                    <p>Se você prefere um atendimento mais direto e pessoal, nosso serviço de atendimento telefônico está à sua disposição. Ligue para nossa central de atendimento e converse diretamente com um de nossos especialistas em financiamento imobiliário. Estamos disponíveis de segunda a sexta-feira, das 8h às 18h. Garantimos um atendimento eficiente e atencioso para resolver suas dúvidas e agilizar seu processo de financiamento. Não hesite em nos ligar!</p>
                </div>

                <div className={styles.containerContact}>
                    <div className={styles.iconContainer}>
                    <Image
                      width={40}
                      height={40}
                      src={wppIcon}
                      alt='Icone do whatsapp'
                    />
                    <p>(11) 99999-9999</p>
                    </div>
                    <p>Na nossa fintech de financiamento imobiliário, entendemos a importância de um atendimento ágil e prático. Por isso, disponibilizamos o atendimento via WhatsApp, onde você pode tirar suas dúvidas e acompanhar seu processo de financiamento de forma rápida e eficiente. Nosso time está disponível de segunda a sexta-feira, das 8h às 20h, e aos sábados, das 9h às 14h. Envie uma mensagem para o nosso número e um de nossos especialistas estará pronto para te ajudar!.</p>
                </div>
            </article>
        </section>
        </main>
    )
}