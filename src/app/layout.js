import { Header } from "@/Header"
import {Footer} from "@/Footer"
import {Menu} from "@/Menu"
import "./globals.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Menu/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
