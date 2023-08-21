import React from "react";
import s from "./SectionHeader.module.scss";

interface Props {
  title: string;
  description?: string;
  trailing?: string;
  isCategoryProdutHeader?: boolean;
}
export function SectionHeader({ title, description, trailing, isCategoryProdutHeader = false }: Props) {
  return (
    <div className={s.section_header}>
      <div className={`${s.title_container} ${isCategoryProdutHeader ? `category` : ""}`}>{title}</div>
      {description && <div className={s.description_container}>{description}</div>}
      {trailing && <div className={s.trailing_container}>{trailing}</div>}
    </div>
  );
}
