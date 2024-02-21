import React from "react";
import { categories } from "../data/data.js";

const Category = () => {
  console.log(categories);
  return (
    <div className="p-4 max-w-[1640px] mx-auto py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg flex justify-between items-center p-4">
            <h2 className="font-bold sm:text-2xl">{item.name}</h2>
            <img src={item.image} alt="/" className="w-20"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
