import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instadocu — Installation Document Management Platform",
  description: "Instadocu eliminates document chaos for electricians, plumbers and construction teams. Manage project files, share client portals instantly, and keep your entire team aligned.",
  keywords: ["installation documents", "construction", "document management", "Instadocu"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Instadocu — Installation Document Management Platform",
    description: "All your installation documents in one fixed place.",
    type: "website",
    locale: "en_NL",
    siteName: "Instadocu",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
