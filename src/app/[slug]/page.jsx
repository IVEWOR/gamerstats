import prisma from "@/lib/prisma";
import Header from "@/components/Header";
import Link from "next/link";

export default async function SingleNewsPage({ params }) {
    const { slug } = await params;

    const article = await prisma.article.findUnique({
        where: { slug },
        include: {
            author: true,
            category: true,
        },
    });

    // Optional: handle article not found
    if (!article) {
        return (
            <div>
                <Header />
                <main className="container mx-auto py-8 px-4">
                    <h1 className="text-3xl font-semibold mb-10 mt-4 px-2">Article not found</h1>
                </main>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <main className="container max-w-[660px] mx-auto py-8 px-4">
                <h1 className="text-3xl font-semibold mb-2 mt-4 px-2">
                    {article.title}
                </h1>
                <div className="shadow rounded border-b border-primary py-4 px-2">
                    {article.imageUrl && (
                        <img
                            src={"https://placehold.co/640x360"}
                            alt={article.title}
                            className="rounded-md w-full h-auto mb-4"
                        />
                    )}
                    <p className="text-sm mb-2">
                        {new Date(article.createdAt).toLocaleDateString()} by{" "}
                        {article.author?.name || "Unknown"}
                    </p>
                    <p className="mb-2">{article.content}</p>
                    <p className="mt-4 text-xs uppercase text-gray-400">
                        {article.category?.name || "Uncategorized"}
                    </p>
                </div>
            </main>
        </div>
    );
}
