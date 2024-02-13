import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { Card, Row, Col, Divider, Input, Button } from "antd";


function AddFoodForm({ onAddFood }) {
    const [formData, setFormData] = useState({
      name: "",
      image: "",
      calories: "",
      servings: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const id = uuidv4 ()
      const newFood = { ...formData, id }; 
      onAddFood(newFood); 
      setFormData({ name: "", image: "", calories: "", servings: "" }); 
    };
  
    return (
      <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <label>Image</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Image"
          onChange={handleChange}
          required
        />
        <label>Calories</label>
        <input
          type="number"
          name="calories"
          value={formData.calories}
          placeholder="Calories"
          onChange={handleChange}
          required
        />
        <label>Servings</label>
        <input
          type="number"
          name="servings"
          value={formData.servings}
          placeholder="Servings"
          onChange={handleChange}
          required
        />
        <Button type="submit">Create</Button>
      </form>
    );
  }
  
  export default AddFoodForm;