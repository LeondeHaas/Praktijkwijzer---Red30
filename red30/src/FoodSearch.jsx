import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";

const FoodSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFood1, setSelectedFood1] = useState(null);
  const [selectedFood2, setSelectedFood2] = useState(null);

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

  const handleFoodSelect1 = async (fdcId) => {
    try {
      const response = await axios.get(
        `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=K4aj9cFIwZbnbfjuL5w2b2wLmlFtPGoY5kDXjURR`
      );

      const { description, foodNutrients } = response.data;
      setSelectedFood1({ description, foodNutrients });
    } catch (error) {
      console.error("Error fetching food details:", error);
    }
  };

  const handleFoodSelect2 = async (fdcId) => {
    try {
      const response = await axios.get(
        `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=K4aj9cFIwZbnbfjuL5w2b2wLmlFtPGoY5kDXjURR`
      );

      const { description, foodNutrients } = response.data;
      setSelectedFood2({ description, foodNutrients });
    } catch (error) {
      console.error("Error fetching food details:", error);
    }
  };

  const calculateCalorieDifference = () => {
    if (
      selectedFood1 &&
      selectedFood1.foodNutrients &&
      selectedFood1.foodNutrients.length > 0 &&
      selectedFood2 &&
      selectedFood2.foodNutrients &&
      selectedFood2.foodNutrients.length > 0
    ) {
      const calories1 = selectedFood1.foodNutrients.find(
        (nutrient) => nutrient.nutrient.name === 'Energy'
      );
      const calories2 = selectedFood2.foodNutrients.find(
        (nutrient) => nutrient.nutrient.name === 'Energy'
      );

      if (calories1 && calories2) {
        const difference = calories2.amount - calories1.amount;
        return difference;
      }
    }
    return null;
  };

  return (
    <>
      <Header />
      <div className='search-container'>
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={handleSearchChange}
          className='search-input'
        />

        <div className='results-container'>
          <div className='search-results'>
            {searchResults.map((food) => (
              <div key={food.fdcId} className='search-result-item'>
                {food.description}{" "}
                <button onClick={() => handleFoodSelect1(food.fdcId)} className='select-button'>
                  Select
                </button>
                <button onClick={() => handleFoodSelect2(food.fdcId)} className='select-button'>
                  Compare
                </button>
              </div>
            ))}
          </div>

          {selectedFood1 &&
            selectedFood1.foodNutrients &&
            selectedFood1.foodNutrients.length > 0 ? (
              <div className="nutrient-container">
                <h2 className='nutrient-heading'>{selectedFood1.description}</h2>
                <ul className='nutrient-list'>
                  {selectedFood1.foodNutrients.map((nutrient) => (
                    <li key={nutrient.id} className='nutrient-item'>
                      {nutrient.nutrient.name}: {nutrient.amount} {nutrient.nutrient.unitName}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

          <div className="nutrient-container">
            <h2>Calorie Difference</h2>
            {calculateCalorieDifference() !== null ? (
              <p style={{ color: calculateCalorieDifference() > 0 ? 'red' : 'lime' }}>
                {selectedFood2.description} {calculateCalorieDifference() > 0 ? '+' : '-'}
                {Math.abs(calculateCalorieDifference())} kcal
              </p>
            ) : (
              <p>Select two items to compare calories</p>
            )}
          </div>

          {selectedFood2 &&
            selectedFood2.foodNutrients &&
            selectedFood2.foodNutrients.length > 0 ? (
              <div className="nutrient-container">
                <h2 className='nutrient-heading'>{selectedFood2.description}</h2>
                <ul className='nutrient-list'>
                  {selectedFood2.foodNutrients.map((nutrient) => (
                    <li key={nutrient.id} className='nutrient-item'>
                      {nutrient.nutrient.name}: {nutrient.amount} {nutrient.nutrient.unitName}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
        </div>
      </div>
    </>
  );
};

export default FoodSearch;
