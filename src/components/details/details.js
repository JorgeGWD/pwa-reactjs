import React, { useState, useEffect } from 'react';
import { fetchData } from '../../services/fetchData';
import { useParams } from 'react-router';
import { Button } from '../common/button/button';
import GeneralInfo from '../generalInfo/generalInfo';
import './details.css';

export const Details = () => {
    const [character, setCharacter] = useState([]);
    const requestData = 'character';
    const { id } = useParams();

    const getCharacter = async (id) => {
        try {
            const response = await fetchData({
                requestData,
                id,
            });
            setCharacter(response);
        } catch (error) {
            console.error('Error fetching character data:', error);
        }
    };

    const characterName = character.length > 0 ? character[0].name : '';

    const returnPage = () => {
        window.history.back();
    };

    useEffect(() => {
        const fetchDataAndSetTitle = async () => {
            await getCharacter(id);
            document.title = `${characterName}`;
        };

        fetchDataAndSetTitle();
    }, [id, characterName]);

    return (
        <main className='details'>
            <h1>Character Details</h1>
            <div className="details__content">
                <section className='detail'>
                    {character.map((character) => (
                        <article className='detail__card' key={character.id}>
                            <img src={character.image} alt={character.name} />
                            <div className='detail__card-info'>
                                <h2>{character.name}</h2>
                                <h3>Species: {character.species}</h3>
                                <h3>Gender: {character.gender}</h3>
                            </div>
                        </article>
                    ))}
                </section>
                <GeneralInfo />
            </div>
            <Button className='btn-principal' text='Back' onClick={returnPage} />
        </main>
    );
};
