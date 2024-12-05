import React from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ category, products }) => {
  return (
    <div className="space-y-8">
      <h3 className="text-18 font-semibold">{category}</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
