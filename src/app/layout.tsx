import { Cinzel, Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const headingFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const displayFont = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const bodyFont = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
