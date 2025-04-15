import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCPServer.digital | 专业Minecraft服务器托管",
  description: "MCPServer.digital提供高性能、可靠且经济实惠的Minecraft服务器托管解决方案，帮助您轻松建立和管理您的Minecraft社区。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <head>
        <link rel="canonical" href="https://mcpserver.digital" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="minecraft,服务器托管,minecraft服务器,游戏服务器,mc服务器" />
        <meta property="og:title" content="MCPServer.digital | 专业Minecraft服务器托管" />
        <meta property="og:description" content="MCPServer.digital提供高性能、可靠且经济实惠的Minecraft服务器托管解决方案，帮助您轻松建立和管理您的Minecraft社区。" />
        <meta property="og:image" content="https://mcpserver.digital/og-image.jpg" />
        <meta property="og:url" content="https://mcpserver.digital" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
