import Footer from "@/component/Footer";
import Header from "@/component/Header";
import React from "react";

const LoyoutHome = ({ children }) => {
  return (
    <main
      style={{
        backgroundColor: "rgba(244, 242, 237, 1)",
      }}
    >
      <Header />
      {children}

      <Footer />
    </main>
  );
};

export default LoyoutHome;
