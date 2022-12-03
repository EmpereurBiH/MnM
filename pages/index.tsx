import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MnM</title>
        <meta name="description" content="MnM next canvassing app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to MnM
        </h1>

        <p className={styles.description}>
          Get started 
        </p>

        <div className={styles.grid}>
        <a
            href="https://dashboard.back4app.com/apidocs/B8tSdJS9DuAQVWQEBtBe8QP2UgfwVuREKyffsMlf#introduction"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about MnM API.</p>
          </a>

          <Link href="/address"
            className={styles.card}>        
            <h2>Create a route</h2>
            <p>
              Create a route using the external API
            </p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
