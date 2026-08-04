import type { Metadata } from "next";
import "./globals.css";

const title = "董慕含｜行业研究与战略咨询";
const description =
  "董慕含的个人主页，展示行业研究、战略咨询、审计与数据分析相关经历。";

export const metadata: Metadata = {
  metadataBase: new URL("https://yoyo-crawling.github.io/"),
  title,
  description,
  icons: {
    icon: "/profile.jpg",
    shortcut: "/profile.jpg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/og.png", width: 1728, height: 909, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
