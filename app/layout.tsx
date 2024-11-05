import type { Metadata } from "next";
import "remixicon/fonts/remixicon.css";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import localfont from "next/font/local";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "TROIKA",
  description: "Created by Radwan and Ahmed",
};

const AxiformaBold = localfont({
  src: [
    {
      path: "../public/fonts/Axiforma-Bold.ttf",
    },
  ],
  variable: "--font-axiformaBold",
});
const AxiformaMedium = localfont({
  src: [
    {
      path: "../public/fonts/Axiforma-Medium.ttf",
    },
  ],
  variable: "--font-axiformaMedium",
});
const AxiformaRegular = localfont({
  src: [
    {
      path: "../public/fonts/Axiforma-Regular.ttf",
    },
  ],
  variable: "--font-axiformaRegular",
});
const AxiformaLight = localfont({
  src: [
    {
      path: "../public/fonts/Axiforma-Light.ttf",
    },
  ],
  variable: "--font-axiformaLight",
});
const MontserratVariableFontWght = localfont({
  src: [
    {
      path: "../public/fonts/Montserrat-VariableFont_wght.ttf",
    },
  ],
  variable: "--font-montserratVariableFontWght",
});
const RalewayMedium = localfont({
  src: [
    {
      path: "../public/fonts/Raleway-Medium.ttf",
    },
  ],
  variable: "--font-raleway-Medium",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth	scroll-mt-5">
      <body
        className={cn(
          AxiformaBold.variable,
          AxiformaLight.variable,
          AxiformaMedium.variable,
          AxiformaRegular.variable,
          MontserratVariableFontWght.variable,
          RalewayMedium.variable,
          "font-AxiformaMedium"
          // "font-AxiformaRegular"
          // "font-AxiformaLight"
          // "font-AxiformaBold"
          // "font-MontserratVariableFontWght"
          // "font-RalewayMedium"
          //  .......
          // whenever you want to use the font 
        )}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
