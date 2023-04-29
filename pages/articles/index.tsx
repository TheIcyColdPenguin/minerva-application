import Head from 'next/head';
import styles from '@/styles/Articles.module.css';
import { useEffect, useState } from 'react';
import type { Article as ArticleType } from '@prisma/client';
import Article from '@/components/Article';

export default function Articles() {
    const [articles, setArticles] = useState<ArticleType[]>([]);

    useEffect(() => {
        async function getArticles() {
            try {
                const res = await fetch('/api/getArticles');
                const articles = await res.json();
                setArticles(articles);
                console.log('ok', articles);
            } catch {
                console.error('Error getting articles');
            }
        }

        getArticles();
    }, []);

    return (
        <>
            <Head>
                <title>Minerva Articles</title>
                <meta name="description" content="Articles" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.container}>
                {articles?.length ? (
                    articles.map((article, i) => <Article key={i} article={article} />)
                ) : (
                    <h1>No articles found</h1>
                )}
            </main>
        </>
    );
}
