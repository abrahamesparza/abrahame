import "./globals.css";

export const metadata = {
  title: "Abraham Esparza",
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
