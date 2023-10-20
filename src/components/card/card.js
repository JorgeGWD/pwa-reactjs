import { useState, useEffect } from 'react';
import { fetchData } from '../../services/fetchData'
import './card.css'

export const Card = () => {

    const [characters, setCharacters] = useState([])
    const requestData = 'character'

    useEffect(() => {
        fetchData({setCharacters, requestData})
    }, [])

    return (
        <section className='card'>
            {
                characters.map((character) => (
                    <article key={character.id}>
                        <img src={character.image} alt={character.name} />
                    </article>
                ))
            }
        </section>
    )
}
