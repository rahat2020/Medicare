import "./globals.css";
import { Montserrat } from 'next/font/google';

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
        {children}
      </body>
    </html>
  );
}
