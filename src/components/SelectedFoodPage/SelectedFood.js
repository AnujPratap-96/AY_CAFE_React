import { useSearchParams, Link } from "react-router-dom";
import { useGetSelectedFoodCards } from "../hooks/useGetSelectedFoodCards";
import RestaurantCard from "../Body/RestaurantCard";
import SelectedFoodShimmer from "../Shimmer UI/SelectedFoodShimmer";
import { useSelector } from "react-redux"; // Importing useSelector

const SelectedFoodPage = () => {
  const [searchParams] = useSearchParams();
  const collect_id = searchParams.get("collectionID");
  const [header, allCards] = useGetSelectedFoodCards(collect_id);
  const theme = useSelector((store) => store.sidebar.theme); // Accessing theme from Redux

  const filteredCards = allCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  return allCards.length === 0 ? (
    <SelectedFoodShimmer />
  ) : (
    <div className="mt-5 px-4 sm:px-6 lg:px-10 mx-auto flex flex-wrap flex-col">
      {/* Header Section */}
      <div
        className="my-3 w-full md:w-fit p-3 bg-gradient-to-t mx-auto md:ml-4 shadow-lg rounded-xl"
        style={{ backgroundColor: theme.backgroundColor }} // Updated background color
      >
        <div className=" rounded-xl p-3">
          <h1 className="font-Poppins text-2xl sm:text-3xl font-semibold" style={{ color: theme.textColor }}>
            🍚 {header.title}
          </h1>
          <h3 className="font-poppins text-lg sm:text-xl" style={{ color: theme.subtextColor }}>
            {header.description}
          </h3>
        </div>
      </div>

      {/* Restaurant List Header */}
      <h2 className="text-2xl sm:text-3xl mx-auto md:ml-4 font-Poppins font-semibold mt-7 mb-5" style={{ color: theme.textColor }}>
        Restaurants to Explore{" "}
      </h2>

      {/* Restaurant Cards */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:ml-4">
        {filteredCards.map((resCard, ind) => (
          <Link to={"/restaurant/" + resCard?.card?.card?.info?.id} key={resCard?.card?.card?.info?.id}>
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
