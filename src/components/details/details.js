import React, { useState, useEffect } from 'react';
import { fetchData } from '../../services/fetchData';
import { useParams } from 'react-router';
import './details.css';

export const Details = () => {
    const [character, setCharacter] = useState([]);
    const requestData = 'character';
    const { id } = useParams();

    const getCharacter = async (id) => {
        const response = await fetchData({
            requestData,
            id,
        });
        setCharacter(response)
    }

    useEffect(() => {
        getCharacter(id)
    }, [id]);

    return (
        <main className='details'>
        <h1>Character Details</h1>
        {
            character.map((character) => (
                <section className='detail' key={character.id}>
                    <img src={character.image} alt={character.name} />
                    <article>
                        <h2>{character.name}</h2>
                        <h3>Species: {character.species}</h3>
                        <h3>Gender: {character.gender}</h3>
                    </article>
                </section>
            ))
        }
        </main>
    );
};
