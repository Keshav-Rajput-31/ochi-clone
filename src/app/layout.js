import "./globals.css";
import Navigation from "@/Components/Navigation";

export const metadata = {
  title: "ochi clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-[#f1f1f1]">
        <Navigation/>
        {children}
        </body>
    </html>
  );
}
