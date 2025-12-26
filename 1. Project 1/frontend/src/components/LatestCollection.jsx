import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    let productsCopy = products.slice(0, 10);
    
    // Apply search filter only if search has text
    if (showSearch && search.trim()) {
      productsCopy = products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ).slice(0, 10);
    }
    
    setLatestProducts(productsCopy);
  }, [products, search, showSearch]);

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-center">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs text-muted sm:text-sm md:text-base">
          Discover our newest arrivals! Browse through our carefully selected collection of quality products at great prices.
        </p>
      </div>

      {/* Rendering Product Items */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      
      {showSearch && search.trim() && latestProducts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No products found matching "{search}"</p>
        </div>
      )}
    </div>
  );
};

export default LatestCollection;