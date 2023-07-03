import "./globals.css";
import Navigation from "./components/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My First app with Next 13</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
