import MainHeader from "@/components/main-header/main-header";
import "./globals.css";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import { generateMetadata } from "./meals/[mealsSlug]/page";


export const metadata = {
  title: "All Meals",
  description: "The purpose of this project is to fulfill the portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
