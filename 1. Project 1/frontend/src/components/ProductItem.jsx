import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-on-bg cursor-pointer group block" to={`/product/${id}`}>
      <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-card border border-gray-100 hover:border-brand">
        <div className="bg-gradient-to-br from-purple-50 to-amber-50 p-4">
          <img
            className="transition-transform duration-500 group-hover:scale-110 w-full h-48 object-cover rounded-xl"
            src={image[0]}
            alt="Product"
          />
        </div>
        <div className="p-4 space-y-2">
          <p className="text-sm font-medium truncate text-gray-700">{name}</p>
          <p className="text-lg font-bold text-brand">
            {currency}{price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;