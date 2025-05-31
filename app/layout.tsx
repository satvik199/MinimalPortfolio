import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"],
  display: "swap",
  weight:['400' , '500' , '700']
 });

export const metadata: Metadata = {
  title: "Satvik Yadav - Web Developer",
  description: "Portfolio website of Satvik Yadav, a Junior Web Developer",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <div className="fixed inset-0 w-full z-10"> {/* Changed to z-0 */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            poster="/bg-poster1.png"
            className="w-full h-full object-cover object-center"
          >
            <source src="/5700949-uhd_3840_2160_25fps.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>
        </div>
        <div className="relative z-10"> {/* Content above video */}
          {children}
        </div>
      </body>
    </html>
  );
}