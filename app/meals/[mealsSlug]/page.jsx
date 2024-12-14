
import { getMeal } from "@/lib/meals";
import { notFound, usePathname } from "next/navigation";
import classes from "./page.module.css";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealsSlug)
  if (!meal) {
    notFound()
  }

  return {
    title: meal.title,
    description: meal.summary
  }
}


const MealsDetailPage = async ({ params }) => {
  const { mealsSlug } = params;
  const meal = getMeal(mealsSlug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <div className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href="mailto:mail">{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </div>

      <pre className={classes.instructions}>
        <p>{meal.instructions}</p>
      </pre>
    </>
  );
};

export default MealsDetailPage;
