import React from 'react';
import CharacterCard from './CharacterCard';


export default function CharacterList({ characters}) {
    if(!characters || characters.length === 0) {
        return <p> No characters found.</p>;
    }
    
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'

        }}>
            {characters.map((char) => (
                <CharacterCard key={char.id} character={char} />
            ))}
            </div>
            
    );
}
