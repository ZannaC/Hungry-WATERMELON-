import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const MEALS = [
  {
    id: "m1",
    name: "📌 Margherita Pizza",
    description: "Classic Italian pizza with tomatoes and mozzarella",
    price: 14.99,
  },
  {
    id: "m2",
    name: "📌 Chicken Alfredo Pasta",
    description: "Creamy pasta with grilled chicken and Alfredo sauce",
    price: 17.99,
  },
  {
    id: "m3",
    name: "📌 Vegetable Stir-Fry",
    description: "Stir-fried vegetables with your choice of sauce",
    price: 10.99,
  },
  {
    id: "m4",
    name: "📌 Chocolate Brownie Sundae",
    description: "Warm chocolate brownie topped with vanilla ice cream",
    price: 8.99,
  },
  {
    id: "m5",
    name: "📌 Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
];

const AvailableMeals = () => {
  const mealsList = MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
