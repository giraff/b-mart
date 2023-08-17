import React from "react";

interface Props {
  loading?: boolean;
  children: React.ReactNode;
}
function DefaultTemplate({ children, loading = false }: Props): React.ReactElement {
  const conditionalRender = () => {
    return children;
  };

  return <>{conditionalRender()}</>;
}
