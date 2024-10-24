import React from 'react';
import { useParams } from 'react-router-dom';
import { IMG_URL } from '../Utility/Data';
import DetailShimmer from '../Shimmer UI/DetailShimmer';
import GetMenu from './GetMenu';
import useRestaurantDetails from '../hooks/useRestaurantDetails';
import DealsForYou from "./DealsForYou"
import TopPicks from "./TopPicks"
import { FaStar } from 'react-icons/fa';

export default function RestaurantMenuDetails() {
  const { id } = useParams();
  const restaurantDetail = useRestaurantDetails(id);
 

  if (restaurantDetail === null) return <DetailShimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    avgRating,
    cloudinaryImageId
  } = restaurantDetail?.cards[2]?.card?.card?.info;

  const deliveryTime = restaurantDetail?.cards[2]?.card?.card?.info?.sla?.slaString;
  const discount = restaurantDetail?.cards[2]?.card?.card?.info.aggregatedDiscountInfo?.descriptionList[0]?.meta;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Restaurant Header Section */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden items-center px-5 gap-x-10">
        <img
          src={IMG_URL + cloudinaryImageId}
          alt={name}
          className="w-full md:w-1/3 h-[230px] object-contain rounded-lg"
        />
        <div className="p-6 flex-1">
          <h1 className="text-4xl font-bold mb-2">{name}</h1>
          <p className="text-lg text-gray-600 mb-2">🍴 Cuisines: {cuisines.join(', ')}</p>
          <p className="text-lg text-gray-600 mb-2">🏢 Address: {locality}</p>
          <p className="text-lg text-gray-600 mb-2">🪙 Cost for Two: {costForTwoMessage}</p>
          <p className="text-lg text-gray-600 mb-2 flex items-center gap-1">
          <FaStar className='inline bg-green-500 text-white px-1 rounded-full'/> Average Rating: {avgRating}  </p>
          <p className="text-lg text-gray-600 mb-2">⏰ Delivery Time:{deliveryTime}</p>
          {discount && (
            <p className="text-lg text-green-600 font-semibold mb-2">✂️Discount: {discount}</p>
          )}
        </div>
      </div>

      <DealsForYou resInfo = {restaurantDetail}/>
      <TopPicks resInfo = {restaurantDetail} />

      {/* Menu Section */}
      <div className="mt-10 ">
        <h2 className="text-3xl font-semibold mb-4 text-center ">Menu</h2>
        <GetMenu restaurant={restaurantDetail} />
      </div>
    </div>
  );
}
