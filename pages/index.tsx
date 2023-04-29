import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Form from '@/components/Form';

export default function Home() {
    return (
        <>
            <Head>
                <title>Minerva</title>
                <meta name="description" content="Article upload form" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={styles.heading}>Upload an article</h1>
            <main className={styles.main}>
                <Form />
            </main>
        </>
    );
}
