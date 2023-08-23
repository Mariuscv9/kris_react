import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import "dotenv/config";

const inter = Inter({ subsets: ["latin"] });
<link rel="icon" href="/favicon.png" sizes="any" />;
export const metadata = {
  title: `Salon de manichiura si pedichiura Bucuresti`,
  description:`Ofer o gamă variată de tratamente pentru unghii, într-un ambient relaxant in Bucuresti. Descoperă servicii personalizate ce redau frumusețea unghiilor tale la cel mai înalt nivel.`,
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
