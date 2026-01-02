import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gestão Pessoal - Controle sua vida em um único sistema",
  description:
    "Sistema SaaS para organizar finanças, rotina, treinos e alimentação com IA e lembretes inteligentes."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-dark text-slate-100`}>{children}</body>
    </html>
  );
}
