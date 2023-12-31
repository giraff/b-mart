import Image from "next/image";
import React from "react";
import s from "./CategoryIconGrid.module.scss";
import { Category } from "@/types/product";
import { useRouter } from "next/router";

interface Props {
  categories: Category[];
}
export function CategoryIconGrid({ categories }: Props): React.ReactElement {
  const router = useRouter();
  if (categories?.length === 0) return <div>CategoryIconGrid</div>;
  return (
    <div className={s.category_container}>
      {categories?.map((category) => (
        <div key={category.id} className={s.category_item} onClick={() => router.push(`/category/${category.id}`)}>
          <Image className={s.category_image} src={category.thumbnail} alt={category.name} width={60} height={60} />
          <div>{category.name}</div>
        </div>
      ))}
    </div>
  );
}
