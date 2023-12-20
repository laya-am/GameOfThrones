import Head from 'next/head'
import styles from "../styles/Home.module.css"


export default function Home() {
  return (
    <>
      <Head>
        <title>Game of Thrones</title>
        <meta name="description" content="A website of all houses and characters in Game of Thrones and their quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className={styles.title}>Game of Thrones</h1>
    </>
  )
}
