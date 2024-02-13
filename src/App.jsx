import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import { Row, Divider} from "antd";

function App() {
  const [foodsArray, setFoodArray] = useState (foodsJson)
  const [filteredFoods, setFilteredFoods] = useState(foodsArray);
  
  const deleteFood = (id) => {
    const updatedFoodsArray = foodsArray.filter((food) => food.id !== id);
    setFoodArray(updatedFoodsArray);
  };

  const addFood = (newFood) => {
    setFoodArray([...foodsArray, newFood]);
  };

  const handleSearch = (searchTerm) => {
    const filtered = foodsArray.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(filtered);
  };


  return (
    <div className="App">
      <Divider>Food List</Divider>
      <h1>LAB | React IronNutrition</h1>
      <Row style={{ width: "100%", justifyContent: "center" }}>
      <Search onSearch={handleSearch} />
      <AddFoodForm onAddFood={addFood} /> 
      {filteredFoods.map((eachFood) => (
        <FoodBox key={eachFood.id} food={eachFood} onDelete={deleteFood}/>
      ))}
      </Row>
     </div>
    // <FoodBox food={ {
    //   name: "Orange",
    //   calories: 85,
    //   image: "https://i.imgur.com/abKGOcv.jpg",
    //   servings: 1
    // } } 
    // />
  );
}

export default App;
