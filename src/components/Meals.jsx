import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Meals = () => {
  const deshes = useLoaderData()
  console.log(deshes);
  return (
    <div className='text-7xl font-semibold text-cyan-500 text-center mt-96'>
      <h2>Eat me {deshes.meals.length}</h2>
    </div>
  );
};

export default Meals;