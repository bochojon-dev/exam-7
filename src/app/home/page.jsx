import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import React from "react";
import { getData } from "@/fetch";
import Adidas from "@/components/adidas/Adidas";
import Icons from "@/components/icons/Icons";
import News from "@/components/news/News";
import Featured from "@/components/featured/Featured";

const HomePage = async () => {
  let data = await getData("/products?limit=8&skip=9");
  return (
    <>
      <Hero />
      <Products data={data} title={"BEST SELLER"} />
      <Adidas />
      <Icons />
      <News />
      <Featured />
    </>
  );
};

export default HomePage;
