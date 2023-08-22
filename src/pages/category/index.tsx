import { BannerSlider } from "@/components/BannerSlider";
import { CartBadge } from "@/components/CartBadge";
import { CategoryIconGrid } from "@/components/CategoryIconGrid";
import { useEffect, useState } from "react";
import { MID_BANNERS } from "../../constant/constant";
import { Category } from "@/types/product";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
import s from "@/styles/index.module.scss";
import { LayoutTemplate } from "@/components/Layout";

export default function Category() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    const res = await fetch("/categories");
    const result = await res.json();
    setCategories(result);
  };

  useEffect(() => {
    getCategories();
  }, []);

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
      <BannerSlider banners={MID_BANNERS} />
      <CategoryIconGrid categories={categories} />
      <CartBadge />
    </LayoutTemplate>
  );
}
