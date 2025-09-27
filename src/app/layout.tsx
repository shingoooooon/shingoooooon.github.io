import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Shingo Kubomura - Full-Stack Developer",
  description: "Portfolio of Shingo Kubomura, a Full-Stack Developer with Digital marketing background",
  keywords: ["Full-Stack Developer", "Portfolio", "React", "Next.js", "TypeScript", "Vue.js"],
  authors: [{ name: "Shingo Kubomura" }],
  openGraph: {
    title: "Shingo Kubomura - Full-Stack Developer",
    description: "Portfolio of Shingo Kubomura, a Full-Stack Developer with Digital marketing background",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        />
        <link
          rel="stylesheet"
          type='text/css'
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${oswald.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}