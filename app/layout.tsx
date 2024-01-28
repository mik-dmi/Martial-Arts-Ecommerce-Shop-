import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "@/app/providers/card_provider/Card_Provider";
import { Chat } from "./components/chat/Chat";
import AIBotProvider from "./providers/chat_provider/Provider";
  

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martial Gear",
  description: "A Martial Arts online shop ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-[100vh]">
          <Navbar />
          
          {children}
          </div>
        </Providers>
          <AIBotProvider>
          
            <Chat />
            
          </AIBotProvider>
         
        
        
      </body>
    </html>
  );
}