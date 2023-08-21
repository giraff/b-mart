import { Product } from "@/types/product";
import React from "react";
import s from "./ProductSection.module.scss";
import { SectionHeader } from "../SectionHeader";
import { ProductCardGrid } from "../ProductCardGrid";
import { ProductCardList } from "../ProductCardList";

interface Props {
  columns: number;
  header: { title: string };
  products: Product[];
  viewType: "grid" | "list";
  onLikeIconClick: (productId: number) => void;
}
export function ProductSection({ columns, header, products, viewType, onLikeIconClick }: Props) {
  return (
    <div className={s.production_section}>
      <div className={s.header_container}>
        <SectionHeader {...header} />
      </div>
      {products.length === 0 ? (
        "검색결과가 없습니다"
      ) : viewType === "grid" ? (
        <div className={s.product_grid_container}>
          <ProductCardGrid products={products} columns={columns} onLikeIconClick={onLikeIconClick} />
        </div>
      ) : (
        <div className={s.product_list_container}>
          <ProductCardList products={products} columns={columns} onLikeIconClick={onLikeIconClick} />
        </div>
      )}
    </div>
  );
}
