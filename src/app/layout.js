import Nav from "./components/nav";
import "./globals.css";

export const metadata = {
  title: "MWA",
  description: "Created by Mishael Enyi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
