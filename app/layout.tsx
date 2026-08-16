import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { PostHogIdentify } from "@/components/analytics/PostHogIdentify";
import { createInsforgeServer } from "@/lib/insforge-server";

import "./globals.css";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "JobPilot | Your job search co-pilot",
    description: "Find stronger job matches and apply with confidence.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const insforge = await createInsforgeServer();
    const {
        data: { user },
    } = await insforge.auth.getCurrentUser();

    return (
        <html lang="en" className={`${inter.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                {user ? (
                    <PostHogIdentify
                        email={user.email}
                        id={user.id}
                        name={user.profile?.name}
                    />
                ) : null}
                {children}
            </body>
        </html>
    );
}
