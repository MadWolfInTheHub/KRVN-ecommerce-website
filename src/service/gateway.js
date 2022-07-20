const baseUrl = "https://api.storerestapi.com/products/"

export const fetchItems = () => {
  return fetch(`${baseUrl}`) 
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      return [];
    })
    .then(itemsList => itemsList.data);
};