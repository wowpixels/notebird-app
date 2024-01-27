import React from "react";
import Heading from "./_components/Heading";
import Sketch from "./_components/Sketch";
import Footer from "./_components/Footer";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Sketch />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;