import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({ desh }) => {
  const {strMeal, strMealThumb,strArea,strInstructions,strCategory}=desh
  return (
    <Link to={`../desh/${desh.idMeal}`}>
       <div className='card rounded-md border-2 border-y-cyan-400 overflow-hidden relative transition duration-200 transform hover:-translate-y-4 shadow-lg hover:shadow-2xl'>
      <img className='object-cover p-6 rounded-xl' src={strMealThumb} alt="" />
      <h3>{strArea}</h3>
      <p>{strMeal}</p>
      <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-400 flex flex-col'>
        <p>{strMeal}</p>
        <br />
        <p>{strCategory}</p>
        <br />
        <p>{strInstructions.substring(0,150)}...</p>
      </div>
    </div>
    </Link>
  );
};

export default Food;