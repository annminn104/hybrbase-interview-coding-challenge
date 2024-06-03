import type { Metadata } from 'next';
import RootProvider from './provider';

export const metadata: Metadata = {
  title: 'Hybrbase technical challenge',
  description: 'Hybrbase technical challenge'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
