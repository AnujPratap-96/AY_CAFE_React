import { useSearchParams , Link } from "react-router-dom";
import { useGetSelectedFoodCards } from "../hooks/useGetSelectedFoodCards";
import RestaurantCard from "../Body/RestaurantCard";
import SelectedFoodShimmer from "../Shimmer UI/SelectedFoodShimmer"

const SelectedFoodPage = () => {
  const [searchParams] = useSearchParams();
  const collect_id = searchParams.get("collectionID");
  const [header, allCards] = useGetSelectedFoodCards(collect_id);

  const filteredCards = allCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );



  return allCards.length === 0 ? <SelectedFoodShimmer/> : (
    <div className="mt-5 px-4 sm:px-6 lg:px-10 mx-auto flex flex-wrap flex-col">
      {/* Header Section */}
      <div className="my-3 w-full md:w-fit p-3 bg-gradient-to-t mx-auto md:ml-4 from-gray-300 shadow-lg rounded-xl">
        <div className="bg-white rounded-xl p-3">
          <h1 className="font-Poppins text-2xl sm:text-3xl font-semibold text-gray-900">
            🍚 {header.title}
          </h1>
          <h3 className="font-poppins text-lg sm:text-xl text-slate-700">
            {header.description}
          </h3>
        </div>
      </div>

      {/* Restaurant List Header */}
      <h2 className="text-2xl sm:text-3xl mx-auto md:ml-4 font-Poppins font-semibold mt-7 mb-5">
        Restaurants to Explore{" "}
      </h2>

      {/* Restaurant Cards */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:ml-4">
        {filteredCards.map((resCard , ind) => (
         <Link to={"/restaurant/" + resCard?.card?.card?.info?.id}
        key={resCard?.card?.card?.info?.id} 
         >
          <RestaurantCard
            Data={resCard?.card?.card?.info}
            
            className="w-full md:w-[48%] lg:w-[30%] xl:w-[24%]"
          />
         </Link>
        ))}
      </div>
    </div>
  );
};

export default SelectedFoodPage;
