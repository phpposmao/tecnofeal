import type React from "react"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import localFont from "next/font/local"

const belfastGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/BelfastGroteskLight.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/BelfastGroteskRegular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/BelfastGroteskSemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/BelfastGroteskBold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/BelfastGroteskBlack.ttf",
      weight: "900",
    },
  ]
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "Tecnofeal",
  description: "Tecnofeal"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${belfastGrotesk.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
