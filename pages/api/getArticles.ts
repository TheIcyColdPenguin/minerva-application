import { Article, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Article[] | { message: string }>) {
    if (req.method !== 'GET') {
        res.status(405).send({ message: 'Method Not Allowed' });
        return;
    }

    const articles = await prisma.article.findMany();

    res.status(200).json(articles);
}
