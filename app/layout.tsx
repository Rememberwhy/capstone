import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Capstone",
  description: "Digital agency building brands, websites, and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}