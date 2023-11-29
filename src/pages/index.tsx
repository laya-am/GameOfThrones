import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Game of Thrones</title>
        <meta name="description" content="A website of all houses and characters in Game of Thrones and their quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="" /> */}
      </Head>
      {/* <main className={`${styles.main} ${inter.className}`}> */}
    </>
  )
}
