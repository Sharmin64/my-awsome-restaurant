import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
  const desh = useLoaderData()
  console.log(desh);
  return (
    <div>
      <h2>this is food home</h2>
    </div>
  );
};

export default FoodDetails;