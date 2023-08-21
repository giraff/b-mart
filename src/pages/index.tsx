import { mockApiService } from "@/apis/api.mock";
import { BannerSlider } from "@/components/BannerSlider";
import { CartBadge } from "@/components/CartBadge";
import { CategoryIconGrid } from "@/components/CategoryIconGrid";
import { HotDealSection } from "@/components/HotDealSection";
import { ProductSection } from "@/components/ProductSection";
import { MAIN_BANNERS, MID_BANNERS } from "@/components/common/constant";
import { useContext, useEffect, useState } from "react";
import { LayoutTemplate } from "@/components/Layout";
import { FavoriteContext } from "./_app";
import { MdKeyboardArrowLeft, MdKeyboardBackspace } from "react-icons/md";
import { useRouter } from "next/router";
import s from "@/styles/index.module.scss";

interface Category {
  id: number;
  name: string;
  thumbnail: string;
}

export default function Main() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [favorite, setFavorite] = useContext(FavoriteContext);
  const router = useRouter();
  const getProducts = async () => {
    // TODO : loading true
    const data = await mockApiService.getProducts();
    // TODO : loding false
    setProducts(data);
  };

  const getCategories = async () => {
    // TODO : loading true
    const data = await mockApiService.getCategories();
    // TODO : loading false
    setCategories(data);
  };

  const handleLikeIconClick = async (productId: number) => {
    // const data = await mockApiService.setFavorite(productId);
    if (!localStorage.getItem("favorite")) return localStorage.setItem("favorite", JSON.stringify([productId]));
    const originFavorite = JSON.parse(localStorage.getItem("favorite") || "[]");
    if (originFavorite.includes(productId)) {
      const newFavorite = originFavorite.filter((pid: number) => pid !== productId);
      setFavorite([...newFavorite]);
      return localStorage.setItem("favorite", JSON.stringify(newFavorite));
    } else {
      const newFavorite = [...JSON.parse(localStorage.getItem("favorite") || "[]"), productId];
      setFavorite([...newFavorite]);
      return localStorage.setItem("favorite", JSON.stringify(newFavorite));
    }
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
      <div className={s.header_wrapper}>
        <div onClick={() => router.push("/")}>
          <MdKeyboardArrowLeft />
        </div>
        <div onClick={() => router.push("/")}>Logo</div>
        <div className={s.header_tool}>
          <div onClick={() => router.push("/search")}>search</div>
          <div onClick={() => router.push("/category")}>hamburger</div>
        </div>
      </div>
      메인 배너
      <BannerSlider banners={MAIN_BANNERS} />
      <CategoryIconGrid categories={categories} />
      <ProductSection
        columns={products.length}
        header={{ title: "크롱님을 위해 준비한 상품" }}
        products={products}
        viewType="list"
        onLikeIconClick={handleLikeIconClick}
      />
      <HotDealSection />
      <BannerSlider banners={MID_BANNERS} />
      <ProductSection
        columns={4}
        header={{ title: "지금 사면 반짝 할인" }}
        products={products.slice(0, 4)}
        viewType="grid"
        onLikeIconClick={handleLikeIconClick}
      />
      <ProductSection
        columns={3}
        header={{ title: "지금 뭐 먹지?" }}
        products={products}
        viewType="grid"
        onLikeIconClick={handleLikeIconClick}
      />
      <ProductSection
        columns={3}
        header={{ title: "지금 필요한 생필품" }}
        products={products}
        viewType="grid"
        onLikeIconClick={handleLikeIconClick}
      />
      <ProductSection
        columns={products.length}
        header={{ title: "새로 나왔어요" }}
        products={products}
        viewType="list"
        onLikeIconClick={handleLikeIconClick}
      />
      <ProductSection
        columns={products.length}
        header={{ title: "요즘 잘 팔려요" }}
        products={products}
        viewType="list"
        onLikeIconClick={handleLikeIconClick}
      />
      <CartBadge />
    </LayoutTemplate>
  );
}
