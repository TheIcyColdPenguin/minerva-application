import { Article, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ article: Article } | { message: string }>
) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Method Not Allowed' });
        return;
    }
    const formData = req.body;
    const article = await prisma.article.create({
        data: { ...formData },
    });

    res.status(200).json({ article });
}
