export const fetchData = ({ requestData, id = null, page = 1 }) => {
    const API_URL = id
        ? `https://rickandmortyapi.com/api/${requestData}/${id}`
        : `https://rickandmortyapi.com/api/${requestData}?page=${page}`

    return fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            // Check if data has a results property
            const charactersData = data.results ? data.results : [data]
            
            return charactersData
        })
        .catch(err => console.error(err))
}
