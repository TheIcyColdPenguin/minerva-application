import styles from '@/styles/Articles.module.css';
import type { Article as ArticleType } from '@prisma/client';

export default function Article({ article }: { article: ArticleType }) {
    return (
        <div className={styles.article}>
            <img alt="article image" src={article.image || ''} />
            <h2>{article.title}</h2>
            <span>
                {article.genre} | {article.author}
            </span>
        </div>
    );
}
