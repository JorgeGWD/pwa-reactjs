import { useState, useEffect } from 'react';
import { fetchData } from '../../services/fetchData'
import './card.css'

export const Card = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetchData(setCharacters)
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
