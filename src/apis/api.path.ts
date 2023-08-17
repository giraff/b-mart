class ApiPathStorage {
  public get getProducts() {
    return "/products";
  }
  public get getCategories() {
    return "/categories";
  }
}

export const apiPathStorage = new ApiPathStorage();
