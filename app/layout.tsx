import type {Metadata} from "next";
import "./_styles/globals.css";
import {LenisProvider} from "./_components/Provider/LenisProvider";
import {GsapProvider} from "./_components/Provider/GsapProvider";
import {Bebas_Neue, Roboto} from "next/font/google";
import Header from "./_components/OnWebComponents/Header";

export const metadata: Metadata = {
    title: "Khoa Phan Playground",
    description: "Khoa Phan's Playground",
};

const bebasNeue = Bebas_Neue({
    variable: "--font-bebasNeue",
    weight: ["400"],
    subsets: ["latin"],
});
const roboto = Roboto({
    variable: "--font-roboto",
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${bebasNeue.variable} ${roboto.variable} antialiased`}>
                <LenisProvider>
                    <Header />
                    {children}
                </LenisProvider>
                <GsapProvider scrollTrigger />
            </body>
        </html>
    );
}
