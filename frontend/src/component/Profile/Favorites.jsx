import React from 'react';
import RestaurantCard from '../Restaurant/RestaurantCard';
import { useSelector } from 'react-redux';

export default function Favorites() {
  const { auth } = useSelector(store => store);

  // Check if auth or auth.favorites is undefined before mapping
  const favoriteRestaurants = auth && auth.favorites ? auth.favorites : [];

  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
      <div className='flex flex-wrap gap-3 justify-center'>
        {favoriteRestaurants.map((item, index) => (
          <RestaurantCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
