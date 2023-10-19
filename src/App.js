import { useState, useEffect } from 'react';
import './App.css';

function App() {

    const [characters, setCharacters] = useState([])

    const fetchData = () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
        .catch(err => err)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="App">
            <h1>PWS Template Install</h1>
            {
                characters.map((character) => (
                    <section key={character.id}>
                        <p>{character.name}</p>
                    </section>
                ))
            }
        </div>
    );
}

export default App;
