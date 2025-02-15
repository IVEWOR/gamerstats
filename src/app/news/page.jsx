import prisma from "@/lib/prisma";
import Header from "@/components/Header";
import Link from "next/link";

export default async function NewsPage() {
    const articles = await prisma.article.findMany({
        where: { published: true },
        include: {
            author: true,
            category: true,
        },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div>
            <Header />
            <main className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-semibold mb-10 mt-4 px-2">Latest Esports and Gaming News</h1>
                {articles.length === 0 ? (
                    <p>No news articles found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article) => (
                            <div key={article.id} className="shadow rounded border-b border-primary py-4 px-2">
                                <h2 className="text-xl font-medium mb-2">
                                    <Link
                                        href={`/news/${article.id}`}
                                        className="border-b border-transparent hover:border-gray-100 w-max"
                                    >{article.title}</Link>
                                </h2>
                                <p className="text-sm mb-2">
                                    {new Date(article.createdAt).toLocaleDateString()} by{" "}
                                    {article.author?.name || "Unknown"}
                                </p>
                                <p className="mb-2">
                                    {article.content.substring(0, 100)}...
                                </p>
                                <p className="mt-4 text-xs uppercase text-gray-400">
                                    {article.category?.name || "Uncategorized"}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
