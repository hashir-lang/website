import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CTABanner from "@/components/sections/CTABanner";
import Chatbot from "@/components/Chatbot";
import { useReveal } from "@/hooks/use-reveal";

interface Props {
  children: ReactNode;
  hideCta?: boolean;
}

const PageLayout = ({ children, hideCta }: Props) => {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Header />
      <main className="flex-1">{children}</main>
      {!hideCta && <CTABanner />}
      <Footer />
      <Chatbot />
    </div>
  );
};

export default PageLayout;
