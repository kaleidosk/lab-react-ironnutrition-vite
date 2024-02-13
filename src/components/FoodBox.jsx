import { Card, Row, Col, Divider, Input, Button } from "antd";

function FoodBox ({food, onDelete}){
    const {name, calories, image, servings} = food;
    const handleDeleteClick = () => {
        onDelete(food.id);
      };
    return (
     <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
       <img src={image} alt={name} height={60} />
       <p>Calories: {calories}</p>
       <p>Servings: {servings}</p>
      <b>Total Calories: {servings * calories} </b> kcal
      <button type="primary" onClick={handleDeleteClick}>Delete</button> 
     </Card>
    </Col>
    )
}



export default FoodBox;