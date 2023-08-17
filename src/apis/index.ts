// TODO : get product
export async function getProducts() {
  const res = await fetch("/products");

  return await res.json();
}

// TODO : get product
export async function getCategories() {
  const res = await fetch("/categories");

  return await res.json();
}
// TODO :
