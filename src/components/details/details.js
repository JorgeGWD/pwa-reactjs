import { useState, useEffect } from 'react'
import { fetchData } from '../../services/fetchData'
import { useParams } from 'react-router'
import './details.css'

export const Details = () => {

    const [characters, setCharacters] = useState({})
    const requestData = 'character'
    const { id } = useParams()

    useEffect(() => {
        fetchData({setCharacters, requestData, id})
    }, [id])
    
    return (
        <main className='details'>
            <h1>Character Details</h1>
            <section className='detail' key={characters.id}>
                <img src={characters.image} alt={characters.name} />
                <article>
                    <h2>{characters.name}</h2>
                    <h3>Species: {characters.species}</h3>
                    <h3>Gender: {characters.gender}</h3>
                </article>
            </section>
        </main>
    );
    
}
