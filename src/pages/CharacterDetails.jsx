import React, {useEffect, useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom';

export default function CharacterDetails()  {
    const {id} = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);


    useEffect(() => {
        async function fetchCharacter() {
            try {
                const res = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
                const data = await res.json();
                setCharacter(data);
            } catch (e) {
                console.error('Error fetching character:', e);

            }
        }
        fetchCharacter();
    }, [id]);

    if (!character) return <p>Loading character details...</p>;

    return ( 
        <div className="character-details" style={{ position: 'relative'}}>
          
            <button onClick={() => navigate('/')}
style={{ 
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '10px 16px',
    backgroundColor:  '#007bff', 
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
}}
>Back</button>

<h1>{character.name}</h1>

<img src={character.image} alt={character.name} />


<p>Status: {character.status}</p>
<p>Species: {character.species}</p>
<p>Gender: {character.gender}</p>
<p>Origin: {character.origin.name}</p>
<p>Location: {character.location.name}</p>
</div>
);
}



        
