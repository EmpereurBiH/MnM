import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {

    //Set up SWR to run the fetcher function when calling "/api/staticdata"
    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
    const { data, error } = useSWR('/api/staticdata', fetcher);
    console.log("data:",data)
    console.log(typeof data)
    console.log(typeof obj)
      //Handle the error state
    if (error) return <div>Failed to load</div>;
      //Handle the loading state
    if (!data) return <div>Loading...</div>;
      //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

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
        <h2>
          {data.campaign.name}
        </h2>

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
            <h2>See a map</h2>
            <p>
              First map received from google map api
            </p>
          </Link>
          <Link href="/polylinesmap"
            className={styles.card}>        
            <h2>Create a campaign</h2>
            <p>
              Draw a polygon on a google map
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
