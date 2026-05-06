import { Rubik, Hanken_Grotesk, Covered_By_Your_Grace } from "next/font/google";
import "../styles/globals.css";

const rubik = Rubik({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: '900',
});

const hanken = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ['300', '600', '900'],
});
const grace = Covered_By_Your_Grace({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${hanken.variable} ${grace.variable}`}>
      <body>{children}</body>
    </html>
  );
}
