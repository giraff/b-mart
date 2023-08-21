import type { AppProps } from "next/app";
/** Next.js documents에서 Built-In CSS Support 내용 참조 - 전역 스타일시트는 pages/_app.js 파일에 import */
import "../styles/reset.css";
import "../styles/globalstyle.scss";

import initMockAPI from "@/mocks";
import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { getFavorite } from "@/lib/storage";
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  initMockAPI();
}

export type FavoriteContextType = number[];
export type CartContextType = number[];
export type FavoriteContext = [FavoriteContextType, Dispatch<SetStateAction<FavoriteContextType>>];
export type CartContext = [CartContextType, Dispatch<SetStateAction<CartContextType>>];
export const FavoriteContext = createContext<FavoriteContext>([[], () => null]);
export const CartContext = createContext<CartContext>([[], () => null]);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setFavorite(getFavorite());
  }, []);
  const [favorite, setFavorite] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <FavoriteContext.Provider value={[favorite, setFavorite]}>
        <Component {...pageProps} />
      </FavoriteContext.Provider>
    </CartContext.Provider>
  );
}
