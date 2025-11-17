import React from "react";
import { useNavigate} from 'react-router-dom';


export default function CharacterCard ({ character }) {
    const navigate = useNavigate();
    
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '12px',
            textAlign: 'center',
            width: '200px',
            margin: '8px',
            cursor: 'pointer', 
        }}
        onClick={()=> navigate(`/character/${character.id}`)} 
        >
            <img 
            src={character.image} alt={character.name}
            style={{ width: '100%', borderRadius: '8px'}}
            />
            <h3>{character.name}</h3>
            <p> Status: {character.status}</p>
            <p>Species: {character.species}</p>
        </div>
    );
}