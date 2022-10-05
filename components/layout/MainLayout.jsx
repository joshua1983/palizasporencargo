import Head from 'next/head'
import React from 'react'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

const MainLayout = ({children}) => {

    return (
        <div className={styles.container}>
          <Head>
            <title>Home App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="keywords" content="prueba, test"></meta>
          </Head>
    
          <Navbar></Navbar>
    
          <main className={styles.main}>
            {children}
          </main>
        </div>
      )
}

export default MainLayout