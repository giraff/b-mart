import React, { useEffect } from "react";
import { getSearch, setSearch } from "@/lib/storage";
import s from "./RecentSearchSection.module.scss";

export function RecentSearchSection({
  recentKeywork,
  setRecentKeyword
}: {
  recentKeywork: string[];
  setRecentKeyword: (keys: string[]) => void;
}) {
  const handleRemoveKeyworkClick = (key: string) => {
    const newKeyword = [...recentKeywork.filter((rcnt) => rcnt !== key)];
    setRecentKeyword(newKeyword);
    setSearch(newKeyword);
  };

  useEffect(() => {
    if (recentKeywork.length !== 0) return;
    setRecentKeyword(getSearch());
  }, []);
  useEffect(() => {
    setSearch(recentKeywork);
  }, [recentKeywork]);

  return (
    <div>
      {recentKeywork
        .slice(-5)
        .map((recent: string, idx: number) => (
          <li className={s.search_item} key={idx}>
            <div>{recent}</div>
            <div onClick={() => handleRemoveKeyworkClick(recent)}>X</div>
          </li>
        ))
        .reverse()}
    </div>
  );
}
