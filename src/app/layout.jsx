import { Navbar } from "components/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "NextMongo",
  description: "NextMongo is a simple app to manage tasks.",
}

function RootLayout({ children }) {
  return (
    <html>
      <head>
      <link href="https://css.gg/css" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main className="px-5 md:px-0 container mx-auto">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
