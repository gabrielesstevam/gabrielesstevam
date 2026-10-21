import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import "./globals.css";
import SideRays from "../components/SideRays/SideRays";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Poppins } from "next/font/google";
import PageTransition from "../components/PageTransition/PageTransition"

export const metadata: Metadata = {
  title: "Portfólio | Gabriel Estevam",
  description: "Desenvolvedor Front-End Júnior",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children, }: { children: ReactNode; }) {

    return (
      <html
        lang="pt-BR"
        className={cn("h-full antialiased")}
      >
        <body className={`min-h-screen ${poppins.className} min-h-screen flex flex-col`}>
          <div className="side-rays-background">
            <SideRays
              rayColor1="#f000d1"
              rayColor2="#c860ff"
              origin="top-right"
              speed={3.5}
              intensity={2}
              spread={2.35}
              density={4.5}
              followMouse
              blend={0.6}
              sharpness={0.5}
              tilt={0}
              falloff={1.5}
              glow={1}
              saturation={1}
              dust={0.16}
              mouseInfluence={0.5}
              intro
              lightMode={false}
              opacity={1}
            />
          </div>
          <div className="site-content">

            <Header/>
            <main className="">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <Footer/>
        
          </div>
        </body>
      </html>
    );
  }
