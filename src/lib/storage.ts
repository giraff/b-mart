export function getFavorite() {
  if (!localStorage.getItem("favorite")) return [];
  else return JSON.parse(localStorage.getItem("favorite") || "[]");
}

export function getSearch() {
  if (!localStorage.getItem("recently_search")) return [];
  else return JSON.parse(localStorage.getItem("recently_search") || "[]");
}

export function setSearch(keywords: string[]) {
  return localStorage.setItem("recently_search", JSON.stringify([...keywords]));
}
