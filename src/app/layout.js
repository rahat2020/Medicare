import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import dynamic from 'next/dynamic'
import { Montserrat } from 'next/font/google';
import { Suspense } from "react";
import Topbar from "@/components/Home/Topbar";
import GoToTop from "@/UI/GotoTop";
const Footer = dynamic(() => import('@/components/Home/Footer'), { ssr: false })

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: "Appointment Schedule",
  description: "A Healthcare Appointment Scheduling project is designed to allow patients to book, reschedule, or cancel appointments with healthcare providers. It can include user authentication, appointment management, notifications, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <NextTopLoader color="#3B82F6" crawlSpeed={5} showSpinner={false} speed={5} />
        <Suspense fallback={null}>
          <Topbar />
          {children}
          <GoToTop/>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
