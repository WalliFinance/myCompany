'use client'

import FirstForm from "@/src/components/FirstForm/page";
import SecondForm from "@/src/components/SecondForm/page";
import { useState } from "react";

export default function Simulacao(){
    const [currentStep,setCurrentStep] = useState(0)
    return(
        <>
        <head>
            <title>Simulação</title>
        </head>
        <h1>Simule seu financiamento</h1>
        <h2>Encontre a Melhor Opção para Realizar o Sonho da Casa Própria em Poucos Minutos</h2>

        <div>
            <div>
                <div>1</div>
                <p>Dados de financiamento</p>
            </div>

            <div>
                <div>2</div>
                <p>Dados pessoais</p>
            </div>
        </div>
        
        {currentStep===0 && 
        <div> 
        <FirstForm/>
        </div>}

        {currentStep===1 && 
        <div> 
        <SecondForm/>
        </div>}

        <article>
            <h3>Resumo financiamento</h3>
        </article>
        </>
    )
}