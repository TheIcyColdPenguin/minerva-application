import Head from 'next/head';
import styles from '@/styles/SingleArticle.module.css';
import { useEffect, useState } from 'react';
import type { Article as ArticleType } from '@prisma/client';
import { useRouter } from 'next/router';

export default function Articles() {
    const router = useRouter();
    const [article, setArticle] = useState<ArticleType | null>(null);

    useEffect(() => {
        async function getArticle() {
            const { article: articleId } = router.query as { article: string };
            try {
                if (!articleId) return console.error('No article id');
                const res = await fetch('/api/getSingleArticle?article=' + articleId);
                const article: ArticleType = await res.json();
                setArticle(article);
            } catch {
                console.error('Error getting article');
            }
        }

        getArticle();
    }, [router.query]);

    return (
        <>
            <Head>
                <title>{article?.title}</title>
                <meta name="description" content="Articles" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {article && (
                <main className={styles.container} onLoad={(e) => e.currentTarget.classList.add('appear')}>
                    <h1>{article.title}</h1>
                    <span>
                        {article.genre} | {article.author}
                    </span>
                    <br />
                    <span>
                        {new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(new Date(article.timestamp))}
                    </span>
                    <div className={styles.image}>
                        <img src={article.image || ''} alt="" />
                    </div>
                    <pre>
                        <p>{article.content}</p>
                    </pre>
                </main>
            )}
        </>
    );
}
