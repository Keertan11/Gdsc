import localFont from "next/font/local";
import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/Authcontext";
import Logout from "@/components/Logout";

const Fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

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

export const metadata = {
  title: "Broodl-Kpi Dashboard",
  description: "Gdsc Submission",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={'/'}>
        <h1 className={'text-2xl textGradient sm:text-2xl  ' + Fugaz.className}>Broodl</h1>
      </Link>
      <Logout />
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={'text-indigo-500 ' + Fugaz.className}>Created with ❤️</p>
    </footer>
  )

  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full max-w-[1000px] min-h-screen mx-auto text-sm sm:text-base h-fit flex flex-col text-slate-800  bg-indigo-100 ` + `Fugaz.className`}>
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
