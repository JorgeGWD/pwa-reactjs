import React, { useState, useEffect } from 'react';
import { fetchData } from '../../services/fetchData';
import { useParams } from 'react-router';
import './details.css';
import { Button } from '../common/button/button';

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

    const returnPage = () => {
        window.history.back()
    }

    useEffect(() => {
        getCharacter(id)
    }, [id]);

    return (
        <main className='details'>
        <h1>Character Details</h1>
        <section className='detail'>
            {
                character.map((character) => (
                    <article className='detail__card' key={character.id}>
                        <img src={character.image} alt={character.name} />
                        <div className='detail__card-info'>
                            <h2>{character.name}</h2>
                            <h3>Species: {character.species}</h3>
                            <h3>Gender: {character.gender}</h3>
                        </div>
                    </article>
                ))
            }
        </section>
        <Button className='btn-principal' text='Back' onClick={returnPage}/>
        </main>
    );
};
