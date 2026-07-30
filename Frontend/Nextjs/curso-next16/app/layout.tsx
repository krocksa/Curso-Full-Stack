import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curso Next.js 16",
  description: "Aprendiendo Next.js desde cero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
