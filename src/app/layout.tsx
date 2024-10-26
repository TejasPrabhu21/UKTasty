import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/auth/authProvider";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const geistMont = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  variable: "--font-geist-mont",
  weight: "100 900",
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Udipi Kinara Tasty",
  description: "Food Delivery App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="jI_12UAqARkym4oeZGitF0_a1O77NWPfdqQJN81Opvs"
        />
        <meta
          name="google-site-verification"
          content="AedGMOoYobY0kpN0Cn6FeOdyATaGQpImqao992VrYhs"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistMont.variable} ${inter.className} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
