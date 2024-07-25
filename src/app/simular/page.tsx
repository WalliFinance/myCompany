'use client'

import FirstForm from "@/src/components/FirstForm/page";
import SecondForm from "@/src/components/SecondForm/page";
import { useEffect, useRef, useState } from "react";
import styles from './styles/simular.module.scss'
import Inner from "@/src/components/Inner/lnner";

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

    function closeSummary(){
    if(refSummary.current)refSummary.current.style.display='none'
    }

    function showModal(){
    if(refSummary.current)refSummary.current.style.display='block'
    }

    useEffect(()=>{
        document.title = 'Simulação'
    },[])

    return(
        <>
            <main className={styles.main}>
        <h1>Simule seu financiamento</h1>
        <h2>Encontre a Melhor Opção para Realizar o Sonho da Casa Própria em Poucos Minutos</h2>

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
        
        {currentStep===0?(
        <div> 
        <FirstForm/>
        </div>
        ):(
        <div>
        <SecondForm/>
        </div>
        )}
    
        <article ref={refSummary}>
            <h3>Resumo financiamento</h3>
            <p>Tipo de financiamento: {type}</p>
            <p>Valor do imóvel: {value}</p>
            <p>Nome: {name}</p>
            <p>Email: {email}</p>
            <p>Telefone: {phone}</p>
            <p>Data de nascimento: {birtday}</p>
            <div>
                <button onClick={closeSummary}>Alterar informações</button>
                <button>Confirmar</button>
            </div>
        </article>
        </main>
        </>
        
    )
}