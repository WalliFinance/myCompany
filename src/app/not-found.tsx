'use client'
import type { Metadata } from "next";
import style from './error.module.scss'
import Link from "next/link";


export const metadata: Metadata = {
    title: "Página não encontrada 404",
}

export default function NotFound(){    
  return (
        <main className={style.container}>
          <div>
           <p>Página não encontrada</p>
           <h1>404</h1>
           <p><Link href={'/'}>Para voltar a pagina principal clique aqui</Link></p>
          </div>
        </main>
  )
}
