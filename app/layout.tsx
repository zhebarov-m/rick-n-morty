import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "@/app/StoreProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Рик и Морти",
    description: "Generated by create next app",
    icons: {
        icon: ['https://rick-i-morty.com/wp-content/uploads/2021/08/favicon.png'],
        shortcut: ['https://rick-i-morty.com/wp-content/uploads/2021/08/favicon.png']
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

        <body className={inter.className}>
        <StoreProvider>
            <Header/>
            <main className="container">
                {children}
            </main>
            <Footer/>
        </StoreProvider>
        </body>
        </html>
    );
}
