import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import "dotenv/config";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
<link rel="icon" href="/favicon.png" sizes="any" />;
export const metadata = {
  title: "Salon de manichiura si pedichiura Bucuresti",
  description:
    "Ofer o gamă variată de tratamente pentru unghii, într-un ambient relaxant in Bucuresti. Descoperă servicii personalizate ce redau frumusețea unghiilor tale la cel mai înalt nivel.",
  author: "Marius Enache",
  google_site_verification:"btxmvWxwgbC7H6r8MKPJywG2Nvi-_OtB4s5-j25Mjv0"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
