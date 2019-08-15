//helper functions of filterProducts function
const filterItemsByName = (items, query) =>
  items.filter(item =>
    item.title.toLowerCase().includes(query.trim().toLowerCase())
  );

const filterItemsByType = (items, query) =>
  items.filter(item => item.type === query);

const filterItemsByPrice = (items, query) =>
  items.filter(item => item.price <= Number(query));

const filterItemsByGluten = items => items.filter(item => item.glutenFree);
// end of helper functions of filterProducts function

export const filterProducts = (currentState, name, value) => {
  let items = [...currentState.allProducts];
  const settings = { ...currentState, [name]: value };
  const { search, select, price, glutenFree } = settings;
  if (search.length !== 0) {
    items = filterItemsByName(items, search);
    console.log(items);
  }
  if (select !== "all") {
    items = filterItemsByType(items, select);
    console.log(items);
  }
  if (price.length !== 0) {
    items = filterItemsByPrice(items, price);
  }
  if (glutenFree) {
    items = filterItemsByGluten(items);
  }
  return items;
};
