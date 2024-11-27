<<<<<<< HEAD
const MealPage = () => {
    return (
        <section>
            <h1>this is meal page</h1>
        </section>
    )
}

export default MealPage
=======
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

const MealsPage = async () => {
  const meals = getMeals();

  return (
    <div>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.section}>
        <MealsGrid meals={meals} />
      </main>
    </div>
  );
};

export default MealsPage;
>>>>>>> fc290168e10ccd4f744aa771ef742e1f620dd85f
