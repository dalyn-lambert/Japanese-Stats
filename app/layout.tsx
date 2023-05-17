import './globals.css';

export const metadata = {
  title: "Cinder's Corner",
  description: 'Japanese Study Stats',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-background'>{children}</body>
    </html>
  );
}
