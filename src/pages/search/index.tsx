import { RecentSearchSection } from "@/components/RecentSearchSection";
import { SearchResultSection } from "@/components/SearchResultSection";
import { useRouter } from "next/router";
import { MdKeyboardArrowLeft } from "react-icons/md";
import s from "@/styles/index.module.scss";
import { LayoutTemplate } from "@/components/Layout";
import { useState } from "react";

export default function Search() {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState<string>(""); // input
  const [recentKeywork, setRecentKeyword] = useState<string[]>([]); // 최신 검색어
  const handleSearchClick = () => {
    const noDuplicatedArr = recentKeywork.filter((key) => key !== searchKeyword);
    // TODO : Search button -> 최신 검색어 갱신 + product의 name 중 input값이 includes 된 애들만 filter
    setRecentKeyword([...noDuplicatedArr, searchKeyword]);
    // setRecentKeyword(getSearchText());
  };

  return (
    <LayoutTemplate>
      <div className={s.header_wrapper}>
        <div onClick={() => router.push("/")}>
          <MdKeyboardArrowLeft />
        </div>
        <div>
          <input value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
        </div>
        <div className={s.header_tool}>
          <div onClick={() => handleSearchClick()}>search</div>
        </div>
      </div>
      <SearchResultSection />
      <RecentSearchSection recentKeywork={recentKeywork} setRecentKeyword={setRecentKeyword} />
    </LayoutTemplate>
  );
}
