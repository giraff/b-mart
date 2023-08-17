import { BannerSlider } from "@/components/BannerSlider";
import { CartBadge } from "@/components/CartBadge";
import { CategoryIconGrid } from "@/components/CategoryIconGrid";
import { HotDealSection } from "@/components/HotDealSection";
import { ProductSection } from "@/components/ProductSection";
import { useEffect, useState } from "react";

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}
export default function Main() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();

    console.log(json);
  };

  const test = async () => {
    const res = await fetch("/");
    const json = await res.json();
    console.log(json);
  };

  useEffect(() => {
    test();
    getProducts();
  }, []);

  return (
    <div>
      <div>Header</div>
      메인 배너
      <BannerSlider />
      <CategoryIconGrid />
      <ProductSection />
      <HotDealSection />
      <BannerSlider />
      <ProductSection />
      <ProductSection />
      <ProductSection />
      <ProductSection />
      <CartBadge />
    </div>
  );
}
