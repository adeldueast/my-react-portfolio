import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./../components/Navbar/Navbar";
import Layout from "./../components/Layout/Layout";
import Header from "./../components/Header/Header";
import About from "./../components/About/About";
import Projects from "./../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Side from "./../components/Side/Side";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Adel Kouaou</title>
        <meta name="My oortfolio" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <Layout>
        <Side side={"left"} />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Side side={"right"} />
      </Layout>
      <Footer />
    </div>
  );
}
