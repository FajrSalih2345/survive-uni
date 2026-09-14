import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Survive Uni - College Survival Simulator',
  description: 'Balance your money, time, and sanity to survive the semester!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
