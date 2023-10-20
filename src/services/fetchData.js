export const fetchData = ({ setCharacters, requestData, id = null }) => {
    const API_URL = id
      ? `https://rickandmortyapi.com/api/${requestData}/${id}`
      : `https://rickandmortyapi.com/api/${requestData}`;
  
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        // Verificar si data tiene una propiedad results
        const charactersData = data.results ? data.results : data;
  
        setCharacters(charactersData);
      })
      .catch(err => console.error(err));
  };