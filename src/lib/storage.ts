export function getFavorite() {
  try {
    if (!localStorage.getItem("favorite")) return [];
    else return JSON.parse(localStorage.getItem("favorite") || "[]");
  } catch (e) {
    return [];
  }
}

export function getSearch() {
  try {
    if (!localStorage.getItem("recently_search")) return [];
    else return JSON.parse(localStorage.getItem("recently_search") || "[]");
  } catch (e) {
    return [];
  }
}

export function setSearch(keywords: string[]) {
  try {
    return localStorage.setItem("recently_search", JSON.stringify([...keywords]));
  } catch (e) {
    return undefined;
  }
}

//
