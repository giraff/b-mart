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

export interface Banner {
  id: number;
  redirectUrl: string;
  imageUrl: string;
}

export interface Favorite {
  id: number;
  product: Product;
}
