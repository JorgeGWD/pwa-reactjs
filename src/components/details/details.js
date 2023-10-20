import { useState, useEffect } from 'react'
import { fetchData } from '../../services/fetchData'

export const Details = () => {

    const [characters, setCharacters] = useState({})
    const requestData = 'character'

    useEffect(() => {
        fetchData({setCharacters, requestData, id: 1})
    }, [])
    
    return (
        <section>
            <article key={characters.id}>
                <img src={characters.image} alt={characters.name} />
                <p>{characters.name}</p>
            </article>
        </section>
    );
    
}
