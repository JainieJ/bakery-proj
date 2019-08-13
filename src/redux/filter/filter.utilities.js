export const filterItemsByName = (items, query) =>
  items.filter(item =>
    item.title.toLowerCase().includes(query.trim().toLowerCase())
  );
