const API_URL = `https://rickandmortyapi.com/api/`

export const fetchData = (setCharacters) => {
    fetch(`${API_URL}character`)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
    .catch(err => err)
}
