import React from "react";
import ComponentHeader from "@/UI/ComponentHeader";
import { viewedProducts } from "@/data/productData";
import AppButton from "@/UI/AppButton";
import OurProductCard from "@/UI/OurProductCard";

const OurProducts = () => {
  return (
    <>
      <ComponentHeader title="Products" desc="Get doctors prescribed products" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {viewedProducts.slice(0, 4)?.map((product) => (
          <OurProductCard key={product.id} product={product} />
        ))}
      </div>
      <AppButton
        href="/products"
        text="View More"
        customStyles="w-fit mx-auto border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
      />
    </>
  );
};

export default OurProducts;
