'use client'
import Image from 'next/image'
import styles from './styles/contate.module.scss'
import { useEffect } from 'react'
import emailIcon from '@/public/assets/email-icon.svg'
import phoneIcon from '@/public/assets/phone-icon.svg'
import wppIcon from '@/public/assets/wpp2.svg'
import Lenis from 'lenis'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import * as gtag from "@/lib/gtag"



export default function Contate(){
    const createMessageDataForm = z.object({
    name:z.string()
    .min(1,"O nome é obrigatório"),
    email:z.string().min(1,"Email é obrigatorio").email("Formato de email invalido"),
    phone:z.string()
    .min(11,"Formato de numero invalido"),
    about:z.string()
    .min(1,"O valor assunto é obrigatorio"),
    message:z.string()
    .min(1,'A mensagem é obrigatória')
    })

    const { register, handleSubmit, formState: { errors } } = useForm<messageData>({resolver:zodResolver(createMessageDataForm)})

    type messageData = z.infer<typeof createMessageDataForm>
    
useEffect(()=>{
document.title = 'Contate-nos'

const lenis = new Lenis()

function raf(time:any){
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
},[])

const serviceId:any= process.env.NEXT_PUBLIC_MY_SERVICE_ID2
const templateId:any=process.env.NEXT_PUBLIC_MY_TEMPLATE_ID2
const publicKey:any=process.env.NEXT_PUBLIC_MY_PUBLIC_KEY2

    const onSubmit = (dataForm:messageData) =>{
        const templateParams = {
            name:dataForm.name,
            email:dataForm.email,
            phone:dataForm.phone,
            about:dataForm.about,
            message:dataForm.message
        }

        gtag.event({
            action:'form_submit',
            category: 'Form Submit',
            label: 'Simulation form',
            value:2,
            page_location: window.location.href
        })

        
    emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
            publicKey:publicKey
        }
    )

    

    setTimeout(() => {
        alert('O email foi enviado para nosso suporte em 24 horas um de nossos funcionarios ira te contactar.')
    }, 2000);    
    }


    return(
        <>
             <main className={styles.main}>
        <h1 tabIndex={5}>Tem alguma duvida ou sugestão?</h1>
        <h2 tabIndex={6}>Fale conosco</h2>

        <section className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Nome</label>
                {errors.name && <span>{errors.name.message}</span>}
                <input
                tabIndex={7}
                aria-label='Input nome' 
                type="text" 
                id='name'
                {...register('name')} 
                placeholder='Seu nome'/>
                <label htmlFor="email">Email</label>
                {errors.email && <span>{errors.email.message}</span>}
                <input 
                type="text"
                tabIndex={8}
                aria-label='Input email'  
                {...register('email')} 
                id='email' placeholder='Seu email'/>
                <label htmlFor="phone">Telefone</label>
                {errors.phone && <span>{errors.phone.message}</span>}
                <input 
                type="text"
                tabIndex={9}
                aria-label='Input telefone' 
                {...register('phone')} 
                id='phone' placeholder='Seu telefone'/>
                <label htmlFor="about">Assunto</label>
                {errors.about && <span>{errors.about.message}</span>}
                <input 
                type="text" 
                tabIndex={10}
                aria-label='Input tema da mensagem' 
                {...register('about')}  
                id='about' placeholder='O assunto da mensagem'/>
                <label htmlFor="message">Mensagem</label>
                {errors.message && <span>{errors.message.message}</span>}
                <textarea 
                tabIndex={11}
                aria-label='Digite aqui sua mensage' 
                {...register('message')} 
                id="message" placeholder='Deixe sua mensagem aqui.'>
                </textarea>
                <button tabIndex={12} aria-label='Botão que envia a mensagem para nosso suporte'>Enviar mensagem</button>
            </form>

            <article>
                <h3 tabIndex={13}>Deseja nos contatar por outros meios?</h3>
                <div className={styles.containerContact}>
                    <div className={styles.iconContainer}>
                    <Image
                    width={40}
                    height={40}
                    src={emailIcon}
                    alt='Icone de email'
                    />
                    <p tabIndex={14}>email@email.com</p>
                    </div>
                    <p tabIndex={15}>Para um atendimento mais detalhado e formal, você pode contar com nosso suporte via e-mail. Nossa equipe de atendimento está pronta para responder suas perguntas e auxiliar em todas as etapas do seu financiamento imobiliário. Envie suas dúvidas, solicitações ou documentos para nosso e-mail e garantimos uma resposta dentro de 24 horas úteis. Estamos disponíveis de segunda a sexta-feira, das 9h às 18h. Entre em contato conosco e tenha um atendimento personalizado e completo.</p>
                </div>

                <div className={styles.containerContact}>
                    <div className={styles.iconContainer}>
                    <Image
                    width={40}
                    height={40}
                    src={phoneIcon}
                    alt='Icone de telefone'
                    />
                    <p tabIndex={16}>(11)99999-9999</p>
                    </div>
                    <p tabIndex={17}>Se você prefere um atendimento mais direto e pessoal, nosso serviço de atendimento telefônico está à sua disposição. Ligue para nossa central de atendimento e converse diretamente com um de nossos especialistas em financiamento imobiliário. Estamos disponíveis de segunda a sexta-feira, das 8h às 18h. Garantimos um atendimento eficiente e atencioso para resolver suas dúvidas e agilizar seu processo de financiamento. Não hesite em nos ligar!</p>
                </div>

                <div className={styles.containerContact}>
                    <div className={styles.iconContainer}>
                    <Image
                      width={40}
                      height={40}
                      src={wppIcon}
                      alt='Icone do whatsapp'
                    />
                    <p tabIndex={18}>(11) 99999-9999</p>
                    </div>
                    <p tabIndex={19}>Na nossa fintech de financiamento imobiliário, entendemos a importância de um atendimento ágil e prático. Por isso, disponibilizamos o atendimento via WhatsApp, onde você pode tirar suas dúvidas e acompanhar seu processo de financiamento de forma rápida e eficiente. Nosso time está disponível de segunda a sexta-feira, das 8h às 20h, e aos sábados, das 9h às 14h. Envie uma mensagem para o nosso número e um de nossos especialistas estará pronto para te ajudar!.</p>
                </div>
            </article>
        </section>
        </main>
 
        </>
          )
}