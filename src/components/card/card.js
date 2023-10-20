import { useState, useEffect } from 'react';
import { fetchData } from '../../services/fetchData'
import { Link } from 'react-router-dom';
import './card.css'

export const Card = () => {

    const [characters, setCharacters] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const requestData = 'character'

    const getCharacters = async () => {
        const response = await fetchData({
            requestData, page: pageNumber
        })
        setCharacters(response)
    }

    const loadMoreCharacters = async () => {
        const response = await fetchData({
            requestData, page: pageNumber + 1
        })
        const oldData = characters
        setCharacters([...oldData, ...response])
        setPageNumber(prevPageNumber => prevPageNumber + 1)
    }

    useEffect(() => {
        getCharacters()
    }, [])


    return (
        <main className='cards'>
            <h1>Characters</h1>
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
            <button onClick={loadMoreCharacters}>Load More</button>
        </main>
    )
}
