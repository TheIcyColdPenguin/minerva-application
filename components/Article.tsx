import styles from '@/styles/Articles.module.css';
import type { Article as ArticleType } from '@prisma/client';
import Link from 'next/link';

export default function Article({ article }: { article: ArticleType }) {
    const date = new Date(article.timestamp);
    const formattedDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(date);
    return (
        <Link href={`/articles/${article.id}`}>
            <div className={styles.article}>
                <img
                    alt="article image"
                    src={article.image || ''}
                    onError={(e) => (e.currentTarget.src = '/news.png')}
                />
                <h2>{article.title}</h2>
                <span>
                    {article.genre} | {article.author}
                </span>
                <span>{formattedDate}</span>
            </div>
        </Link>
    );
}
