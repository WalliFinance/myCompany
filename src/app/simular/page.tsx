'use client'

import FirstForm from "@/src/components/FirstForm/page";
import SecondForm from "@/src/components/SecondForm/page";
import { useEffect, useRef, useState } from "react";
import styles from './styles/simular.module.scss'
import emailjs from '@emailjs/browser'
import * as gtag from "@/lib/gtag"


export default function Simulacao(){
    const [currentStep,setCurrentStep] = useState(0)
    const [type,setType] = useState('')
    const [value,setValue] =  useState('')
    const [financedValue,setFinancedValue] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [birtday,setBirthday] = useState('')
    const refSummary = useRef<HTMLElement>(null)

    const initialFormData={
        name: '',
        type: '',
        value: '',
        email: '',
        phone: '',
        date: '',
        financedValue:''
      }
    
      const [formData, setFormData] = useState(initialFormData)
      
      const date = new Date(formData.date)
      const day = date.getDay()
      const month = date.getMonth()
      const year = date.getFullYear()
      let fullDate;
      
      if(day<10){
      fullDate = `0${day}/0${month}/${year}`
      }else{
      fullDate =  `${day}/${month}/${year}`
      }
    
      const formatValue = formData.value.replace(/[^\d]/g, '')
      const formatValue2 = formData.financedValue.replace(/[^\d]/g, '')
      const numberSub = Number(formatValue) - Number(formatValue2)
      const numberWithPoints = `${numberSub}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    
      const templateParams = {
      typeOfFinancement: formData.type,
      value: formData.value,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      financedValue: numberWithPoints,
      birthday: fullDate
    }
    
      const prevStep = () => setCurrentStep((prevStep)=>prevStep-1);
    
      const handleChange = (e:any)=>{
        const {name,value} = e.target
        setFormData({...formData, [name]:value})
      }
    
     
      const serviceId:any= process.env.NEXT_PUBLIC_MY_SERVICE_ID
      const templateId:any=process.env.NEXT_PUBLIC_MY_TEMPLATE_ID
      const publicKey:any=process.env.NEXT_PUBLIC_MY_PUBLIC_KEY
    
      
      const confirmSendEmail = () =>{
        alert('Um consultor ja foi notificado aguarde o contato!')

        emailjs.send(
            serviceId,
            templateId,
            templateParams,
           {
             publicKey: publicKey,
           }
        )

        gtag.event({
          action:'form_submit',
          category: 'Form Submit',
          label: 'Simulation form',
          value:2,
          page_location: window.location.href
        })
       
            setTimeout(() => {
                if(refSummary.current){
                    refSummary.current.style.display = 'none'

                }
            window.location.href = '/'
            }, 1000);
        }
      


      const nextStep = () => {
        if(formData.type!=='' && formData.value!=='' && formData.financedValue!=='' && currentStep===0){
          setCurrentStep(currentStep + 1);
        }else if(formData.type!=='' && formData.value!=='' && formData.name!=='' && formData.phone!=='' && formData.email.match(/@.*\./) && formData.date!=='' && currentStep===1){
            setType(formData.type)
            setValue(formData.value)
            setFinancedValue(formData.financedValue)
            setName(formData.name)
            setEmail(formData.email)
            setPhone(formData.phone)
            setBirthday(fullDate)
          if(refSummary.current){
            refSummary.current.style.display ='block'
          }
        }else{   
      }
    }

    function closeSummary(){
    if(refSummary.current)refSummary.current.style.display='none'
    }

    const steps = [
        <FirstForm handleChange={handleChange} data={formData} key={'null'} buttonEvent={nextStep}/>,
        <SecondForm handleChange={handleChange} data={formData} key={'null'} simulateEvent={nextStep} backStep={prevStep}/>
    ]

    useEffect(()=>{
        document.title = 'Simulação'
    },[])

    return(
        <>
            <main className={styles.main}>
        <h1 tabIndex={5}>Simule seu financiamento</h1>
        <h2 tabIndex={6}>Encontre a Melhor Opção para Realizar o Sonho da Casa Própria em Poucos Minutos</h2>

        <div className={styles.steps}>
            {currentStep===0?(
             <div className={styles.stepActive}>
             <h3>1</h3>
             <p>Dados de financiamento</p>
             </div>
            ):(
             <div className={styles.step}>
                 <h3>1</h3>
                 <p>Dados de financiamento</p>
             </div>
            )}

            {currentStep===1?(
             <div className={styles.stepActive}>
             <h3>2</h3>
             <p>Dados pessoais</p>
             </div>
            ):(
            <div className={styles.step}>
            <h3>2</h3>
            <p>Dados pessoais</p>
            </div>
            )}
            

           
        </div>
        
        <div>
        {steps[currentStep]}
        </div>
    
        <article ref={refSummary}>
            <h3 tabIndex={11}>Resumo financiamento</h3>
            <p tabIndex={12}>Tipo de financiamento: {type}</p>
            <p tabIndex={13}>Valor do imóvel: {value}</p>
            <p tabIndex={14}>Valor financiado: {financedValue}</p>
            <p tabIndex={15}>Nome: {name}</p>
            <p tabIndex={16}>Email: {email}</p>
            <p tabIndex={17}>Telefone: {phone}</p>
            <p tabIndex={18}>Data de nascimento: {birtday}</p>
            <div>
                <button tabIndex={19} aria-label="Botão que fecha o modal e te permite alterar suas informações" onClick={closeSummary}>Alterar informações</button>
                <button onClick={confirmSendEmail}
                tabIndex={20} aria-label="Botão que finaliza a simulação,e te leva para a pagina home, aguarde que um consultor nosso ira entrar em contato."
                >Confirmar</button>
            </div>
        </article>
        </main>
        </>
        
    )
}