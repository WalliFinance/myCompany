import Image from "next/image";
import styles from "./page.module.scss";
import Presentation from "../components/Presentation/page";
import Modalyts from "../components/Modalyts/page";
import Benefits from "../components/Benefits/page";
import Banks from "../components/Banks/page";

export default function Home() {
  return (
    <>
      <head>
        <title>Home</title>
      </head>
     <Presentation/>
     <Modalyts/>
     <Banks/>
     <Benefits/>
    </>
  );
}
