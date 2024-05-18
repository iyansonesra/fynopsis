import { APP_TITLE } from "@/lib/constants";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import { Header } from "./_components/header";
import { CardBottom } from "./_components/cards";
import { Footer } from "./_components/footer";
import bg from "src/components/background3.png";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: "A Next.js starter with T3 stack and Lucia auth.",
};

function LandingPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Header />
        {children}
        <div className="h-20"></div>
      </div>

      <CardBottom />
    </>
  );
}

export default LandingPageLayout;
