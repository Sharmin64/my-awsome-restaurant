import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
 const [fold,setFold] =useState(true)
  const desh = useLoaderData()
  const {strArea,strCategory,strInstructions ,strMeal,strMealThumb,strTags}=desh.meals[0]
  //console.log(desh.meals[0]);
  return (
    <div className='my-container'>
    {/* Container Box */}
    <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
      {/* Image Container */}
      <div className=' lg:w-1/2 h-full'>
        <img
          src={strMealThumb}
          alt='food menu'
          className='object-cover w-full  lg:h-full'
        />
      </div>
      {/* Details Container */}
      <div className=' p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
        <div>
          <p className='badge'>New Dishes</p>
        </div>
        <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
          {strMeal}
        </h5>
        <p className=' text-gray-900'>{strTags}</p>
        <p className=' text-gray-900'>Continent: {strArea}</p>
        <p className='mb-5 text-gray-900'>Food Category: {strCategory}</p>
        {fold ? (
          <>
            <p className=' text-gray-500 overflow-hidden h-auto'>{strInstructions.substring(0, 100)}.....</p>
            <span
              className='cursor-pointer text-blue-600 '
              onClick={() => setFold(false)}
            >
              Read More
            </span>
          </>
        ) : (
          <>
            <p className=' text-gray-900 overflow-hidden'>{strInstructions}.....</p>
            <span
              className='cursor-pointer text-blue-600 '
              onClick={() => setFold(true)}
            >
              Read Less
            </span>
          </>
        )}

      </div>
    </div>
  </div>
  );
};

export default FoodDetails;