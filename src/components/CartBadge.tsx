import React, { useContext } from "react";
import s from "./CartBadge.module.scss";
import { CartContext } from "@/pages/_app";
import { useRouter } from "next/router";

export function CartBadge() {
  const router = useRouter();
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className={s.cart_badge} onClick={() => router.push("/cart")}>
      CartBadge {cart.length > 0 && cart.length}
    </div>
  );
}
