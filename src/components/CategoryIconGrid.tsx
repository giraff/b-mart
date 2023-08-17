import { Category } from "@/mocks/handlers";
import Image from "next/image";
import React from "react";
import s from "./CategoryIconGrid.module.scss";

interface Props {
  categories: Category[];
}
export function CategoryIconGrid({ categories }: Props): React.ReactElement {
  if (categories?.length === 0) return <div>CategoryIconGrid</div>;
  return (
    <div className={s.category_container}>
      {categories?.map((category) => (
        <div key={category.id} className={s.category_item}>
          <Image src={category.thumbnail} alt={category.name} width={120} height={120} />
          <div>{category.name}</div>
        </div>
      ))}
    </div>
  );
}
