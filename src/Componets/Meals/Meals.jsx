import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    
    const meals = useLoaderData();
    const ArrayMeals = meals.meals
    console.log(ArrayMeals);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12 w-3/4 py-8 bg-[#e9f2f3]'>
            {
                ArrayMeals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Meals;