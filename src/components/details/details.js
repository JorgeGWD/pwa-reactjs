import { useState, useEffect } from 'react'
import { fetchData } from '../../services/fetchData'
import { useParams } from 'react-router'

export const Details = () => {

    const [characters, setCharacters] = useState({})
    const requestData = 'character'
    const { id } = useParams()

    useEffect(() => {
        fetchData({setCharacters, requestData, id})
    }, [id])
    
    return (
        <section>
            <article key={characters.id}>
                <img src={characters.image} alt={characters.name} />
                <p>{characters.name}</p>
            </article>
        </section>
    );
    
}
