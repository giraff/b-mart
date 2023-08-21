import axios from "axios";
import { apiPathStorage } from "./api.path";
import { getFavorite } from "@/lib/storage";

interface mockupType {
  [key: string]: {
    enabled: boolean;
    response: any;
    post?: (v: any) => any;
  };
}

const mockup: mockupType = {
  "/": {
    enabled: true,
    response: {}
  },
  "/categories": {
    enabled: true,
    response: [
      {
        id: 1,
        name: "SeaFood",
        thumbnail: "https://cdn-icons-png.flaticon.com/512/10107/10107601.png"
      },
      {
        id: 2,
        name: "JunkFood",
        thumbnail: "https://cdn-icons-png.flaticon.com/128/1404/1404945.png"
      },
      {
        id: 3,
        name: "Fish",
        thumbnail: "https://cdn-icons-png.flaticon.com/128/11520/11520652.png"
      },
      {
        id: 4,
        name: "milk",
        thumbnail: "https://cdn-icons-png.flaticon.com/128/11520/11520787.png"
      },
      {
        id: 5,
        name: "bread",
        thumbnail: "https://cdn-icons-png.flaticon.com/128/783/783054.png"
      },
      {
        id: 6,
        name: "ice-cream",
        thumbnail: "https://cdn-icons-png.flaticon.com/128/2830/2830305.png"
      },
      {
        id: 7,
        name: "hair",
        thumbnail: "https://cdn-icons-png.flaticon.com/128/3496/3496508.png"
      },
      {
        id: 8,
        name: "mealkit",
        thumbnail: "https://cdn-icons-png.flaticon.com/128/4465/4465494.png"
      },
      {
        id: 9,
        name: "snack",
        thumbnail: "https://cdn-icons-png.flaticon.com/128/1236/1236977.png"
      },
      {
        id: 10,
        name: "more",
        thumbnail: "https://cdn-icons-png.flaticon.com/512/10107/10107601.png"
      }
    ]
  },
  "/products": {
    enabled: true,
    response: [
      {
        id: 1,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 10900,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        quantity: 10,
        discountedPrice: 8000,
        discountedRate: 10
      },
      {
        id: 2,
        name: "Fjallraven - Foldsack No.21 Backpack, Fits 15 Laptops",
        price: 10900,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        quantity: 10,
        discountedPrice: 8000,
        discountedRate: 10
      },
      {
        id: 3,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 10900,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        quantity: 10,
        discountedPrice: 8000,
        discountedRate: 10
      },
      {
        id: 4,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 10900,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        quantity: 10,
        discountedPrice: 8000,
        discountedRate: 10
      },
      {
        id: 5,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 10900,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        quantity: 10,
        discountedPrice: 8000,
        discountedRate: 10
      },
      {
        id: 6,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 10900,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        quantity: 10,
        discountedPrice: 8000,
        discountedRate: 10
      },

      {
        id: 7,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 10900,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        quantity: 10,
        discountedPrice: 8000,
        discountedRate: 10
      },
      {
        id: 8,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 10900,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        quantity: 10,
        discountedPrice: 8000,
        discountedRate: 10
      }
    ]
  },
  "/favorite": {
    enabled: true,
    response: [],
    post(n: number) {
      if (this.response.includes(n)) return (this.response = this.response.filter((item: number) => item !== n));
      return (this.response = [...this.response, n]);
    }
  }
};

class ApiService {
  private readonly axiosInstance = axios.create({
    baseURL: "/",
    timeout: 60000
  });
  public async getProducts() {
    const { data } = await this.axiosInstance.get(apiPathStorage.getProducts);
    return data;
  }
  public async getCategories() {
    const { data } = await this.axiosInstance.get(apiPathStorage.getCategories);
    return data;
  }

  public async setFavorite(productId: number) {
    const { data } = await this.axiosInstance.post(apiPathStorage.setFavorite, productId);
    return data;
  }
  //api.mock.ts에 값이 존재하고 enabled이면 mock.ts에서 response를 return 없는 경우는 undefined
  private getMockData(mockup: mockupType, endpoint: string) {
    const mockupValue = mockup?.[endpoint]; // 목업에서 요청 날라오는 endpoint를 찾기
    const hasMockupKey = !!mockupValue; //  해당 키가 존재하는지 확인
    const isEnabled = !!mockupValue?.enabled; // enabled 사용가능한 목업 데이터인지 확인
    const inValidReturn = undefined;
    return hasMockupKey && isEnabled ? mockupValue?.response : inValidReturn; // response를 반환
  }
  private postMockData(mockup: mockupType, endpoint: string, data: any) {
    const mockupValue = mockup?.[endpoint]; // 등록해둔 목업에서 요청 날라오는 endpoint를 찾기
    const inValidReturn = undefined;
    if (!mockupValue.post) return inValidReturn; // 해당 목업에는 post 함수가 존재하지 않는지 판단하고 존재하지 않으면 undefined 반환
    const hasMockupKey = !!mockupValue; // 해당 엔드포인트가 존재하지 않는지 여부 판단
    const isEnabled = !!mockupValue?.enabled; // 현재 사용 가능한 목업 데이터인지 확인
    return hasMockupKey && isEnabled ? mockupValue?.post(data) : inValidReturn; // post 함수 실행
  }
  //adapter를 이용하여 들어가는 값을 조절한다.
  private readonly axiosRequestOption = this.axiosInstance.interceptors.request.use(
    (request) => {
      console.log(request);
      const mock =
        request.method === "get"
          ? this.getMockData(mockup, request?.url || "")
          : this.postMockData(mockup, request?.url || "", request?.data);
      if (!mock) return request;
      return {
        ...request,
        adapter: (config) => {
          return new Promise((resolve) => {
            const request = {
              data: mock,
              status: 200,
              statusText: "OK",
              headers: { "content-type": "text/plain; charset=utf-8" },
              config,
              request: {}
            };
            return resolve(request);
          });
        }
      };
    },
    (err) => new Promise(err)
  );
}

export const mockApiService = new ApiService();
