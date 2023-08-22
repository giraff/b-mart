import React from "react";
import s from "./Layout.module.scss";
interface Props {
  loading?: boolean;
  children: React.ReactNode;
}
export function LayoutTemplate({ children, loading = false }: Props): React.ReactElement {
  const conditionalRender = () => {
    return children;
  };

  return <div className={s.childrenWrapper}>{conditionalRender()}</div>;
}
