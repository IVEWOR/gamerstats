"use client";

import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
    return (
        <header className="border-b text-white py-4 px-6">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    GamerStats
                </Link>
                <Sheet>
                    <SheetTrigger>
                        <svg xmlns="http://www.w3.org/2000/svg" title="Menu" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="text-left mb-2">Menu</SheetTitle>
                            <nav className="grid gap-2 text-left">
                                <Link href="/" className="border-b border-transparent hover:border-gray-500 w-max">
                                    Home
                                </Link>
                                <Link href="/news" className="border-b border-transparent hover:border-gray-500 w-max">
                                    News
                                </Link>
                                <Link href="/categories" className="border-b border-transparent hover:border-gray-500 w-max">
                                    Categories
                                </Link>
                                <Link href="/about" className="border-b border-transparent hover:border-gray-500 w-max">
                                    About
                                </Link>
                                <Link href="/contact" className="border-b border-transparent hover:border-gray-500 w-max">
                                    Contact
                                </Link>
                            </nav>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
