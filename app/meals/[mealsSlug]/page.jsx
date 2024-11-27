import { usePathname } from "next/navigation";

const MealsDetailPage = ({ params }) => {
  const { mealsSlug } = params;

  return (
    <div>
      <h1>This is {mealsSlug} page</h1>
    </div>
  );
};

export default MealsDetailPage;
