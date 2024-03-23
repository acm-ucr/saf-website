/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lora } from "next/font/google";
// eslint-disable-next-line camelcase
import { Libre_Bodoni } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  varible: "--font-lora",
});
const libre = Libre_Bodoni({
  subsets: ["latin"],
  display: "swap",
  varible: "--font-libre",
});

export const metadata = {
  title: "SAF at UCR",
  description: "South Asian Federation Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${libre.variable}`}>
      <body>
        <Navigation />
        <div className="w-full flex flex-col bg-saf-beige-100 items-center justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
