import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Kursus from "../components/Kursus";
import Navbar from "../components/Navbar";
import TentangKami from "../components/TentangKami";
import Ulasan from "../components/Ulasan";
import WelcomePage from "../components/WelcomePage";
import styles from "../styles/Home.module.css";
import Whatsapp from "../components/Whatsapp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Juara Belajar Indo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <WelcomePage />
      <TentangKami />
      <Kursus />
      <Whatsapp />
      <Ulasan />
      <Faq />
      <Footer />
    </>
  );
}
