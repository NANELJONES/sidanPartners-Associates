import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Public_Sans } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NextTopLoader from 'nextjs-toploader';
import Loading from "./components/Loading";
import { ReactLenis } from "./utils/Lenis";
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
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Sidan Associates and Partners",
  description:
    "Sidan Associates and Partners is a leading design to construction company in Ghana, offering expert architectural design, sustainable building solutions, and real estate development. We specialize in luxury homes, industrial, commercial buildings, urban planning, and mixed-use developments in Ghana.",
  keywords: [
    
    "Architecture Ghana",
    "Architects in Ghana",
    "Construction companies Ghana",
    "Building design Ghana",
    "House plans Ghana",
    "Real estate development Ghana",
    "Sustainable architecture Ghana",
    "Luxury homes Ghana",
    "Mixed-use development",
    "Commercial buildings Ghana",
    "Urban planning Ghana",
    "Interior design Ghana",
    "Structural engineering Ghana",
    "Property investment Ghana",
    "Home construction Ghana",
    "Best residential architects in Ghana",
    "Modern house designs in Ghana",
    "How to build a luxury home in Ghana",
    "Affordable house plans in Ghana",
    "Energy-efficient home designs Ghana",
    "Where to find a home architect in Ghana",
    "Custom home designs for Ghanaian terrain",
    "Commercial building architects in Ghana",
    "Best architects for office buildings in Ghana",
    "Mixed-use development trends in Ghana",
    "Designing retail spaces in Accra",
    "High-rise building construction in Ghana",
    "Industrial park design and construction Ghana",
    "Sustainable architecture firms in Ghana",
    "How to design an eco-friendly home in Ghana",
    "Solar-powered home designs in Ghana",
    "Best green building practices for Ghana",
    "Energy-efficient office buildings in Ghana",
    "How to reduce energy costs with smart architecture",
    "How to invest in real estate in Ghana",
    "Best locations to build commercial properties in Ghana",
    "Future of urban development in Accra",
    "Construction laws and permits in Ghana",
    "Mixed-use real estate projects in Ghana",
    "Best construction firms in Ghana for large-scale projects",
    "How to manage a construction project in Ghana",
    "End-to-end design and build services in Ghana",
    "Finding reliable building contractors in Ghana",
    "Top architecture and construction firms in Accra",
    "How to design a modern warehouse in Ghana",
    "Best industrial architects in Ghana",
    "Cost-effective warehouse construction in Ghana",
    "Factory and manufacturing plant designs in Ghana",
    "Smart logistics centers in Ghana",
    "Future of industrial real estate in Africa",
    "Warehouse automation and smart logistics solutions",
    "Best hotel architects in Ghana",
    "How to design a boutique hotel in Ghana",
    "Trends in hospitality architecture in Ghana",
    "How to make hotels energy-efficient in Africa",
    "Best resort designs for the African market",
    "How to maximize guest experience through architecture",
    "Eco-friendly hotels and lodges in Ghana",
    "Best locations for new resorts in Ghana",
    "How to buy property in Ghana from abroad",
    "Best places for expatriates to live in Ghana",
    "Real estate investment opportunities for the Ghanaian diaspora",
    "How to supervise construction projects from overseas",
    "Ghana’s most profitable property investment areas",
    "Navigating land ownership laws in Ghana",
    "Exchange rates and real estate investment in Ghana",
    "How to ensure quality construction while living abroad",
    "Understanding real estate taxes in Ghana",
    "How to design a modern office space in Ghana",
    "Best coworking spaces in Accra",
    "How to increase productivity with office design",
    "Smart office designs in Ghana",
    "Cost of setting up an office in Accra",
    "Modern retail store designs for Ghanaian businesses",
    "How to create a luxury shopping experience in Ghana",
    "How architecture impacts business branding",
    "Urban planning challenges in Ghana",
    "Best practices for city development in Ghana",
    "Future of smart cities in Africa",
    "How to improve infrastructure in Ghana",
    "Ghana’s top urban development projects",
    "Road construction projects in Ghana 2025",
    "Government policies affecting real estate in Ghana",
    "How to reduce construction costs in Ghana",
    "Best materials for home construction in Ghana",
    "Construction project timeline management in Ghana",
    "Common mistakes to avoid when building in Ghana",
    "Best eco-friendly homes in Ghana",
    "How to design a green building in Ghana",
    "Solar-powered homes in Accra",
    "Ghana’s sustainable architecture trends",
    "How to reduce energy costs with sustainable design",
    "Best materials for green buildings in Ghana",
    "Water-efficient home designs in Ghana",
    "How to achieve LEED certification in Ghana",
    "Energy-efficient home designs Ghana",
    "The future of sustainable construction in Africa"
    
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Sidan Associates and Partners" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-70RLG4EBY0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-70RLG4EBY0');
            `,
          }}
        />

      </head>
      <body className={`font- ${primary_text.className}`}>
        <Loading>
          <StateContext>
            <NextTopLoader />
            <Nav />
            <ReactLenis root>{children}</ReactLenis>
            <Footer />
          </StateContext>
        </Loading>
      </body>
    </html>
  );
}
