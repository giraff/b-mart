class ApiPathStorage {
  public get getProducts() {
    return "/products";
  }
  public get getCategories() {
    return "/categories";
  }
  public get setFavorite() {
    return "/favorite";
  }
}

export const apiPathStorage = new ApiPathStorage();
