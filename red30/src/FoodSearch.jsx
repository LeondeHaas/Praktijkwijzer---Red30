import React, { useState } from "react";
import axios from "axios";

const FoodSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  const handleSearchChange = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    try {
      const response = await axios.get(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${term}&api_key=K4aj9cFIwZbnbfjuL5w2b2wLmlFtPGoY5kDXjURR`
      );

      setSearchResults(response.data.foods);
    } catch (error) {
      console.error("Error searching for foods:", error);
    }
  };

  const handleFoodSelect = async (fdcId) => {
    try {
      const response = await axios.get(
        `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=K4aj9cFIwZbnbfjuL5w2b2wLmlFtPGoY5kDXjURR`
      );

      const { description, foodNutrients } = response.data;
      setSelectedFood({ description, foodNutrients });
    } catch (error) {
      console.error("Error fetching food details:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {searchResults.map((food) => (
          <li key={food.fdcId}>
            {food.description}{" "}
            <button onClick={() => handleFoodSelect(food.fdcId)}>
              Select
            </button>
          </li>
        ))}
      </ul>
      {selectedFood &&
  selectedFood.foodNutrients &&
  selectedFood.foodNutrients.length > 0 ? (
    <div className="nutrient-container">
      <h2>{selectedFood.description}</h2>
      <ul>
        {selectedFood.foodNutrients.map((nutrient) => (
          <li key={nutrient.id}>
            {nutrient.nutrient.name}: {nutrient.amount} {nutrient.nutrient.unitName}
          </li>
        ))}
      </ul>
    </div>
  ) : null}
    </div>
  );
};

export default FoodSearch;
