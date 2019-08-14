export const filterItemsByName = (items, query) =>
  items.filter(item =>
    item.title.toLowerCase().includes(query.trim().toLowerCase())
  );

export const filterItemsByType = (items, query) => {
  if (query === "all") return items;
  return items.filter(item => item.type === query);
};
