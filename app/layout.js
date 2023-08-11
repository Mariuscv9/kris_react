import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'dotenv/config'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CK Nails Studio",
  description: "Experimentează rafinamentul și eleganța serviciilor de manichiură și pedichiură pe care le ofer în București. Ofer o gamă variată de tratamente pentru unghii, într-un ambient relaxant. Descoperă servicii personalizate ce redau frumusețea mâinilor și picioarelor tale la cel mai înalt nivel.",
  keywords:"manichiura, pedichiura, unghii",
  author:"Marius Enache"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
