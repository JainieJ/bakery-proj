export const filterProducts = (currentState, name, value) => {
  console.log("filterProducts is running");
  let items = [...currentState.allProducts];
  const settings = { ...currentState, [name]: value };
  const { search, select, price, glutenFree } = settings;
  if (search.length !== 0) {
    items = items.filter(item =>
      item.title.toLowerCase().includes(search.trim().toLowerCase())
    );
  }
  if (select !== "all") {
    items = items.filter(item => {
      console.log("select is running");
      return item.type === select;
    });
  }
  if (price.length !== 0) {
    items = items.filter(item => item.price <= price);
  }
  if (glutenFree) {
    items = items.filter(item => item.glutenFree);
  }
  return items;
};

//TODO!!! ALLOCATE FILTERING LOGIC FOR EACH IF TO SEPARATE FUNCTIONS. THESE FUNCTIONS
//SHOULD HAVE MEMOIZATION SO AS NOT TO FILTER IS THE VALUE TO FILTER BY HAS NOT CHANGED
