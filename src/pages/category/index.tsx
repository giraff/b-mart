import { BannerSlider } from "@/components/BannerSlider";
import { CartBadge } from "@/components/CartBadge";
import { CategoryIconGrid } from "@/components/CategoryIconGrid";
import { ProductCardGridContainer } from "@/components/ProductCardGridContainer";
import { ProductCardGridHeader } from "@/components/ProductCardGridHeader";
import { SubCategoryGrid } from "@/components/SubCategoryGrid";

export default function Category() {
  return (
    <div>
      <BannerSlider />
      <SubCategoryGrid />
      <CategoryIconGrid />
      <ProductCardGridHeader />
      <ProductCardGridContainer />
      <CartBadge />
    </div>
  );
}
