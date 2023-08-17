declare module "ProductDTO" {
  interface responseProduct {
    id: number; // 상품 id
    name: string; // 상품명
    price: number; // 상품 가격
    discountedPrice: number; // 상품 할인 금액
    discountedRate: number; // 상품 할인률
    quantity: number; // 상품 수량
    imageUrl: string; // 상품 이미지 주소
    isLiked: boolean; // 찜 여부
  }
}
