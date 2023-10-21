import { useState, useEffect } from 'react';
import { fetchData } from '../../services/fetchData'
import { Link } from 'react-router-dom';
import './card.css'
import { Button } from '../common/button/button';

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
                        <article key={character.id}>
                            <Link to={`/character-details/${character.id}`} >
                                <img src={character.image} alt={character.name} />
                            </Link>
                        </article>
                    ))
                }
            </section>
            <Button className="btn-principal" text='Load More' onClick={loadMoreCharacters} />
        </main>
    )
}
