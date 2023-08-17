import { BannerSlider } from "@/components/BannerSlider";
import { CartBadge } from "@/components/CartBadge";
import { CategoryIconGrid } from "@/components/CategoryIconGrid";
import { ProductCardGridContainer } from "@/components/ProductCardGridContainer";
import { ProductCardGridHeader } from "@/components/ProductCardGridHeader";
import { SubCategoryGrid } from "@/components/SubCategoryGrid";
import { Category } from "@/mocks/handlers";
import { useEffect, useState } from "react";
import { MID_BANNERS } from "../../components/common/constant";

export default function Category() {
  const [categories, setCategories] = useState<Category[]>([]);

  const test = async () => {
    const res = await fetch("/categories");
    const result = await res.json();
    console.log(result);
    setCategories(result);
  };
  useEffect(() => {
    test();
  }, []);
  return (
    <div>
      <BannerSlider banners={MID_BANNERS} />
      <SubCategoryGrid />
      <CategoryIconGrid categories={categories} />
      <ProductCardGridHeader />
      <ProductCardGridContainer />
      <CartBadge />
    </div>
  );
}
