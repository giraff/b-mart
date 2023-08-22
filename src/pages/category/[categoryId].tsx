import { BannerSlider } from "@/components/BannerSlider";
import { CartBadge } from "@/components/CartBadge";
import { CategoryIconGrid } from "@/components/CategoryIconGrid";
import { LayoutTemplate } from "@/components/Layout";
import { MID_BANNERS } from "@/constant/constant";
import { Category } from "@/types/product";
import { useRouter } from "next/router";
import s from "@/styles/index.module.scss";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { mockApiService } from "@/apis/api.mock";

export default function CategoryDetail() {
  const router = useRouter();
  const { categoryId } = router.query;
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [subCategories, setSubCategories] = useState<Category[]>([]);

  const loadCategories = async () => {
    setLoading(true);
    const res = await mockApiService.getCategories();
    // const result = await res.json();
    setLoading(false);
    console.log(res);
    setCategories(res);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (!categoryId) return;
    if (categories.length === 0) return;
    console.log("category", categories);
    const loadSubCategories = categories.filter((ct: Category) => ct.id === +categoryId);
    console.log(loadSubCategories[0].subCategory);
  }, [categories]);

  return (
    <div>
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
        {loading && "로딩중"}
        <BannerSlider banners={MID_BANNERS} />
        {/* <SubCategoryGrid  /> */}
        {/* <CategoryIconGrid categories={categories} /> */}
        <CartBadge />
      </LayoutTemplate>
    </div>
  );
}
