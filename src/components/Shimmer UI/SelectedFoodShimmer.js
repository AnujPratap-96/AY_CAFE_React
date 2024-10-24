const SelectedFoodShimmer = () => {
  return (
    <div className="mt-5 px-4 sm:px-6 lg:px-10 mx-auto flex flex-wrap flex-col">
      {/* Shimmer Header */}
      <div className="my-3 w-full md:w-1/4 lg:w-1/2 p-3 bg-gradient-to-t mx-auto md:ml-4 from-gray-300 shadow-lg rounded-xl animate-pulse">
        <div className="bg-white rounded-xl p-3">
          <div className="h-8 bg-gray-300 rounded w-2/3 mb-3"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>

      {/* Shimmer Section Title */}
      <h2 className="text-2xl sm:text-3xl mx-auto md:ml-4 font-Poppins font-semibold mt-7 mb-5">
        Restaurants to Explore
      </h2>

      {/* Shimmer Cards */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:ml-4">
        {/* Repeating shimmer cards for the loading state */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <div
            key={index}
            className="w-full md:w-[48%] lg:w-[30%] xl:w-[24%] p-4 animate-pulse"
          >
            <div className="bg-gray-300 h-48 rounded-lg"></div>
            <div className="mt-4">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedFoodShimmer;
