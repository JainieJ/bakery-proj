export const filterItemsByName = (items, query) =>
  items.filter(item =>
    item.title.toLowerCase().includes(query.trim().toLowerCase())
  );

export const filterItemsByType = (items, query) => {
  if (query === "all") return items;
  return items.filter(item => item.type === query);
};

export const filterItemsByPrice = (items, query) => {
  return items.filter(item => item.price <= Number(query));
};

export const filterItemsByGluten = (items, query) => {
  if (query) return items.filter(item => item.glutenFree);
  return items;
};
