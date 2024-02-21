import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);

  // filter food
  const filterByType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter food by price
  const filterByPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 text-4xl font-bold text-center">
        Top Rated Menu Items
      </h1>

      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between w-full">
        {/* filter by type */}
        <div>
          <p className="font-bold text-gray-700">Filter By Type</p>
          <div className="flex flex-wrap justify-between">
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => setFoods(data)}
            >
              All
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterByType("burger")}
            >
              Burger
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterByType("pizza")}
            >
              Pizza
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterByType("salad")}
            >
              Salads
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
              onClick={() => filterByType("chicken")}
            >
              Chicken
            </button>
          </div>
        </div>

        {/* filter by price */}
        <p className="font-bold text-gray-700">Filter By Price</p>
        <div className="flex justify-between max-w-[390px]">
          <button
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            onClick={() => filterByPrice("$")}
          >
            $
          </button>
          <button
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            onClick={() => filterByPrice("$$")}
          >
            $$
          </button>
          <button
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            onClick={() => filterByPrice("$$$")}
          >
            $$$
          </button>
          <button
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            onClick={() => filterByPrice("$$$$")}
          >
            $$$$
          </button>
          
        </div>
      </div>

      {/* display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 pt-4 gap-6">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white rounded-full px-1">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
