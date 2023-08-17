import { mockApiService } from "@/apis/api.mock";
import { BannerSlider } from "@/components/BannerSlider";
import { CartBadge } from "@/components/CartBadge";
import { CategoryIconGrid } from "@/components/CategoryIconGrid";
import { HotDealSection } from "@/components/HotDealSection";
import { ProductSection } from "@/components/ProductSection";
import { MAIN_BANNERS, MID_BANNERS } from "../../components/common/constant";
import { useEffect, useState } from "react";
import { LayoutTemplate } from "@/components/Layout";
interface Category {
  id: number;
  name: string;
  thumbnail: string;
}
export default function Main() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const getProducts = async () => {
    const data = await mockApiService.getProducts();
    // const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };

  const getCategories = async () => {
    // const { data } = await axios.get("/categories");
    const data = await mockApiService.getCategories();
    console.log(data);
    // setCategories(data);
    setCategories(data);
  };

  useEffect(() => {
    if (categories.length !== 0) return;
    getCategories();
  }, [categories]);

  useEffect(() => {
    if (products.length !== 0) return;
    getProducts();
  }, [products]);

  return (
    <LayoutTemplate>
      <div>Header</div>
      메인 배너
      <BannerSlider banners={MAIN_BANNERS} />
      <CategoryIconGrid categories={categories} />
      <ProductSection />
      <HotDealSection />
      <BannerSlider banners={MID_BANNERS} />
      <ProductSection />
      <ProductSection />
      <ProductSection />
      <ProductSection />
      <CartBadge />
    </LayoutTemplate>
  );
}
