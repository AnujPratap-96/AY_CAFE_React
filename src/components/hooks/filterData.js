export function filterData(searchInput, resList) {
    return resList.filter((res) => {
      // Convert the search input to lowercase for case-insensitive matching
      const lowerCaseInput = searchInput.toLowerCase();
  
      // Extract restaurant name, cuisines, and food information
      const restaurantName = res?.info?.name?.toLowerCase() || "";
      const cuisines = res?.info?.cuisines?.join(" ")?.toLowerCase() || ""; // assuming cuisines is an array
      const foodItems = res?.info?.foodItems?.join(" ")?.toLowerCase() || ""; // assuming foodItems is an array
  
      // Check if the search input matches any of the criteria (name, cuisines, or food items)
      return (
        restaurantName.includes(lowerCaseInput) ||
        cuisines.includes(lowerCaseInput) ||
        foodItems.includes(lowerCaseInput)
      );
    });
  }
  