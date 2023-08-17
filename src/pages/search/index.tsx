import { RecentSearchSection } from "@/components/RecentSearchSection";
import { SearchInput } from "@/components/SearchInput";
import { SearchResultSection } from "@/components/SearchResultSection";

export default function Search() {
  return (
    <div>
      <SearchInput />
      <SearchResultSection />
      <RecentSearchSection />
    </div>
  );
}
