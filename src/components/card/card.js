import { useState, useEffect } from 'react';
import { fetchData } from '../../services/fetchData'
import './card.css'
import { Link } from 'react-router-dom';

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
                    <Link to={`/character-details/${character.id}`} key={character.id}>
                        <article >
                            <img src={character.image} alt={character.name} />
                        </article>
                    </Link>
                ))
            }
        </section>
    )
}
