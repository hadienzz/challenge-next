import { getMeals } from "@/lib/meals";
import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

const MealsGrid = async () => {
  const meals = await getMeals()

  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;