import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="bg-light-brown">
        <Navbar />
      </div>
      <main>{children}</main>
      <div className="bg-light-brown py-20 flex flex-col justify-center min-h-[80vh] md:py-4">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
