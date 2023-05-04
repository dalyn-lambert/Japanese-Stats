import './globals.css';

export const metadata = {
  title: "Cinder's Corner",
  description: 'Japanese Study Stats',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col items-center justify-between'>{children}</body>
    </html>
  );
}
