import React, {useState, useEffect} from "react";
import CharacterList from '../components/CharacterList';
import SearchBar from '../components/SearchBar';
 

export default function Home () {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect (()=> {
        async function fetchCharacters() {
            try {
                const url = `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(searchTerm)}`;
                const res = await fetch (url);
                const data = await res.json();
                setCharacters(data.results || []);
                
            } catch (e) {
                console.error('Error fetching characters:', e);
                setCharacters([]);
            } 
        }
        fetchCharacters();
    
    }   , [searchTerm]);

    return (
        <div className="container">
            <h1> Rick & Morty Characters</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CharacterList characters={characters} />

        </div>
    );
}