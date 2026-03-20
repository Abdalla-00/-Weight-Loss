import React from "react";
import { Search } from "lucide-react";

const RecipDescrip = () => {
  return (
    <div className="bg-[#22C55E]  h-[439px] mt-4 flex flex-col justify-center items-center gap-y-3">
      <div className="text-center  max-w-[700px] mx-auto text-white">
        <h1 className="text-4xl md:text-5xl font-bold">
          Delicious & Nutritious Recipes
        </h1>
        <p className="my-6 ">
          Discover healthy, flavorful recipes and master essential cooking
          techniques to transform your meals and nourish your body.
        </p>

        <div className="flex flex-col md:flex-row gap-6 relative md:pl-24 px-2">
          <input
            type="text"
            placeholder="    Search recipes..."
            className="bg-white text-gray-500 outline-0 px-6 py-3 rounded-full"
          />
          <Search
            size={18}
            className="absolute md:left-28 md:top-1/2 md:-translate-y-2 text-gray-500 top-4 left-6"
          />
          <button className="bg-[#FAA432] hover:bg-white hover:text-[#22C55E]   px-6 py-3 rounded-full cursor-pointer transition duration-300 ease-in-out">
            Find Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipDescrip;
