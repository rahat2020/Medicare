import ProductBanner from "@/UI/CommonBanner";
import ProductsContainer from "@/UI/ProductsContainer";
import { viewedProducts, popularProducts, recentProducts } from "@/data/productData";
import React from "react";

const Products = () => {
  return (
    <>
      <ProductBanner
        title="Doctors Prescribe Products"
        routeName="Products"
        customStyles="h-[550px]"
      />
      <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
        <ProductsContainer products={viewedProducts} category={"Most Viewed Products"} />
        <ProductsContainer products={popularProducts} category={"Popular Products"} />
        <ProductsContainer products={recentProducts} category={"Recent Products"} />
      </div>
    </>
  );
};

export default Products;
