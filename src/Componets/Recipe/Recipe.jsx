import React from "react";
import { useLoaderData } from "react-router-dom";

const Recipe = () => {
  const meal = useLoaderData();
  const {
    idMeal : id,
    strMealThumb: image,
    strInstructions: instructions,
    strArea: origin,
    strTags: foodName,
  } = meal.meals[0];


  return (
    <>
    <div className="w-3/4 ">
      <div className="bg-black shadow-md rounded-md p-4  flex gap-8  items-center ">
        <img className="w-96 object-cover rounded-lg" src={image} alt="" />
        <div className="text-left space-y-4 flex-grow flex flex-col">
          <p className="text-white">
            {instructions.slice(0, 200)} <small>see more..</small>
          </p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>

          <h1 className="flex-grow  text-2xl font-bold text-white">
            {foodName !== null ? foodName.slice(0, 10) : "Burger"}
          </h1>
          <button
            className=" btn border-none bg-[#2da116] text-white"
          >
            Show Recipe
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Recipe;
