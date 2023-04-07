import React from 'react';
import { useLoaderData } from 'react-router-dom';

//import Food from './Food';

const Meals = () => {
  //const {meals} = useLoaderData()
  const {meals} = useLoaderData()
  console.log(meals);
  return (
    <div className=' grid lg:grid-cols-4 sm:grid-cols-2 container-fluid mx-auto  text-xl font-semibold text-cyan-500 text-center mt-10 gap-5 '>
      {
      meals?.map(desh => <Food
          key={desh.idMeal}
          desh={desh}
        ></Food>)
     }
    </div>
  );
};

export default Meals;