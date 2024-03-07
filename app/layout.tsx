import './globals.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Job Interview",
  description: "A tracker of job interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
    <body className={`${inter.className} antialiased`}>{children}</body>
  </html>
  );
}
