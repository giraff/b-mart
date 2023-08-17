// handlers.ts
import { rest } from "msw";

export interface Product {
  id: number; // 상품 id
  name: string; // 상품명
  price: number; // 상품 가격
  discountedPrice: number; // 상품 할인 금액
  discountedRate: number; // 상품 할인률
  quantity: number; // 상품 수량
  imageUrl: string; // 상품 이미지 주소
  isLiked: boolean; // 찜 여부
}

export interface Category {
  id: number;
  name: string; // category 명
  thumbnail: string;
  product?: Product[];
  subCategory?: Category[];
}

export interface SubCategory extends Category {
  name: string;
  categoryId: number;
}

const baseUrl = "http://localhost:3000";

export const handlers = [
  rest.get(`${baseUrl}/`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "얍"
      })
    );
  }),
  rest.get(`/products`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "",
          price: 10000,
          discountedPrice: 20,
          discountedRate: 2000,
          quantity: 100,
          imageUrl:
            "https://www.flaticon.com/free-icon/fast-food_737967?term=food&page=1&position=8&origin=search&related_id=737967",
          isLiked: false
        },
        {
          id: 2,
          name: "",
          price: 10000,
          discountedPrice: 20,
          discountedRate: 2000,
          quantity: 100,
          imageUrl:
            "https://www.flaticon.com/free-icon/fast-food_737967?term=food&page=1&position=8&origin=search&related_id=737967",
          isLiked: false
        },
        {
          id: 3,
          name: "",
          price: 10000,
          discountedPrice: 20,
          discountedRate: 2000,
          quantity: 100,
          imageUrl:
            "https://www.flaticon.com/free-icon/fast-food_737967?term=food&page=1&position=8&origin=search&related_id=737967",
          isLiked: false
        }
      ])
    );
  }),
  rest.get(`/categories`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(20000),
      ctx.json([
        {
          id: 1,
          name: "SeaFood",
          thumbnail: "https://cdn-icons-png.flaticon.com/512/10107/10107601.png"
        },
        {
          id: 2,
          name: "JunkFood",
          thumbnail: "https://cdn-icons-png.flaticon.com/512/10107/10107601.png"
        },
        {
          id: 3,
          name: "Fish",
          thumbnail: "https://cdn-icons-png.flaticon.com/512/10107/10107601.png"
        },
        {
          id: 4,
          name: "milk",
          thumbnail: "https://cdn-icons-png.flaticon.com/512/10107/10107601.png"
        },
        {
          id: 5,
          name: "bread",
          thumbnail: "https://cdn-icons-png.flaticon.com/512/10107/10107601.png"
        },
        {
          id: 6,
          name: "ice-cream",
          thumbnail: "https://cdn-icons-png.flaticon.com/512/10107/10107601.png"
        },
        {
          id: 7,
          name: "hair",
          thumbnail: "https://cdn-icons-png.flaticon.com/512/10107/10107601.png"
        },
        {
          id: 8,
          name: "mealkit",
          thumbnail: "https://cdn-icons-png.flaticon.com/512/10107/10107601.png"
        },
        {
          id: 9,
          name: "snack",
          thumbnail: "https://cdn-icons-png.flaticon.com/512/10107/10107601.png"
        },
        {
          id: 10,
          name: "more",
          thumbnail: "https://cdn-icons-png.flaticon.com/512/10107/10107601.png"
        }
      ])
    );
  }),
  rest.post(`${baseUrl}/user`, async (req, res, ctx) => {
    return res();
    // ...
  })
];
