import Head from 'next/head'
import Image from 'next/image'
import styles from "../../styles/Home.module.css";
import { useLoadScript } from "@react-google-maps/api"


export default function AddressAPI() {

    const{ isLoaded } = useLoadScript ({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    })

if (isLoaded) return <div>loading...</div>
  return (
    <div className={styles.container}>
      <Head>
        <title>MnM</title>
        <meta name="description" content="MnM Address API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to MnM Address API
        </h1>
        
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
