// app/layout.js
export const metadata = {
    title: 'Lotto App',
    description: 'A simple Lotto number generator app',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  