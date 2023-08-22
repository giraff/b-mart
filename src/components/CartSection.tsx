import { mockApiService } from "@/apis/api.mock";
import { CartContext } from "@/pages/_app";
import { Product } from "@/types/product";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

export function CartSection() {
  const [cart, setCart] = useContext(CartContext);
  const [products, setProducts] = useState<Product[]>([]);
  const loadCartList = async () => {
    const data = await mockApiService.getProducts();
    const loadProducts = data.filter((d: Product) => cart.includes(d.id));

    setProducts(loadProducts);
  };
  useEffect(() => {
    if (products.length !== 0) return;
    loadCartList();
  }, []);
  return (
    <div>
      {products.map((prod: Product, idx: number) => (
        <li key={idx}>
          <div>
            <Image src={prod.imageUrl} alt="cart-in" width={120} height={120} />
          </div>
          <div>{prod.name}</div>
          <div>{prod.price}</div>
        </li>
      ))}
    </div>
  );
}
