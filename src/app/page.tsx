'use client'
import Presentation from "../components/Presentation/page";
import Modalyts from "../components/Modalyts/page";
import Benefits from "../components/Benefits/page";
import Banks from "../components/Banks/page";
import { useEffect } from "react";


export default function Home() {
  useEffect(()=>{
    document.title = 'Home'
  })
  return (
    <>
    <Presentation/>
     <Modalyts/>
     <Banks/>
     <Benefits/>
    </>
  );
}
