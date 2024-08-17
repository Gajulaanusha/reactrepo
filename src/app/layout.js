import {Footer} from "@/Footer"
import {Menu} from "@/Menu"

import "./globals.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
