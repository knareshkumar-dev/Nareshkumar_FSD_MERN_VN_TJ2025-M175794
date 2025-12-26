import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    let bestProducts = products.filter((item) => item.bestseller);
    
    // Apply search filter only if search has text
    if (showSearch && search.trim()) {
      bestProducts = bestProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    setBestSeller(bestProducts.slice(0, 5));
  }, [products, search, showSearch]);

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-center">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs text-muted sm:text-sm md:text-base">
          Check out our most popular products! These customer favorites offer unbeatable quality and value.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      
      {showSearch && search.trim() && bestSeller.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No bestsellers found matching "{search}"</p>
        </div>
      )}
    </div>
  );
};

export default BestSeller;