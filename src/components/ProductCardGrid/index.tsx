import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";
import s from "./ProductCardGrid.module.scss";
import { generateProductCards } from "../ProductCard";

interface Props {
  products: Product[];
  columns: number;
  onLikeIconClick: (productId: number) => void;
}

export function ProductCardGrid({ products, columns, onLikeIconClick }: Props) {
  return (
    <div className={columns === 2 ? s.card_grid_2 : s.card_grid_3}>
      {generateProductCards(products, columns, onLikeIconClick)}
    </div>
  );
}
