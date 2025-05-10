import { warnOptionHasBeenDeprecated } from "next/dist/server/config";

// app/layout.js
export const metadata = {
    title: 'Lotto App',
    description: 'A simple Lotto number generator app',

    other: {
      'google-site-verification':'<meta name="google-site-verification" content="725UNBR54P2G55WwD53J7CTu5ngwcFYblgp2LVYl9n8" /> ',
      
    },
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
  