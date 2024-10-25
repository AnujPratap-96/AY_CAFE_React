import { IMG_URL } from "../Utility/Data";

function useExtractFoodItems(data) {
  const foodItemsByCategory = {};

  const cards = data.cards;

  cards.forEach((card) => {
    const cardGroupMap = card.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    
    cardGroupMap.forEach((itemCard) => {
      const itemCategory = itemCard.card?.card?.title;
      const itemCards = itemCard.card?.card?.itemCards || [];
  
      itemCards.forEach((item) => {
        const itemInfo = item.card?.info;
        if (itemInfo) {
          const foodItem = {
            id: itemInfo.id, // Added id
            name: itemInfo.name,
            description: itemInfo.description, // Added description
            price: itemInfo.price / 100 || Math.floor(itemInfo.id / 1000),
            isVeg: itemInfo.itemAttribute?.vegClassifier === 'VEG',
            rating: itemInfo.ratings?.aggregatedRating?.rating || '4.0',
            imageUrl: itemInfo.imageId ? `${IMG_URL}${itemInfo.imageId}` : null // Corrected image URL concatenation
          };
          
          // Group food items by category
          if (!foodItemsByCategory[itemCategory]) {
            foodItemsByCategory[itemCategory] = [];
          }
          foodItemsByCategory[itemCategory].push(foodItem);
        }
      });
    });
  });

  return foodItemsByCategory;
}

export default useExtractFoodItems;
