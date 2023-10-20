export const fetchData = ({ setCharacters, requestData, id = null, page = 1 }) => {
        const API_URL = id
        ? `https://rickandmortyapi.com/api/${requestData}/${id}`
        : `https://rickandmortyapi.com/api/${requestData}?page=${page}`;
    
        fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            // Check if data has a results property
            const charactersData = data.results ? data.results : data;
    
            setCharacters((prevCharacters) => {
                // Make sure prevCharacters is an array
                const existingCharacters = Array.isArray(prevCharacters) ? prevCharacters : [];
                return [...existingCharacters, ...charactersData];
            });
        })
        .catch(err => console.error(err));
};