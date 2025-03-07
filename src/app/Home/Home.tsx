import Hero from "@/components/Hero/Hero";
import Companies from "@/components/Companies/Companies";
import Product from "@/components/ProductSection/Products";
import TopSection from "@/components/TopSection/TopSection";
import Explore from "@/components/ExploreSection/Explore";
import OurProducts from "@/components/OurProducts/OurProducts";

const page = () => {
  return (
    <div className=" text-[#272343]   ">
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
