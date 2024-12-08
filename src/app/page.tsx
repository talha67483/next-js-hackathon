import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Companies from "@/components/Companies/Companies";
import Product from "@/components/ProductSection/Product";
import TopSection from "@/components/TopSection/TopSection";
import Explore from "@/components/ExploreSection/Explore";
import OurProducts from "@/components/OurProducts/OurProducts";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Product />
      <TopSection />
      <Explore />
      <OurProducts />
    </div>
  );
};

export default page;
