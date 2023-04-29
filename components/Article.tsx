import styles from '@/styles/Articles.module.css';
import type { Article as ArticleType } from '@prisma/client';
import Link from 'next/link';

export default function Article({ article }: { article: ArticleType }) {
    return (
        <Link href={`/articles/${article.id}`}>
            <div className={styles.article}>
                <img alt="article image" src={article.image || ''} />
                <h2>{article.title}</h2>
                <span>
                    {article.genre} | {article.author}
                </span>
            </div>
        </Link>
    );
}
