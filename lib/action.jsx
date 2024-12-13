"use server";

import { redirect } from "next/navigation";
import { saveMeals } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidInput = (text) => {
  return !text || text.trim() === "";
};

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidInput(meal.title) ||
    isInvalidInput(meal.summary) ||
    isInvalidInput(meal.instructions) ||
    isInvalidInput(meal.creator) ||
    isInvalidInput(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image.size ||
    meal.image.size === 0
  ) {
    throw new Error("Invalid Input");
  }

  await saveMeals(meal);
  revalidatePath("/meals", 'layout');
  redirect("/meals");
}
