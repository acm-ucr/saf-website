/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lora } from "next/font/google";
// eslint-disable-next-line camelcase
import { Libre_Bodoni } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });
const libre = Libre_Bodoni({ subsets: ["latin"] });

export const metadata = {
  title: "SAF at UCR",
  description: "South Asian Federation Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${libre.variable}`}>
        <Navigation />
        <div className="w-full flex flex-col items-center justify-center mt-16 md:mt-[8vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
