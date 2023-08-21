import { Product } from "@/types/product";
import Image from "next/image";
import React, { useContext } from "react";
import s from "./ProductCard.module.scss";
import { CartContext, FavoriteContext } from "@/pages/_app";

interface generateProps extends Product {
  columns: number;
  onLikeIconClick: (productId: number) => void;
}
export const generateProductCards = (
  products: Product[],
  columns: number,
  onLikeIconClick: (productId: number) => void
) => {
  return products.map(({ id, ...rest }) => <ProductCard key={id} {...{ id, columns, onLikeIconClick, ...rest }} />);
};
export function ProductCard({
  columns,
  onLikeIconClick,
  id, // 상품 id
  name, // 상품명
  price, // 상품 가격
  discountedPrice, // 상품 할인 금액
  discountedRate, // 상품 할인률
  quantity, // 상품 수량
  imageUrl, // 상품 이미지 주소
  isLiked // 찜 여부
}: generateProps) {
  const [favorite, setFavorite] = useContext(FavoriteContext);
  const [cart, setCart] = useContext(CartContext);
  const handleLikeIconClick = (productId: number) => {
    onLikeIconClick(productId);
  };
  const handleCartIconClick = async (productId: number) => {
    if (!cart.includes(productId)) return setCart([...cart, productId]);
    else return setCart([...cart.filter((pid) => pid !== productId)]);
  };
  return (
    <div>
      <div className={s.img_wrapper}>
        <Image src={imageUrl} alt="card" width={100} height={100} />
        <div onClick={() => handleLikeIconClick(id)}>{favorite.includes(id) ? "UnLike" : "Like"}</div>
        <div onClick={() => handleCartIconClick(id)}>{cart.includes(id) ? "UnCart" : "Cart"}</div>
      </div>
      <div className={s.content_container}>
        <div className={s.name}>{name}</div>
        <div>
          {discountedRate && (
            <>
              <div className={s.discounted_rate}>{discountedRate}</div>
              <div className={s.price}>{price}</div>
            </>
          )}
          <div className={s.discounted_price}>{discountedPrice}</div>
        </div>
      </div>
    </div>
  );
}
