import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://amanahin.vercel.app'), // 👈 your app's domain, not image CDN
  title: "Better Auth Starter",
  description: "A simple demo authentication app with Better Auth, Drizzel ORM, @neondatabase/serverless by ichsankurnia",
  applicationName: 'Better Auth Starter',
  authors: [{ name: 'ichsankurnia', url: 'https://www.linkedin.com/in/ichsan-kurniawan-b850a3192' }],
  creator: 'ichsankurnia',
  publisher: 'ichsankurnia',
  keywords: ['Better Auth', 'better-auth', 'Drizzel ORM', 'drizzel-orm', '@neondatabase/serverless', 'Next.js', 'React', 'JavaScript', 'Typescript'],
  openGraph: {
    title: "Better Auth Starter",
    description: "A simple demo authentication app with Better Auth, Drizzel ORM, @neondatabase/serverless by ichsankurnia",
  },
  twitter: {
    title: "Better Auth Starter",
    description: "A simple demo authentication app with Better Auth, Drizzel ORM, @neondatabase/serverless by ichsankurnia",
  },
  pinterest: {
    richPin: true
  },
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.variable} antialiased font-jakarta text-sm`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
