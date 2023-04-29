import { Article, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Article | null | { message: string }>) {
    if (req.method !== 'GET') {
        res.status(405).send({ message: 'Method Not Allowed' });
        return;
    }

    const article = await prisma.article.findFirst({
        where: { id: Number(req.query.article) },
    });

    res.status(200).json(article);
}
