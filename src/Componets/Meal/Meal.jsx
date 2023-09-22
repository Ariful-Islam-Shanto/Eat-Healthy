import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Meal = ({ meal}) => {
  
  const {
    idMeal : id,
    strMealThumb: image,
    strInstructions: instructions,
    strArea: origin,
    strTags: foodName,
  } = meal;

  const navigate = useNavigate();

  const handleRecipe = () => {
    navigate(`/showRecipe/${id}`)
  }
  return (
    <div className="bg-[#f7f8f8] shadow-md rounded-md p-4  flex flex-col gap-8  items-center ">
      <img className="w-96 object-cover rounded-lg" src={image} alt="" />
      <div className="text-left space-y-4 flex-grow flex flex-col">
        <p className="">{instructions.slice(0, 50)} <small>see more..</small></p>
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
        
        <h1 className="flex-grow  text-2xl font-bold text-black">{foodName !== null ? foodName.slice(0, 10) : 'Burger'}</h1>
        <button onClick={handleRecipe} className=" btn bg-[#2da116] text-white">Show Recipe</button>
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.object,
};

export default Meal;
