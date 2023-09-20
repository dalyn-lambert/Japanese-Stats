import './globals.css';

export const metadata = {
  title: "Cinder's Corner",
  description: 'Japanese Study Stats',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-background grid grid-flow-col'>
        {/* <div>
          <div className='sticky top-0'>
            <TaskBar />
          </div>
        </div> */}
        {children}
      </body>
    </html>
  );
}
