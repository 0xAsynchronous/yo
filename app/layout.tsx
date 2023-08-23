import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Alumni_Sans } from "next/font/google";
import CRT from "./CRT";
import Grid from "./Grid";

const megaman = localFont({ src: "./mega-man-10.otf" });
const ambitsek = localFont({
  src: "./ambitsek.ttf",
  variable: "--font-ambitsek",
});
const alumniSans = Alumni_Sans({
  subsets: ["latin"],
  variable: "--font-alumni-sans",
});

export const metadata: Metadata = {
  title: "Yield Optimizor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-black text-white ${megaman.className} ${ambitsek.variable} ${alumniSans.variable}`}
      >
        <Grid />
        <CRT />
        {children}
      </body>
    </html>
  );
}
