import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "신여진 | Full-Stack Developer",
  description: "신여진의 풀스택 개발자 포트폴리오",
  openGraph: {
    title: "신여진 | Full-Stack Developer",
    description: "신여진의 풀스택 개발자 포트폴리오",
    images: [{ url: "/screenshot1.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
