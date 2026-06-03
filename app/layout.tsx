import type { Metadata } from "next";
import { Inter, Exo_2 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const exo2 = Exo_2({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Thiago Rodrigues | Especialista em TI N3 | Infraestrutura & Cloud",
  description:
    "Especialista em TI Nível 3 com 28 anos de experiência em infraestrutura corporativa de missão crítica, cloud híbrida (Azure/AWS/GCP), virtualização (VMware/Proxmox/Hyper-V) e cibersegurança. Disponível para novas oportunidades, palestras e podcasts tech.",
  keywords: [
    "Thiago Rodrigues",
    "Especialista TI N3",
    "Infraestrutura Corporativa",
    "Cloud Azure",
    "Cibersegurança",
    "VMware Proxmox Hyper-V",
    "Zabbix",
    "ITIL COBIT",
    "CyberArk",
    "Missão Crítica",
    "Virtualização",
  ],
  authors: [{ name: "Thiago Rodrigues" }],
  openGraph: {
    title: "Thiago Rodrigues | Especialista em TI N3",
    description:
      "28 anos de carreira em missão crítica, cloud híbrida e cibersegurança. Disponível para podcasts, palestras e novas oportunidades.",
    type: "website",
    locale: "pt_BR",
    siteName: "Thiago Rodrigues TI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Rodrigues | Especialista em TI N3",
    description:
      "28 anos de carreira em missão crítica, cloud e cibersegurança.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${exo2.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
