'use client'

import Image from "next/image";
import styles from "./page.module.scss";
import Presentation from "../components/Presentation/page";
import Modalyts from "../components/Modalyts/page";
import Benefits from "../components/Benefits/page";
import Banks from "../components/Banks/page";
import Head from 'next/head';
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    document.title = 'Home'
  })
  return (
    <>
    <div>
    <Presentation/>
     <Modalyts/>
     <Banks/>
     <Benefits/>
    </div>
    </>
  );
}
