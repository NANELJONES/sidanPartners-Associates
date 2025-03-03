import localFont from "next/font/local";
import {Poppins}  from "next/font/google"
import "./globals.css";
import { Public_Sans } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NextTopLoader from 'nextjs-toploader';
import Loading from "./components/Loading"
import {ReactLenis}  from  "./utils/Lenis"
import { StateContext } from "./Context/StateContext";
import "react-toastify/dist/ReactToastify.css";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const primary_text = Public_Sans({
  subsets:["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})


export const metadata = {
  title: "Sidan Associates and Partners",
  description: "Best Constructin Company in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`font- ${primary_text.className}`} >
        <Loading>
      <StateContext> 
      <NextTopLoader 
      />
            <Nav/> 
            <ReactLenis root>
            {children}
            </ReactLenis>
            <Footer/>
        </StateContext>
        </Loading>

      </body>
    </html>
  );
}
