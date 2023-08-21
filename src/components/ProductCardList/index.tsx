import { Product } from "@/types/product";
import React from "react";
import s from "./ProductCardList.module.scss";
import { generateProductCards } from "../ProductCard";

interface Props {
  products: Product[];
  columns: number;
  onLikeIconClick: (productId: number) => void;
}

export function ProductCardList({ products, columns, onLikeIconClick }: Props) {
  return <div className={s.card_list}>{generateProductCards(products, columns, onLikeIconClick)}</div>;
}
