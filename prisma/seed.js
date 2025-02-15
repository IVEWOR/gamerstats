// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Create categories
    const gamingCategory = await prisma.category.create({
        data: { name: 'Gaming', slug: 'gaming' },
    });
    const esportsCategory = await prisma.category.create({
        data: { name: 'Esports', slug: 'esports' },
    });

    // Create users
    const alice = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@example.com',
        },
    });
    const bob = await prisma.user.create({
        data: {
            name: 'Bob',
            email: 'bob@example.com',
        },
    });

    // Create articles
    await prisma.article.createMany({
        data: [
            {
                title: 'Latest Gaming News',
                slug: 'latest-gaming-news',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
                published: true,
                authorId: alice.id,
                categoryId: gamingCategory.id,
            },
            {
                title: 'Esports Championship Overview',
                slug: 'esports-championship-overview',
                content:
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                published: false,
                authorId: bob.id,
                categoryId: esportsCategory.id,
            },
            {
                title: 'Guide to Pro Gaming',
                slug: 'guide-to-pro-gaming',
                content:
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                published: true,
                authorId: alice.id,
                categoryId: gamingCategory.id,
            },
        ],
    });

    console.log('Seed data created successfully.');
}

main()
    .catch((error) => {
        console.error('Error seeding data:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
